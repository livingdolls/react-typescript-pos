import { Box, styled, Typography } from "@mui/material";
import { useEffect, useReducer, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import MainModal from "../../../components/Modal";
import {
	initialPatchBarang,
	patchBarangReducer,
} from "../../../hooks/editBarang.reducer";
import { barangReducer, initialbarang } from "../../../hooks/getBarang.reducer";
import { initialGS, SatuanReducer } from "../../../hooks/getSatuan.reducer";
import {
	initialKategori,
	KategoriReducer,
} from "../../../hooks/Kategori.reducer";
import { initialPB, postRBarang } from "../../../hooks/postBarang.reducer";
import { TBarang } from "../../../schema/IBarng";
import {
	deleteBarangService,
	getAllBarang,
	getBarangReal,
	patchBarangService,
	postBarangService,
} from "../../../services/Barang.service";
import { getAllKategori } from "../../../services/Kategori.service";
import { getAllSatuan } from "../../../services/Satuan.service";
import { NotifyAlert } from "../../../utils/Notify";
import Edit from "./Edit";
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
	const [open, setOpen] = useState<boolean>(false);
	const [stateGet, dispatchGet] = useReducer(barangReducer, initialbarang);
	const [satuan, setSatuan] = useReducer(SatuanReducer, initialGS);
	const [kategori, setKategori] = useReducer(
		KategoriReducer,
		initialKategori
	);

	const [statePost, dispatchPost] = useReducer(postRBarang, initialPB);
	const [statePatch, dispatchPatch] = useReducer(
		patchBarangReducer,
		initialPatchBarang
	);

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
				dispatchPost({ type: "POST_SUCCESS", payload: d.message });
				NotifyAlert("success", d.message);
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
				NotifyAlert("error", err.message);
			});
	};

	const handleDeleteBarang = (id: string) => {
		deleteBarangService(id)
			.then((d) => {
				NotifyAlert("info", d.message);
				setRefresh(!refresh);
			})
			.catch((err) => {
				NotifyAlert("error", err.message);
			});
	};

	const handleEditBarang = async (data: string) => {
		await getBarangReal(data).then((d) => {
			const oneData = d.data[0];
			dispatchPatch({ type: "PATCH_INITIAL", payload: oneData });
		});
		setOpen(true);
	};

	const handleForm = (name: string, value: string) => {
		dispatchPatch({ type: "PATCH_CHANGE", field: name, value: value });
	};

	const patchBarang = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatchPatch({ type: "PATCH_START" });
		const { _id_barang, nama, _id_satuan, _id_kategori } =
			statePatch.barang;
		const harga = Number(statePatch.barang.harga);
		const qty = Number(statePatch.barang.qty);

		const data = { _id_barang, nama, harga, qty, _id_satuan, _id_kategori };
		await patchBarangService(data)
			.then((d) => {
				dispatchPatch({ type: "PATCH_SUCCESS", payload: d.message });
				NotifyAlert("success", d.message);
				setRefresh(!refresh);
			})
			.catch((err) => {
				dispatchPatch({ type: "PATCH_ERROR", payload: err.message });
				NotifyAlert("error", err.message);
			});
	};

	const handleModal = () => {
		setOpen(false);
	};

	return (
		<MainBox>
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
					load={statePost.loading}
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

				<TablePage
					data={stateGet}
					del={handleDeleteBarang}
					edit={handleEditBarang}
				/>
			</Box>

			<MainModal open={open} handleModal={handleModal}>
				<Edit
					satuan={satuan.satuan.data}
					kategori={kategori.kategori.data}
					data={statePatch.barang}
					ubah={handleForm}
					kirim={patchBarang}
				/>
			</MainModal>
		</MainBox>
	);
};

export default Barang;
