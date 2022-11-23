import {
	Box,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Button,
} from "@mui/material";
import { IData } from "../../../schema/IKategori";
import { TSatuan } from "../../../schema/ISatuan";

type editProps = {
	satuan: TSatuan[];
	kategori: IData[];
	data: any;
	ubah: (name: string, value: string) => void;
	kirim: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Edit: React.FC<editProps> = ({ satuan, kategori, data, ubah, kirim }) => {
	return (
		<form onSubmit={(e) => kirim(e)}>
			<Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
				<TextField
					fullWidth
					required
					error={data.nama.length === 0}
					helperText={!data.nama.length ? "Nama is required" : ""}
					value={data.nama}
					label="Nama Barang"
					name="nama"
					onChange={(e) => ubah(e.target.name, e.target.value)}
				/>

				<TextField
					fullWidth
					required
					error={data.harga === 0}
					helperText={data.harga === 0 ? "Harga is required" : ""}
					value={Number(data.harga)}
					label="Harga Barang"
					name="harga"
					type="number"
					onChange={(e) => ubah(e.target.name, e.target.value)}
				/>

				<TextField
					fullWidth
					required
					error={data.qty === 0}
					helperText={data.qty === 0 ? "Stok is required" : ""}
					value={Number(data.qty)}
					label="Stok Awal"
					name="qty"
					type="number"
					onChange={(e) => ubah(e.target.name, e.target.value)}
				/>

				<FormControl variant="outlined" required>
					<InputLabel id="satuan">Satuan</InputLabel>
					<Select
						label="Months"
						name="_id_satuan"
						id="satuan"
						value={data._id_satuan}
						onChange={(e) => ubah(e.target.name, e.target.value)}
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
						value={data._id_kategori}
						onChange={(e) => ubah(e.target.name, e.target.value)}
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
					Edit Data
				</Button>
			</Box>
		</form>
	);
};

export default Edit;
