import { Box, Grid, styled, Typography } from "@mui/material";
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
	alignItems: "center",
	marginLeft: "30px",
});

const Layout: React.FC<layout> = ({ children }) => {
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
