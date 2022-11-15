import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import MainTable from "../../../components/Table/Table";
import TableHeads from "../../../components/Table/TableHead";
import { IKategori } from "../../../schema/IKategori";

interface TKategori {
	loading: boolean;
	kategori: IKategori[];
	error: null;
}

type IState = {
	kategoris: TKategori;
};

const TablePage: React.FC<IState> = (props) => {
	console.log(props);
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
