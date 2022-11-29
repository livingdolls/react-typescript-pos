import { Avatar, Box, Button, styled, Typography } from "@mui/material";
import logo from "../../assets/logo.png";

const NavBox = styled(Box)({
	height: "70px",
	width: "100%",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	paddingLeft: "30px",
	paddingRight: "35px",
});

const Navbar = () => {
	return (
		<NavBox>
			<Box display="flex" flexDirection={"row"}>
				<img src={logo} height="40px" width="40px" />
				<Typography
					variant="h4"
					sx={{ mt: 0.5, ml: 2 }}
					color="primary"
					fontWeight="bold"
				>
					STORE
				</Typography>
			</Box>

			<Box
				display="flex"
				flexDirection={"row"}
				gap={1}
				alignItems="center"
			>
				<Typography variant="h6" color="primary">
					Yurina Hirate
				</Typography>
				<Avatar />
				<Button variant="contained" size="small">
					Dashboard
				</Button>
			</Box>
		</NavBox>
	);
};

export default Navbar;
