import { Box, CssBaseline, styled, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import logo from "../../assets/logo.png";
import Login from "./Login";
import Register from "./Register";

const MainBox = styled(Box)({
	display: "flex",
	flexDirection: "row",
});

const LogoBox = styled(Box)({
	width: "50%",
	backgroundColor: "#2196f3",
	height: "100vh",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	flexDirection: "column",
	gap: 15,
});

const Auth = () => {
	return (
		<MainBox>
			<CssBaseline />
			<LogoBox>
				<img src={logo} alt="logo" height={500} width={500} />
				<Typography variant="h5" sx={{ color: "#fff" }}>
					STORE
				</Typography>
			</LogoBox>

			<LogoBox sx={{ backgroundColor: "#f2f7ff" }}>
				<Routes>
					<Route index element={<Login />} />
					<Route path="register" element={<Register />} />
				</Routes>
			</LogoBox>
		</MainBox>
	);
};

export default Auth;
