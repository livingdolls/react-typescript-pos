import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { ASatuan } from "../../../schema/ISatuan";

type IForm = {
	add: (
		form: ASatuan,
		setForm: React.Dispatch<React.SetStateAction<ASatuan>>
	) => void;
};

const FormPage: React.FC<IForm> = ({ add }) => {
	const [form, setForm] = useState<ASatuan>({
		nama: "",
		keterangan: "",
	});

	const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		add(form, setForm);
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
				<TextField
					name="nama"
					required
					value={form.nama}
					fullWidth
					label="Nama Satuan"
					error={form.nama.length === 0}
					helperText={!form.nama.length ? "Nama is required" : ""}
					onChange={handleForm}
				/>

				<TextField
					name="keterangan"
					required
					value={form.keterangan}
					fullWidth
					label="Keterangan"
					error={form.keterangan.length === 0}
					helperText={
						!form.keterangan.length ? "Keterangan is required" : ""
					}
					onChange={handleForm}
				/>

				<Button variant="contained" type="submit">
					Tambah Satuan
				</Button>
			</Box>
		</form>
	);
};

export default FormPage;
