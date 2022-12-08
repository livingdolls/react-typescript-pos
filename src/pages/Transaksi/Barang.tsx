import {
	Box,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	TextField,
	Typography,
} from "@mui/material";
import plus from "../../assets/plus.png";
import { TBarang } from "../../schema/IBarng";
import { TCart } from "../../schema/Transaksi.schema";

type propsBarang = {
	data: TBarang[];
	add: (b: TCart) => void;
};

const Barang: React.FC<propsBarang> = ({ data, add }) => {
	const handleAdd = (b: TBarang) => {
		const cart: TCart = {
			_id_barang: b._id_barang,
			nama: b.nama,
			harga: b.harga,
			qty: 1,
			sub_total: b.harga,
		};
		add(cart);
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
				{data.map((b) => {
					return (
						<Box key={b._id_barang}>
							<ListItem key={b._id_barang}>
								<ListItemIcon>
									<>{b.qty}</>
								</ListItemIcon>
								<ListItemText>
									<Typography
										variant="subtitle1"
										fontSize={"19px"}
									>
										{b.nama}
									</Typography>
								</ListItemText>
								<Box onClick={() => handleAdd(b)}>
									<img
										src={plus}
										height="28px"
										width="28px"
									/>
								</Box>
							</ListItem>
							<Divider />
						</Box>
					);
				})}
			</List>
		</Box>
	);
};

export default Barang;
