import { Box, Button, styled, TextField } from "@mui/material";

const BoxInvoice = styled(Box)({
	padding: "30px",
	borderRadius: 1,
	boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
});

const Invoice = () => {
	return (
		<BoxInvoice>
			<Box>
				<TextField label="Total" fullWidth disabled sx={{ mb: 2 }} />
				<TextField
					label="Diskon"
					defaultValue={"0"}
					fullWidth
					sx={{ mb: 2 }}
				/>
				<TextField label="Bayar" fullWidth disabled sx={{ mb: 2 }} />
				<Button variant="contained" fullWidth>
					Selesaikan Transaksi
				</Button>
			</Box>
		</BoxInvoice>
	);
};

export default Invoice;
