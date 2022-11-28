import {
	Box,
	Button,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	TextField,
	Tooltip,
	Typography,
} from "@mui/material";
import plus from "../../assets/plus.png";
import { TTransaksi } from "../../schema/Transaksi.schema";

type propsBarang = {
	transaksi: TTransaksi[];
	setTransaksi: React.Dispatch<React.SetStateAction<TTransaksi[]>>;
};

const Barang: React.FC<propsBarang> = ({ transaksi, setTransaksi }) => {
	const handleAdd = () => {
		const barang = {
			id: "3",
			nama: "Kopi Hitam",
			harga: 1000,
			qty: 5,
			total: 5000,
		};

		console.log(transaksi);

		const data = transaksi.findIndex((e) => e.id === barang.id);
		if (data !== -1) {
			const newData = { ...barang, qty: barang.qty + 1 };
			const newTransaksi = [...transaksi];
			newTransaksi[data] = newData;

			setTransaksi(newTransaksi);
		} else {
			setTransaksi([
				...transaksi,
				{
					id: "3",
					nama: "Kopi Hitam",
					harga: 1000,
					qty: 5,
					total: 5000,
				},
			]);
		}
	};
	return (
		<Box
			sx={{
				padding: "30px",
				borderRadius: 1,
				boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
			}}
		>
			<Box>
				<TextField label="Cari Barang" fullWidth />
			</Box>

			<List>
				<ListItem>
					<ListItemIcon>
						<>20</>
					</ListItemIcon>
					<ListItemText>
						<Typography variant="subtitle1" fontSize={"19px"}>
							Kopi Luwak
						</Typography>
					</ListItemText>
					<Box onClick={() => handleAdd()}>
						<img src={plus} height="28px" width="28px" />
					</Box>
				</ListItem>
				<Divider />
				<ListItem>
					<ListItemIcon>
						<>20</>
					</ListItemIcon>
					<ListItemText>
						<Typography variant="subtitle1" fontSize={"19px"}>
							Kopi Luwak
						</Typography>
					</ListItemText>
					<img src={plus} height="28px" width="28px" />
				</ListItem>
				<Divider />
				<ListItem>
					<ListItemIcon>
						<>20</>
					</ListItemIcon>
					<ListItemText>
						<Typography variant="subtitle1" fontSize={"19px"}>
							Kopi Luwak
						</Typography>
					</ListItemText>
					<img src={plus} height="28px" width="28px" />
				</ListItem>
				<Divider />

				<ListItem>
					<ListItemIcon>
						<>20</>
					</ListItemIcon>
					<ListItemText>
						<Typography variant="subtitle1" fontSize={"19px"}>
							Kopi Luwak
						</Typography>
					</ListItemText>
					<img src={plus} height="28px" width="28px" />
				</ListItem>
				<Divider />

				<ListItem>
					<ListItemIcon>
						<>20</>
					</ListItemIcon>
					<ListItemText>
						<Typography variant="subtitle1" fontSize={"19px"}>
							Kopi Luwak
						</Typography>
					</ListItemText>
					<img src={plus} height="28px" width="28px" />
				</ListItem>
				<Divider />

				<ListItem>
					<ListItemIcon>
						<>20</>
					</ListItemIcon>
					<ListItemText>
						<Typography variant="subtitle1" fontSize={"19px"}>
							Kopi Luwak
						</Typography>
					</ListItemText>
					<img src={plus} height="28px" width="28px" />
				</ListItem>
				<Divider />
			</List>
		</Box>
	);
};

export default Barang;
