import { Box, Button, Grid, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UseRefreshToken from "../hooks/UseRefreshToken";
import { LogoutUser } from "../services/Auth.service";
import { NotifyAlert } from "../utils/Notify";
import Sidebar from "./Sidebar";

interface layout {
	children: React.ReactNode;
}

const MainBox = styled(Box)({
	display: "flex",
	flexDirection: "column",
});

const SubBox = styled(Box)({
	height: "70px",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	marginLeft: "30px",
});

const Layout: React.FC<layout> = ({ children }) => {
	const navigate = useNavigate();

	const handlerLogout = async () => {
		await LogoutUser()
			.then((d) => {
				console.log(d);
				NotifyAlert("info", "success logout!");
				navigate("/auth/");
			})
			.catch((err) => console.log(err));
	};
	return (
		<Grid
			container
			direction={"row"}
			spacing={2}
			sx={{ backgroundColor: "#f2f7ff" }}
		>
			<Grid item xs={2}>
				<Sidebar />
			</Grid>

			<Grid item xs={10}>
				<MainBox>
					<SubBox>
						<Typography
							fontWeight="bold"
							variant="h5"
							color="secondary"
						>
							ADMIN DASHBOARD
						</Typography>

						<Button
							variant="contained"
							color="error"
							sx={{ marginRight: "30px" }}
							onClick={handlerLogout}
						>
							LOGOUT
						</Button>
					</SubBox>

					<Box p={2} sx={{ backgroundColor: "#f2f7ff" }}>
						{children}
					</Box>
				</MainBox>
			</Grid>
		</Grid>
	);
};

export default Layout;
