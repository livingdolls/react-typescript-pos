import {
	Avatar,
	Box,
	List,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
	styled,
	Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const SubBox = styled(Box)({
	height: "70px",
});

const BoxProfil = styled(Box)({
	height: "150px",
	display: "flex",
	alignItems: "center",
	flexDirection: "column",
	justifyContent: "center",
	gap: 15,
});

const Sidebar: React.FC = () => {
	return (
		<Box
			sx={{
				height: "100vh",
				backgroundColor: "#fff",
				boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
			}}
		>
			<SubBox>
				<List>
					<ListItem>
						<ListItemAvatar>
							<img
								src={logo}
								alt={logo}
								width="50px"
								height="50px"
							/>
						</ListItemAvatar>
						<ListItemText>
							<Typography variant="h6" color="secondary">
								STORE
							</Typography>
						</ListItemText>
					</ListItem>
				</List>
			</SubBox>

			<BoxProfil>
				<Avatar sx={{ height: "70px", width: "70px" }} />
				<Typography variant="h6">Yurina Hirate</Typography>
				<Typography
					variant="button"
					sx={{ color: "#3e3e3e", marginTop: -2 }}
				>
					Super Admin
				</Typography>
			</BoxProfil>

			<List>
				<ListItem>
					<ListItemButton>
						<NavLink
							style={{
								textDecoration: "none",
								color: "#263238",
							}}
							to={"/dashboard/"}
						>
							<ListItemText>
								<Typography variant="h6">Home</Typography>
							</ListItemText>
						</NavLink>
					</ListItemButton>
				</ListItem>

				<ListItem>
					<ListItemButton>
						<NavLink
							style={{ textDecoration: "none", color: "#263238" }}
							to={"/dashboard/barang"}
						>
							<ListItemText>
								<Typography variant="h6">
									Master Barang
								</Typography>
							</ListItemText>
						</NavLink>
					</ListItemButton>
				</ListItem>

				<ListItem>
					<ListItemButton>
						<NavLink
							style={{ textDecoration: "none", color: "#263238" }}
							to={"/dashboard/kategori"}
						>
							<Typography variant="h6">
								Master Kategori
							</Typography>
						</NavLink>
					</ListItemButton>
				</ListItem>

				<ListItem>
					<ListItemButton>
						<NavLink
							style={{ textDecoration: "none", color: "#263238" }}
							to={"/dashboard/satuan"}
						>
							<Typography variant="h6">Master Satuan</Typography>
						</NavLink>
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);
};
export default Sidebar;
