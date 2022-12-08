import { Box, Button, styled, TextField } from "@mui/material";
import { useState } from "react";
import { TCart, TMtransaksi } from "../../schema/Transaksi.schema";
import { CountDiskon, CountTransaksi } from "../../utils/Count_transaksi";

const BoxInvoice = styled(Box)({
	padding: "30px",
	borderRadius: 1,
	boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
});

type TInvoiceProps = {
	transaksi: TCart[];
	transaksiMain: (
		data: Pick<TMtransaksi, "sub_total" | "diskon" | "total">
	) => void;
};

const Invoice: React.FC<TInvoiceProps> = ({ transaksi, transaksiMain }) => {
	let total = CountTransaksi(transaksi);
	const [diskon, setDiskon] = useState<number>(0);
	const [bayar, setBayar] = useState<number>(0);

	const diskonHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		const diskon = Number(value);
		setDiskon(diskon);

		const countDiskon = CountDiskon(total, diskon);
		setBayar(countDiskon);
	};

	const proccessTransaksi = () => {
		let t = 0;
		if (diskon > 0) {
			t = bayar;
		} else {
			t = total;
		}

		const data = {
			sub_total: total,
			diskon,
			total: t,
		};

		transaksiMain(data);
	};

	return (
		<BoxInvoice>
			<Box>
				<TextField
					label="Total"
					value={total}
					fullWidth
					disabled
					sx={{ mb: 2 }}
				/>
				<TextField
					label="Diskon"
					value={diskon}
					fullWidth
					type={"number"}
					onChange={diskonHandler}
					sx={{ mb: 2 }}
				/>
				<TextField
					label="Bayar"
					value={diskon > 0 ? bayar : total}
					fullWidth
					autoComplete="off"
					disabled
					sx={{ mb: 2 }}
				/>
				<Button
					variant="contained"
					onClick={proccessTransaksi}
					fullWidth
				>
					Selesaikan Transaksi
				</Button>
			</Box>
		</BoxInvoice>
	);
};

export default Invoice;
