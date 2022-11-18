import { Box, styled, Typography } from "@mui/material";
import { useEffect, useReducer, useState } from "react";
import MainModal from "../../../components/Modal";
import { Toast } from "../../../components/Toast";
import { AlertReducer, initilaAlert } from "../../../hooks/alert.reducer";
import { initialGS, SatuanReducer } from "../../../hooks/getSatuan.reducer";
import { postRSatuan, initialSP } from "../../../hooks/postSatuan.reducer";
import { ASatuan, ISatuan, TSatuan } from "../../../schema/ISatuan";
import {
	addSatuan,
	delSatuan,
	editSatuan,
	getAllSatuan,
} from "../../../services/Satuan.service";
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
	const [alert, dispatchAlert] = useReducer(AlertReducer, initilaAlert);
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
				dispatchAlert({ type: "OPEN", msg: d.message });
				setForm({ nama: "", keterangan: "" });
			})
			.catch((err) => {
				dispatchPost({ type: "POST_ERROR", payload: err.message });
				setLoading(!loading);
			});

		handleAlert();
	};

	const handleEdit = (form: TSatuan) => {
		setPatch(form);
		setModal(true);
	};

	const submitEdit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		editSatuan(patch)
			.then((d) => {
				dispatchAlert({ type: "OPEN", msg: d.message });
				setLoading(!loading);
			})
			.catch((err) => dispatchAlert({ type: "OPEN", msg: err.message }));

		handleAlert();
	};

	const handleDelete = (id: string) => {
		delSatuan(id)
			.then((res) => {
				dispatchAlert({ type: "OPEN", msg: res.message });
				setLoading(!loading);
			})
			.catch((err) => console.log(err));

		handleAlert();
	};

	const handleAlert = () => {
		setTimeout(() => {
			dispatchAlert({ type: "CLOSE" });
		}, 2000);
	};

	const handleModal = () => setModal(false);

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
					sx={{ color: "#2196f3", marginBottom: 1 }}
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
					sx={{ color: "#2196f3", marginBottom: 1 }}
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
