import { Box, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { IKategori } from "../../../schema/IKategori";
import { getAllKategori } from "../../../services/Kategori.service";
import FormPage from "./FormPage";
import TablePage from "./TabelPage";

const MainBox = styled(Box)({
	display: "flex",
	flexDirection: "row",
	alignItems: "baseline",
	gap: 20,
});

type TKategori = {
	loading: boolean;
	kategori: IKategori[];
	error: null;
};

const Kategori: React.FC = () => {
	const [kategoris, setKategoris] = useState<TKategori>({
		loading: true,
		kategori: [] as IKategori[],
		error: null,
	});

	useEffect(() => {
		setKategoris({ ...kategoris, loading: true });
		getAllKategori()
			.then((res) => res.data)
			.then((data) => {
				setKategoris({ ...kategoris, kategori: data, loading: false });
			})
			.catch((err) =>
				setKategoris({ ...kategoris, error: err, loading: false })
			);
	}, []);

	// console.log(kategoris);

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

				<TablePage kategoris={kategoris} />
			</Box>
		</MainBox>
	);
};

export default Kategori;
