import { Button, Box, TextField } from "@mui/material";

type editProps = {
	submitEdit: (e: React.FormEvent<HTMLFormElement>) => void;
	data: any;
	setEdit: any;
};

export const Edit: React.FC<editProps> = (props) => {
	const { data, submitEdit, setEdit } = props;

	const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setEdit({ ...data, [name]: value });
	};

	return (
		<form onSubmit={(e) => submitEdit(e)}>
			<Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
				<TextField
					fullWidth
					value={data._id_kategori}
					label="id"
					name="id"
					disabled
					onChange={handleForm}
				/>

				<TextField
					value={data.nama}
					required
					fullWidth
					label="Nama Kategori"
					name="nama"
					onChange={handleForm}
				/>

				<TextField
					value={data.keterangan}
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
