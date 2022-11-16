import { Box, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Toast } from "../../../components/Toast";
import { IKategori, IForm } from "../../../schema/IKategori";
import { IToast } from "../../../schema/Toast";
import {
	addKategori,
	delKategori,
	getAllKategori,
} from "../../../services/Kategori.service";
import FormPage from "./FormPage";
import TablePage from "./TabelPage";

const MainBox = styled(Box)({
	display: "flex",
	flexDirection: "row",
	alignItems: "baseline",
	gap: 20,
});

type TKategori = {
	loading: boolean;
	kategori: IKategori;
	error: null;
};

const Kategori: React.FC = () => {
	const [kategoris, setKategoris] = useState<TKategori>({
		loading: true,
		kategori: {} as IKategori,
		error: null,
	});

	const [add, setAdd] = useState({
		loading: false,
		msg: {},
		error: null,
	});

	const [alert, setAlert] = useState<IToast>({
		open: false,
		severity: "info",
		msg: "",
	});

	useEffect(() => {
		setKategoris({ ...kategoris, loading: true });
		getAllKategori()
			.then((res) => res.data)
			.then((data) => {
				setKategoris({ ...kategoris, kategori: data, loading: false });
			})
			.catch((err) =>
				setKategoris({ ...kategoris, error: err, loading: false })
			);
	}, [add]);

	const handlerDelete = (id: string) => {
		delKategori(id)
			.then((res) => {
				setAdd({ ...add, loading: false });
				setAlert({
					severity: "success",
					open: true,
					msg: res.data.msg,
				});
			})
			.catch((err) => console.log(err));

		setTimeout(() => {
			setAlert({ ...alert, open: false });
		}, 2000);
	};

	const handleAdd = (
		form: IForm,
		setForm: React.Dispatch<React.SetStateAction<IForm>>
	) => {
		setAdd({ ...add, loading: true });
		addKategori(form)
			.then((res) => {
				const msg = res.data.message;
				setAlert({ severity: "success", open: true, msg: msg });
				setForm({ nama: "", keterangan: "" });
				setAdd({ ...add, loading: false });
			})
			.catch((err) => {
				setAlert({ severity: "error", open: true, msg: err });
			});

		setTimeout(() => {
			setAlert({ ...alert, open: false });
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
				}}
			>
				<Typography
					variant="h6"
					fontWeight={400}
					sx={{ color: "#2196f3", marginBottom: 1 }}
				>
					TAMBAH KATEGORI
				</Typography>
				<FormPage tambah={handleAdd} add={add.loading} />
			</Box>

			<Box sx={{ borderRadius: 2, padding: 3, backgroundColor: "#fff" }}>
				<Typography
					variant="h6"
					fontWeight={400}
					sx={{ color: "#2196f3", marginBottom: 1 }}
				>
					DAFTAR KATEGORI
				</Typography>

				<TablePage kategoris={kategoris} delete={handlerDelete} />
			</Box>
		</MainBox>
	);
};

export default Kategori;
