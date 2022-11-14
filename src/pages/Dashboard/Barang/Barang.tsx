import { Box, styled, Typography } from "@mui/material";
import FormPage from "./FormPage";
import TablePage from "./TablePage";

const MainBox = styled(Box)({
	display: "flex",
	flexDirection: "row",
	alignItems: "baseline",
	gap: 20,
});

const Barang = () => {
	return (
		<MainBox>
			<Box
				sx={{
					width: "33%",
					borderRadius: 2,
					padding: 3,
					backgroundColor: "#fff",
				}}
			>
				<Typography
					sx={{ color: "#2196f3", marginBottom: 1 }}
					variant="h6"
					fontWeight={400}
				>
					TAMBAH BARANG
				</Typography>

				<FormPage />
			</Box>

			<Box sx={{ borderRadius: 2, padding: 3, backgroundColor: "#fff" }}>
				<Typography
					sx={{ color: "#2196f3", marginBottom: 1 }}
					variant="h6"
					fontWeight={400}
				>
					DAFTAR BARANG
				</Typography>

				<TablePage />
			</Box>
		</MainBox>
	);
};

export default Barang;
