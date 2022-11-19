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
import { TBarang } from "../../../schema/IBarng";
import { IData } from "../../../schema/IKategori";
import { ISatuan, TRSatuan, TSatuan } from "../../../schema/ISatuan";

type Barang = {
	nama: string;
	harga: number;
	qty: number;
	satuan: string;
	kategori: string;
};

type propsForm = {
	satuan: TSatuan[];
	kategori: IData[];
	add: (
		form: Omit<TBarang, "_id_barang">,
		setForm: React.Dispatch<
			React.SetStateAction<Omit<TBarang, "_id_barang">>
		>
	) => void;
};

const FormPage: React.FC<propsForm> = ({ satuan, kategori, add }) => {
	const [formData, setFormData] = useState<Omit<TBarang, "_id_barang">>({
		nama: "",
		harga: 0,
		qty: 0,
		_id_satuan: "",
		_id_kategori: "",
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
		add(formData, setFormData);
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
						name="_id_satuan"
						id="satuan"
						value={formData._id_satuan}
						onChange={handleSelect}
					>
						{satuan?.map((s) => {
							return (
								<MenuItem
									key={s._id_satuan}
									value={s._id_satuan}
								>
									{s.nama}
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>

				<FormControl variant="outlined" required>
					<InputLabel id="kategori">Kategori</InputLabel>
					<Select
						label="kategori"
						name="_id_kategori"
						id="kategori"
						value={formData._id_kategori}
						onChange={handleSelect}
					>
						{kategori?.map((k) => {
							return (
								<MenuItem
									key={k._id_kategori}
									value={k._id_kategori}
								>
									{k.nama}
								</MenuItem>
							);
						})}
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
