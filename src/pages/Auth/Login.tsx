import { Box, Button, styled, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllKategori } from "../../services/Kategori.service";

const MainBox = styled(Box)({
	backgroundColor: "#fff",
	width: "60vh",
	padding: 30,
	borderRadius: 3,
	boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
});

export type Login = {
	nama: string;
	password: string;
};

const Login = () => {
	const [login, setLogin] = useState<Login>({
		nama: "",
		password: "",
	});

	const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setLogin({ ...login, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log(login);
	};

	return (
		<MainBox>
			<Typography variant="h4" align="center" sx={{ color: "#2196f3" }}>
				LOGIN
			</Typography>
			<form onSubmit={(e) => handleSubmit(e)}>
				<Box display={"flex"} flexDirection={"column"} gap={2}>
					<TextField
						required
						autoComplete="off"
						label="Nama/Email"
						fullWidth
						name="nama"
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
						Login
					</Button>

					<Typography variant="subtitle2">
						Belum punya akun ? Daftar{" "}
						<NavLink
							to="/auth/register"
							style={{ textDecoration: "none" }}
						>
							disini
						</NavLink>
					</Typography>
				</Box>
			</form>
		</MainBox>
	);
};

export default Login;
