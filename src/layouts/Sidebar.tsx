import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	styled,
	Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const SubBox = styled(Box)({
	padding: "15px",
	backgroundColor: "#2196f3",
});

const Sidebar: React.FC = () => {
	return (
		<Box sx={{ height: "90vh", backgroundColor: "#fff" }}>
			<SubBox>
				<Typography
					fontWeight={"bolder"}
					variant="h6"
					sx={{ color: "#fff" }}
				>
					Main Menu
				</Typography>
			</SubBox>
			<List>
				<ListItem>
					<ListItemButton>
						<NavLink
							style={{ textDecoration: "none", color: "#263238" }}
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
