import {
	Box,
	Button,
	styled,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@mui/material";
import MainTable from "../../components/Table/Table";
import TableHeads from "../../components/Table/TableHead";
import { TTransaksi } from "../../schema/Transaksi.schema";

const BoxTransaksi = styled(Box)({
	borderRadius: 1,
	boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
});

type propsTabel = {
	transaksi: TTransaksi[];
	setTransaksi: React.Dispatch<React.SetStateAction<TTransaksi[]>>;
};

const TabelTransaksi: React.FC<propsTabel> = ({ transaksi, setTransaksi }) => {
	const handleDelete = (id: any) => {
		const data = transaksi.filter((e: any) => e.id !== id);

		setTransaksi(data);
	};
	return (
		<BoxTransaksi>
			<MainTable>
				<TableHead sx={{ backgroundColor: "#2196f3" }}>
					<TableRow>
						<TableHeads>No</TableHeads>
						<TableHeads>Nama</TableHeads>
						<TableHeads>Harga</TableHeads>
						<TableHeads>Qty</TableHeads>
						<TableHeads>Total</TableHeads>
						<TableHeads>Aksi</TableHeads>
					</TableRow>
				</TableHead>

				<TableBody>
					{transaksi.map((e: any, i: number) => {
						return (
							<TableRow key={i}>
								<TableCell>{i + 1}</TableCell>
								<TableCell>Kopi Luwak</TableCell>
								<TableCell>2000</TableCell>
								<TableCell>{e.qty}</TableCell>
								<TableCell>4000</TableCell>
								<TableCell>
									<Button
										size="small"
										variant="contained"
										color="error"
										onClick={() => handleDelete(e.id)}
									>
										Del
									</Button>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</MainTable>
		</BoxTransaksi>
	);
};

export default TabelTransaksi;
