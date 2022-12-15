import { Box, styled } from "@mui/material";
import { useContext, useEffect, useReducer, useState } from "react";
import { Toast } from "../../components/Toast";
import AuthContext from "../../context/AuthProvider";
import { initialTransaksi, transaksiCart } from "../../hooks/Transaksi.reducer";
import { IToast } from "../../schema/Toast";
import { TCart, TMtransaksi } from "../../schema/Transaksi.schema";
import { getAllBarang } from "../../services/Barang.service";
import { postTransaksi } from "../../services/Transaksi.servoice";
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
	const auth = useContext(AuthContext);
	const [stateCart, dispatchCart] = useReducer(
		transaksiCart,
		initialTransaksi
	);

	const [alert, setAlert] = useState<IToast>({
		open: false,
		severity: "success",
		msg: "",
	});

	useEffect(() => {
		getAllBarang().then((d) => {
			dispatchCart({ type: "FETCH_BARANG", payload: d.data });
		});
	}, []);

	const addCart = (barang: TCart) => {
		const { _id_barang, nama, harga } = barang;
		const data: TCart = {
			_id_barang,
			nama,
			harga,
			qty: 1,
			sub_total: barang.harga,
		};

		const find = stateCart.cart.findIndex(
			(e: TCart) => e._id_barang === data._id_barang
		);

		if (find !== -1) {
			const md = stateCart.cart[find];
			const newQty = {
				...md,
				qty: md.qty + 1,
				sub_total: md.harga * (md.qty + 1),
			};
			const newTransaksi = [...stateCart.cart];
			newTransaksi[find] = newQty;

			dispatchCart({ type: "ADD_CART", payload: newTransaksi });
		} else {
			const newD = [...stateCart.cart, data];

			dispatchCart({ type: "ADD_CART", payload: newD });
		}
	};

	const removeCart = (_id_barang: string) => {
		const data = stateCart.cart.filter(
			(e: any) => e._id_barang !== _id_barang
		);

		dispatchCart({ type: "REMOVE_CART", payload: data });
	};

	const transaksiMain = (
		data: Pick<TMtransaksi, "sub_total" | "diskon" | "total">
	) => {
		const cart = stateCart.cart;
		let newCart: Array<Omit<TCart, "nama">> = [];
		cart.map((c: TCart) => {
			const { nama, ...noName } = c;
			newCart.push(noName);
		});

		const main: TMtransaksi = {
			_id_admin: "Yurina",
			invoice: 20210520002,
			sub_total: data.sub_total,
			diskon: data.diskon,
			total: data.total,
			detail_transaksi: newCart,
		};

		postTransaksi(main)
			.then((e) => {
				dispatchCart({ type: "COMPLETED_CART" });
				setAlert({
					severity: "success",
					open: true,
					msg: "success transaction!",
				});
			})
			.catch((err) => {
				setAlert({
					severity: "error",
					open: true,
					msg: "something Wrong!",
				});
			});

		handleAlert();
	};

	const handleAlert = () => {
		setTimeout(() => {
			setAlert({ ...alert, open: false });
		}, 2000);
	};

	return (
		<BoxBody>
			<Navbar />
			{alert ? <Toast TToast={alert} /> : ""}

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
					<Invoice
						transaksi={stateCart.cart}
						transaksiMain={transaksiMain}
					/>
				</Box>
			</MainBox>
		</BoxBody>
	);
};

export default Layout;
