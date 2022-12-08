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
import { TCart, TTransaksi } from "../../schema/Transaksi.schema";

const BoxTransaksi = styled(Box)({
	borderRadius: 1,
	boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
});

type propsTabel = {
	transaksi: TCart[];
	del: (id: string) => void;
};

const TabelTransaksi: React.FC<propsTabel> = ({ transaksi, del }) => {
	const handleDelete = (id: string) => {
		del(id);
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
					{transaksi.map((e: TCart, i: number) => {
						return (
							<TableRow key={e._id_barang}>
								<TableCell>{i + 1}</TableCell>
								<TableCell>{e.nama}</TableCell>
								<TableCell>{e.harga}</TableCell>
								<TableCell>{e.qty}</TableCell>
								<TableCell>{e.harga * e.qty}</TableCell>
								<TableCell>
									<Button
										size="small"
										variant="contained"
										color="error"
										onClick={() =>
											handleDelete(e._id_barang)
										}
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
