import { Box, styled } from "@mui/material";
import { useEffect, useReducer, useState } from "react";
import { initialTransaksi, transaksiCart } from "../../hooks/Transaksi.reducer";
import { TCart, TTransaksi } from "../../schema/Transaksi.schema";
import { getAllBarang } from "../../services/Barang.service";
import Barang from "./Barang";
import Invoice from "./Invoice";
import Navbar from "./Navbar";
import TabelTransaksi from "./TabelTransaksi";

const MainBox = styled(Box)({
	display: "flex",
	justifyContent: "flex-start",
	alignItems: "baseline",
	padding: "40px",
	gap: 20,
});

const BoxBody = styled(Box)({
	backgroundColor: "#f2f7ff",
	height: "100vh",
});

const Layout = () => {
	const [stateCart, dispatchCart] = useReducer(
		transaksiCart,
		initialTransaksi
	);

	useEffect(() => {
		getAllBarang().then((d) => {
			dispatchCart({ type: "FETCH_BARANG", payload: d.data });
		});
	}, []);

	const addCart = (barang: TCart) => {
		const data = {
			id: barang._id_barang,
			nama: barang.nama,
			harga: barang.harga,
			qty: 1,
			total: 1000,
		};

		const find = stateCart.cart.findIndex((e: any) => e.id === data.id);

		if (find !== -1) {
			const md = stateCart.cart[find];
			const newQty = { ...md, qty: md.qty + 1 };
			const newTransaksi = [...stateCart.cart];
			newTransaksi[find] = newQty;

			dispatchCart({ type: "ADD_CART", payload: newTransaksi });
		} else {
			const newD = [...stateCart.cart, data];

			dispatchCart({ type: "ADD_CART", payload: newD });
		}
	};

	const removeCart = (id: string) => {
		const data = stateCart.cart.filter((e: any) => e.id !== id);

		dispatchCart({ type: "REMOVE_CART", payload: data });
	};

	return (
		<BoxBody>
			<Navbar />

			<MainBox>
				<Box sx={{ width: "30%", backgroundColor: "#fff" }}>
					<Barang data={stateCart.barang} add={addCart} />
				</Box>

				<Box sx={{ width: "50%", backgroundColor: "#fff" }}>
					<TabelTransaksi
						transaksi={stateCart.cart}
						del={removeCart}
					/>
				</Box>

				<Box sx={{ width: "20%", backgroundColor: "#fff" }}>
					<Invoice />
				</Box>
			</MainBox>
		</BoxBody>
	);
};

export default Layout;
