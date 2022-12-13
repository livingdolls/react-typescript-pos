import { Box, styled, Typography } from "@mui/material";
import { useEffect, useReducer, useState } from "react";
import MainModal from "../../../components/Modal";
import { initialGS, SatuanReducer } from "../../../hooks/getSatuan.reducer";
import { postRSatuan, initialSP } from "../../../hooks/postSatuan.reducer";
import { ASatuan, TSatuan } from "../../../schema/ISatuan";
import {
	addSatuan,
	delSatuan,
	editSatuan,
	getAllSatuan,
} from "../../../services/Satuan.service";
import { NotifyAlert } from "../../../utils/Notify";
import { Edit } from "./Edit";
import FormPage from "./FormPage";
import TablePage from "./TablePage";

const MainBox = styled(Box)({
	display: "flex",
	flexDirection: "row",
	alignItems: "baseline",
	gap: 20,
});

const Satuan = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [stateGet, dispatchGet] = useReducer(SatuanReducer, initialGS);
	const [statePost, dispatchPost] = useReducer(postRSatuan, initialSP);
	const [modal, setModal] = useState<boolean>(false);

	const [patch, setPatch] = useState<TSatuan>({
		_id_satuan: "",
		nama: "",
		keterangan: "",
	});

	useEffect(() => {
		dispatchGet({ type: "FETCH_START" });
		getAllSatuan()
			.then((d) => {
				dispatchGet({ type: "FETCH_SUCCESS", payload: d });
			})
			.catch((err) => {
				dispatchGet({ type: "FETCH_ERROR", payload: err.message });
			});
	}, [loading]);

	const submitAddSatuan = (
		form: ASatuan,
		setForm: React.Dispatch<React.SetStateAction<ASatuan>>
	) => {
		dispatchPost({ type: "POST_START" });
		addSatuan(form)
			.then((d) => {
				setLoading(!loading);
				dispatchPost({ type: "POST_SUCCESS", payload: d.message });
				NotifyAlert("success", d.message);
				setForm({ nama: "", keterangan: "" });
			})
			.catch((err) => {
				dispatchPost({ type: "POST_ERROR", payload: err.message });
				NotifyAlert("error", err.message);
				setLoading(!loading);
			});
	};

	const handleEdit = (form: TSatuan) => {
		setPatch(form);
		setModal(true);
	};

	const submitEdit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		editSatuan(patch)
			.then((d) => {
				NotifyAlert("success", d.message);
				setLoading(!loading);
			})
			.catch((err) => NotifyAlert("error", err.message));
	};

	const handleDelete = (id: string) => {
		delSatuan(id)
			.then((res) => {
				NotifyAlert("info", res.message);
				setLoading(!loading);
			})
			.catch((err) => NotifyAlert("error", err.message));
	};

	const handleModal = () => setModal(false);

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
					TAMBAH SATUAN
				</Typography>
				<FormPage add={submitAddSatuan} />
			</Box>

			<Box
				sx={{
					orderRadius: 2,
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
					DAFTAR SATUAN
				</Typography>

				<TablePage
					satuan={stateGet}
					del={handleDelete}
					edit={handleEdit}
				/>
			</Box>

			<MainModal open={modal} handleModal={handleModal}>
				<Box>
					<Edit
						patch={patch}
						setPatch={setPatch}
						submit={submitEdit}
					/>
				</Box>
			</MainModal>
		</MainBox>
	);
};

export default Satuan;
