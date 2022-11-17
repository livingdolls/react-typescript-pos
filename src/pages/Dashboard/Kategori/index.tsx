import { Box, styled, Typography } from "@mui/material";
import { useEffect, useReducer, useState } from "react";
import MainModal from "../../../components/Modal";
import { Toast } from "../../../components/Toast";
import {
	initialKategori,
	KategoriReducer,
} from "../../../hooks/Kategori.reducer";
import { IData, IForm } from "../../../schema/IKategori";
import { IToast } from "../../../schema/Toast";
import {
	addKategori,
	delKategori,
	getAllKategori,
} from "../../../services/Kategori.service";
import { Edit } from "./Edit";
import FormPage from "./FormPage";
import TablePage from "./TabelPage";

const MainBox = styled(Box)({
	display: "flex",
	flexDirection: "row",
	alignItems: "baseline",
	gap: 20,
});

const Kategori: React.FC = () => {
	const [add, setAdd] = useState({
		loading: false,
		msg: {},
		error: null,
	});

	const [state, dispatch] = useReducer(KategoriReducer, initialKategori);
	const [open, setOpen] = useState<boolean>(false);
	const [edit, setEdit] = useState({});
	const [alert, setAlert] = useState<IToast>({
		open: false,
		severity: "info",
		msg: "",
	});

	useEffect(() => {
		dispatch({ type: "FETCH_START" });
		getAllKategori()
			.then((data) => {
				dispatch({ type: "FETCH_SUCCESS", payload: data });
			})
			.catch((err) => {
				dispatch({ type: "FETCH_ERROR", payload: err.message });
			});
	}, [add]);

	const handlerDelete = (id: string) => {
		delKategori(id)
			.then((res) => {
				setAdd({ ...add, loading: false });
				setAlert({
					severity: "success",
					open: true,
					msg: res.msg,
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
				setAlert({ severity: "success", open: true, msg: res.message });
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

	const submitEdit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("dadw");
	};

	const handleEdit = (id: IData) => {
		setOpen(true);
		setEdit(id);
	};

	const handleModal = () => {
		setOpen(false);
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
					variant="h6"
					fontWeight={400}
					sx={{ color: "#2196f3", marginBottom: 1 }}
				>
					TAMBAH KATEGORI
				</Typography>
				<FormPage tambah={handleAdd} add={add.loading} />
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
					variant="h6"
					fontWeight={400}
					sx={{ color: "#2196f3", marginBottom: 1 }}
				>
					DAFTAR KATEGORI
				</Typography>

				<TablePage
					kategoris={state}
					edit={handleEdit}
					delete={handlerDelete}
				/>
			</Box>

			<MainModal open={open} handleModal={handleModal}>
				<Box>
					<Edit
						data={edit}
						setEdit={setEdit}
						submitEdit={submitEdit}
					/>
				</Box>
			</MainModal>
		</MainBox>
	);
};

export default Kategori;
