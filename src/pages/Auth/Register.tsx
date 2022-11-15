import { Box, Button, styled, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const MainBox = styled(Box)({
	backgroundColor: "#fff",
	width: "60vh",
	padding: 30,
	borderRadius: 3,
	boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
});

type Register = {
	nama: string;
	email: string;
	password: string;
};

const Register = () => {
	const [daftar, setDaftar] = useState<Register>({
		nama: "",
		email: "",
		password: "",
	});

	const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setDaftar({ ...daftar, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log(daftar);
	};

	return (
		<MainBox>
			<Typography variant="h4" align="center" sx={{ color: "#2196f3" }}>
				REGISTER
			</Typography>
			<form onSubmit={(e) => handleSubmit(e)}>
				<Box display={"flex"} flexDirection={"column"} gap={2}>
					<TextField
						required
						autoComplete="off"
						label="Nama Lengkap"
						fullWidth
						name="nama"
						onChange={handleForm}
					/>

					<TextField
						required
						autoComplete="off"
						label="Email"
						fullWidth
						name="email"
						onChange={handleForm}
					/>

					<TextField
						required
						autoComplete="off"
						label="Password"
						fullWidth
						name="password"
						type="password"
						onChange={handleForm}
					/>
					<Button variant="contained" type="submit">
						Regiester
					</Button>

					<Typography variant="subtitle2">
						Sudah punya akun ? Login{" "}
						<NavLink to="/auth/" style={{ textDecoration: "none" }}>
							disini
						</NavLink>
					</Typography>
				</Box>
			</form>
		</MainBox>
	);
};

export default Register;
