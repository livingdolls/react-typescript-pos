import { Button, Box, TextField } from "@mui/material";
import { TSatuan } from "../../../schema/ISatuan";

type editProps = {
	patch: TSatuan;
	setPatch: React.Dispatch<React.SetStateAction<TSatuan>>;
	submit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const Edit: React.FC<editProps> = ({ setPatch, patch, submit }) => {
	const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setPatch({ ...patch, [name]: value });
	};

	return (
		<form onSubmit={(e) => submit(e)}>
			<Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
				<TextField
					fullWidth
					value={patch._id_satuan}
					label="id"
					name="id"
					disabled
					onChange={handleForm}
				/>

				<TextField
					value={patch.nama}
					required
					fullWidth
					label="Nama Kategori"
					name="nama"
					onChange={handleForm}
				/>

				<TextField
					value={patch.keterangan}
					required
					fullWidth
					label="Keterangan"
					name="keterangan"
					onChange={handleForm}
				/>

				<Button variant="contained" type="submit">
					Edit Kategori
				</Button>
			</Box>
		</form>
	);
};
