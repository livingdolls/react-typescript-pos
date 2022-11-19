import {
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
