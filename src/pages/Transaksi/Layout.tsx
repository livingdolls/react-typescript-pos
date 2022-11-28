import { Box, styled } from "@mui/material";
import { useState } from "react";
import Barang from "./Barang";
import Invoice from "./Invoice";
import TabelTransaksi from "./TabelTransaksi";

const MainBox = styled(Box)({
	backgroundColor: "#f2f7ff",
	height: "100vh",
	display: "flex",
	justifyContent: "flex-start",
	alignItems: "baseline",
	padding: "40px",
	gap: 20,
});

const Layout = () => {
	const [transaksi, setTransaksi] = useState([
		{ id: "1", nama: "luwak", harga: 2000, qty: 2, total: 4000 },
		{ id: "2", nama: "Kopi luwak", harga: 2000, qty: 2, total: 2000 },
	]);

	return (
		<MainBox>
			<Box sx={{ width: "30%", backgroundColor: "#fff" }}>
				<Barang transaksi={transaksi} setTransaksi={setTransaksi} />
			</Box>

			<Box sx={{ width: "50%", backgroundColor: "#fff" }}>
				<TabelTransaksi
					transaksi={transaksi}
					setTransaksi={setTransaksi}
				/>
			</Box>

			<Box sx={{ width: "20%", backgroundColor: "#fff" }}>
				<Invoice />
			</Box>
		</MainBox>
	);
};

export default Layout;
