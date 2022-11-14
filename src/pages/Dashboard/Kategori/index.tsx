import { Box, styled, Typography } from "@mui/material";
import FormPage from "./FormPage";
import TablePage from "./TabelPage";

const MainBox = styled(Box)({
	display: "flex",
	flexDirection: "row",
	alignItems: "baseline",
	gap: 20,
});

const Kategori: React.FC = () => {
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
					variant="h6"
					fontWeight={400}
					sx={{ color: "#2196f3", marginBottom: 1 }}
				>
					TAMBAH KATEGORI
				</Typography>
				<FormPage />
			</Box>

			<Box sx={{ borderRadius: 2, padding: 3, backgroundColor: "#fff" }}>
				<Typography
					variant="h6"
					fontWeight={400}
					sx={{ color: "#2196f3", marginBottom: 1 }}
				>
					DAFTAR KATEGORI
				</Typography>
				<TablePage />
			</Box>
		</MainBox>
	);
};

export default Kategori;
