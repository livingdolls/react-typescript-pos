import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	TextField,
} from "@mui/material";
import React, { useState } from "react";

type Barang = {
	nama: string;
	harga: number;
	qty: number;
	satuan: string;
	kategori: string;
};

const FormPage = () => {
	const [formData, setFormData] = useState<Barang>({
		nama: "",
		harga: 0,
		qty: 0,
		satuan: "",
		kategori: "",
	});

	const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSelect = (e: SelectChangeEvent) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		console.log(formData);
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
				<TextField
					fullWidth
					required
					error={formData.nama.length === 0}
					helperText={!formData.nama.length ? "Nama is required" : ""}
					value={formData.nama}
					label="Nama Barang"
					name="nama"
					onChange={handleForm}
				/>

				<TextField
					fullWidth
					required
					error={formData.harga === 0}
					helperText={formData.harga === 0 ? "Harga is required" : ""}
					value={formData.harga}
					label="Harga Barang"
					name="harga"
					type="number"
					onChange={handleForm}
				/>

				<TextField
					fullWidth
					required
					error={formData.qty === 0}
					helperText={formData.qty === 0 ? "Stok is required" : ""}
					value={formData.qty}
					label="Stok Awal"
					name="qty"
					type="number"
					onChange={handleForm}
				/>

				<FormControl variant="outlined" required>
					<InputLabel id="satuan">Satuan</InputLabel>
					<Select
						label="Months"
						name="satuan"
						id="satuan"
						value={formData.satuan}
						onChange={handleSelect}
					>
						<MenuItem value={"1"}>PCS</MenuItem>
						<MenuItem value={"2"}>BOX</MenuItem>
						<MenuItem value={"3"}>Plastik</MenuItem>
					</Select>
				</FormControl>

				<FormControl variant="outlined" required>
					<InputLabel id="kategori">Kategori</InputLabel>
					<Select
						label="kategori"
						name="kategori"
						id="kategori"
						value={formData.kategori}
						onChange={handleSelect}
					>
						<MenuItem value={"1"}>Makanan</MenuItem>
						<MenuItem value={"2"}>Kebutuhan Rumah Tangga</MenuItem>
						<MenuItem value={"3"}>Pakaian</MenuItem>
					</Select>
				</FormControl>

				<Button variant="contained" type="submit">
					Tambah Data
				</Button>
			</Box>
		</form>
	);
};

export default FormPage;
