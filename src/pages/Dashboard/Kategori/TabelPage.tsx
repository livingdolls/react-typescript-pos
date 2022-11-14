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
					<TableHeads>Keterangan</TableHeads>
					<TableHeads>Aksi</TableHeads>
				</TableRow>
			</TableHead>

			<TableBody>
				<TableRow>
					<TableCell>1</TableCell>
					<TableCell>Barang Elektronik</TableCell>
					<TableCell>Peralatan Komputer</TableCell>
					<TableCell>Peralatan Komputer</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>1</TableCell>
					<TableCell>Barang Elektronik</TableCell>
					<TableCell>Peralatan Komputer</TableCell>
					<TableCell>Peralatan Komputer</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>1</TableCell>
					<TableCell>Barang Elektronik</TableCell>
					<TableCell>Peralatan Komputer</TableCell>
					<TableCell>Peralatan Komputer</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>1</TableCell>
					<TableCell>Barang Elektronik</TableCell>
					<TableCell>Peralatan Komputer</TableCell>
					<TableCell>Peralatan Komputer</TableCell>
				</TableRow>
			</TableBody>
		</MainTable>
	);
};

export default TablePage;
