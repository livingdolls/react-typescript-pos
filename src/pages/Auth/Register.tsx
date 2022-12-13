import { Box, Button, styled, TextField, Typography } from "@mui/material";
import { useReducer, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { TRegister } from "../../schema/User.schema";
import { RegistrasiUser } from "../../services/Auth.service";
import { NotifyAlert } from "../../utils/Notify";

const MainBox = styled(Box)({
	backgroundColor: "#fff",
	width: "60vh",
	padding: 30,
	borderRadius: 3,
	boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
});

type RegisterProps = {};

const Register: React.FC<RegisterProps> = () => {
	const [daftar, setDaftar] = useState<TRegister>({
		nama: "",
		email: "",
		password: "",
	});

	const navigate = useNavigate();

	const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setDaftar({ ...daftar, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		RegistrasiUser(daftar)
			.then((d) => {
				NotifyAlert("success", d.message);
			})
			.catch((err) => {
				NotifyAlert("error", err.message);
			});
		navigate("/auth/");
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
						type={"email"}
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
