import { Box, styled, Typography } from "@mui/material";
import { useEffect, useReducer, useState } from "react";
import MainModal from "../../../components/Modal";
import {
	initialKategori,
	KategoriReducer,
} from "../../../hooks/Kategori.reducer";
import {
	editKategoriInitial,
	KategoriEditReducer,
} from "../../../hooks/KategoriEdit.reducer";
import { IData, IForm } from "../../../schema/IKategori";
import {
	addKategori,
	delKategori,
	editKategori,
	getAllKategori,
} from "../../../services/Kategori.service";
import { NotifyAlert } from "../../../utils/Notify";
import { Edit } from "./Edit";
import FormPage from "./FormPage";
import TablePage from "./TabelPage";

const MainBox = styled(Box)({
	display: "flex",
	flexDirection: "row",
	alignItems: "baseline",
	gap: 20,
	maxHeight: "90vh",
	overflow: "auto",
});

const Kategori: React.FC = () => {
	const [add, setAdd] = useState({
		loading: false,
		msg: {},
		error: null,
	});

	const [state, dispatch] = useReducer(KategoriReducer, initialKategori);
	const [stateEdit, dispatchEdit] = useReducer(
		KategoriEditReducer,
		editKategoriInitial
	);

	const [open, setOpen] = useState<boolean>(false);
	const [edit, setEdit] = useState<IData>({
		_id_kategori: "",
		nama: "",
		keterangan: "",
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
				NotifyAlert("info", res.msg);
			})
			.catch((err) => NotifyAlert("error", err.message));
	};

	const handleAdd = (
		form: IForm,
		setForm: React.Dispatch<React.SetStateAction<IForm>>
	) => {
		setAdd({ ...add, loading: true });
		addKategori(form)
			.then((res) => {
				NotifyAlert("success", res.message);
				setForm({ nama: "", keterangan: "" });
				setAdd({ ...add, loading: false });
			})
			.catch((err) => {
				NotifyAlert("error", err.message);
			});
	};

	const submitEdit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatchEdit({ type: "FETCH_START" });
		editKategori(edit)
			.then((d) => {
				dispatchEdit({ type: "FETCH_SUCCESS", payload: d.msg });
				NotifyAlert("success", d.msg);
				setAdd({ ...add, loading: false });
			})
			.catch((err) => {
				dispatchEdit({ type: "FETCH_ERROR", payload: err.message });
				NotifyAlert("error", err.message);
			});
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
					color="secondary"
					mb={1}
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
					color="secondary"
					mb={1}
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
