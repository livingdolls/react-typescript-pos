import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import MainTable from "../../../components/Table/Table";
import TableHeads from "../../../components/Table/TableHead";

const TablePage = () => {
	return (
		<MainTable>
			<TableHead sx={{ backgroundColor: "#2196f3" }}>
				<TableRow>
					<TableHeads>No</TableHeads>
					<TableHeads>Nama</TableHeads>
					<TableHeads>Harga</TableHeads>
					<TableHeads>Stok</TableHeads>
					<TableHeads>Satuan</TableHeads>
					<TableHeads>Kategori</TableHeads>
					<TableHeads>Aksi</TableHeads>
				</TableRow>
			</TableHead>

			<TableBody>
				<TableRow>
					<TableCell>1</TableCell>
					<TableCell>Kopi Tubruk</TableCell>
					<TableCell>Rp 2000</TableCell>
					<TableCell>120</TableCell>
					<TableCell>PCS</TableCell>
					<TableCell>Minumanr</TableCell>
					<TableCell>Hapus</TableCell>
				</TableRow>

				<TableRow>
					<TableCell>2</TableCell>
					<TableCell>Kopi Tubruk</TableCell>
					<TableCell>Rp 2000</TableCell>
					<TableCell>120</TableCell>
					<TableCell>PCS</TableCell>
					<TableCell>Minumanr</TableCell>
					<TableCell>Hapus</TableCell>
				</TableRow>

				<TableRow>
					<TableCell>3</TableCell>
					<TableCell>Kopi Tubruk</TableCell>
					<TableCell>Rp 2000</TableCell>
					<TableCell>120</TableCell>
					<TableCell>PCS</TableCell>
					<TableCell>Minumanr</TableCell>
					<TableCell>Hapus</TableCell>
				</TableRow>
			</TableBody>
		</MainTable>
	);
};

export default TablePage;
