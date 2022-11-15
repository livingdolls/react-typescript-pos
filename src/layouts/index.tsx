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
	padding: "15px",
	backgroundColor: "#2196f3",
});

const Layout: React.FC<layout> = ({ children }) => {
	return (
		<Grid
			container
			direction={"row"}
			spacing={2}
			p={1}
			sx={{ backgroundColor: "#f2f7ff" }}
		>
			<Grid item xs={2}>
				<Sidebar />
			</Grid>

			<Grid item xs={10}>
				<MainBox>
					<SubBox>
						<Typography
							fontWeight={"bolder"}
							variant="h6"
							sx={{ color: "#fff" }}
						>
							Admin Dashboard
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
