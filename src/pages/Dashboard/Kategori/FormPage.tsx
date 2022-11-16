import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { IForm } from "../../../schema/IKategori";

type formProps = {
	tambah: (
		form: IForm,
		setForm: React.Dispatch<React.SetStateAction<IForm>>
	) => void;
	add: boolean;
};

const FormPage: React.FC<formProps> = ({ tambah, add }) => {
	const [form, setForm] = useState<IForm>({
		nama: "",
		keterangan: "",
	});

	const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		tambah(form, setForm);
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
				<TextField
					required
					fullWidth
					error={form.nama.length === 0}
					helperText={!form.nama.length ? "Nama is required!" : ""}
					value={form.nama}
					label="Nama Kategori"
					name="nama"
					onChange={handleForm}
				/>

				<TextField
					required
					fullWidth
					error={form.keterangan.length === 0}
					helperText={
						!form.nama.length ? "Keterangan is required" : ""
					}
					value={form.keterangan}
					label="Keterangan"
					name="keterangan"
					onChange={handleForm}
				/>

				{add ? (
					<Button disabled variant="contained" type="submit">
						Loading...
					</Button>
				) : (
					<Button variant="contained" type="submit">
						Tambah Kategori
					</Button>
				)}
			</Box>
		</form>
	);
};

export default FormPage;
