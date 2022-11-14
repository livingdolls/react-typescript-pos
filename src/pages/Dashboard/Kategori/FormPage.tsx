import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

type Kategori = {
	nama: string;
	keterangan: string;
};

const FormPage: React.FC = () => {
	const [form, setForm] = useState<Kategori>({
		nama: "",
		keterangan: "",
	});

	const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(form);
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

				<Button variant="contained" type="submit">
					Tambah Kategori
				</Button>
			</Box>
		</form>
	);
};

export default FormPage;
