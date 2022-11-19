import { Box, styled, Typography } from "@mui/material";
import { useEffect, useReducer, useState } from "react";
import { Toast } from "../../../components/Toast";
import { AlertReducer, initilaAlert } from "../../../hooks/alert.reducer";
import { barangReducer, initialbarang } from "../../../hooks/getBarang.reducer";
import { initialGS, SatuanReducer } from "../../../hooks/getSatuan.reducer";
import {
	initialKategori,
	KategoriReducer,
} from "../../../hooks/Kategori.reducer";
import { initialPB, postRBarang } from "../../../hooks/postBarang.reducer";
import { TBarang } from "../../../schema/IBarng";
import {
	getAllBarang,
	postBarangService,
} from "../../../services/Barang.service";
import { getAllKategori } from "../../../services/Kategori.service";
import { getAllSatuan } from "../../../services/Satuan.service";
import FormPage from "./FormPage";
import TablePage from "./TablePage";

const MainBox = styled(Box)({
	display: "flex",
	flexDirection: "row",
	alignItems: "baseline",
	gap: 20,
});

const Barang = () => {
	const [refresh, setRefresh] = useState<boolean>(false);
	const [stateGet, dispatchGet] = useReducer(barangReducer, initialbarang);
	const [satuan, setSatuan] = useReducer(SatuanReducer, initialGS);
	const [kategori, setKategori] = useReducer(
		KategoriReducer,
		initialKategori
	);

	const [statePost, dispatchPost] = useReducer(postRBarang, initialPB);
	const [alert, setAlert] = useReducer(AlertReducer, initilaAlert);

	useEffect(() => {
		dispatchGet({ type: "FETCH_START" });
		getAllBarang()
			.then((d) => {
				dispatchGet({ type: "FETCH_SUCCESS", payload: d });
			})
			.catch((err) => {
				dispatchGet({ type: "FETCH_ERROR", payload: err.message });
			});

		getSatuan();
		getKategori();
	}, [refresh]);

	const getSatuan = () => {
		getAllSatuan().then((d) => {
			setSatuan({ type: "FETCH_SUCCESS", payload: d });
		});
	};

	const getKategori = () => {
		getAllKategori().then((d) => {
			setKategori({ type: "FETCH_SUCCESS", payload: d });
		});
	};

	const postBarang = (
		form: Omit<TBarang, "_id_barang">,
		setForm: React.Dispatch<
			React.SetStateAction<Omit<TBarang, "_id_barang">>
		>
	) => {
		const { nama, harga, qty, _id_satuan, _id_kategori } = form;
		const toHarga: number = Number(harga);
		const toQty: number = Number(qty);
		const data = {
			nama,
			harga: toHarga,
			qty: toQty,
			_id_satuan,
			_id_kategori,
		};

		dispatchPost({ type: "POST_START" });
		postBarangService(data)
			.then((d) => {
				setAlert({ type: "OPEN", msg: d.message });
				dispatchPost({ type: "POST_SUCCESS", payload: d.message });
				setRefresh(!refresh);
				setForm({
					nama: "",
					harga: 0,
					qty: 0,
					_id_satuan: "",
					_id_kategori: "",
				});
			})
			.catch((err) => {
				dispatchPost({ type: "POST_ERROR", payload: err.message });
				setAlert({ type: "OPEN", msg: err.message, severity: "error" });
			});

		handleAlert();
	};

	const handleAlert = () => {
		setTimeout(() => {
			setAlert({ type: "CLOSE" });
		}, 2000);
	};

	return (
		<MainBox>
			{alert ? <Toast TToast={alert} /> : ""}
			<Box
				sx={{
					width: "33%",
					borderRadius: 2,
					padding: 3,
					backgroundColor: "#fff",
					boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
				}}
			>
				<Typography
					color="secondary"
					mb={1}
					variant="h6"
					fontWeight={400}
				>
					TAMBAH BARANG
				</Typography>

				<FormPage
					satuan={satuan.satuan.data}
					kategori={kategori.kategori.data}
					add={postBarang}
				/>
			</Box>

			<Box
				sx={{
					borderRadius: 2,
					padding: 3,
					backgroundColor: "#fff",
					boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
				}}
			>
				<Typography
					color="secondary"
					mb={1}
					variant="h6"
					fontWeight={400}
				>
					DAFTAR BARANG
				</Typography>

				<TablePage data={stateGet} />
			</Box>
		</MainBox>
	);
};

export default Barang;
