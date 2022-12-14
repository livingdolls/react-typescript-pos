import {
	Button,
	LinearProgress,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import MainTable from "../../../components/Table/Table";
import TableHeads from "../../../components/Table/TableHead";
import { IBarang, TBarang } from "../../../schema/IBarng";

type propsBarang = {
	data: IBarang;
	del: (id: string) => void;
	edit: (data: string) => void;
};

const TablePage: React.FC<propsBarang> = ({ data, del, edit }) => {
	const barang = data.barang;
	if (data.loading) {
		return (
			<>
				<Typography color="secondary" variant="h6">
					Loading...
				</Typography>
				<LinearProgress />
			</>
		);
	}
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
				{barang.data.map((d, i) => {
					return (
						<TableRow key={d._id_barang}>
							<TableCell>{i + 1}</TableCell>
							<TableCell>{d.nama}</TableCell>
							<TableCell>{d.harga}</TableCell>
							<TableCell>{d.qty}</TableCell>
							<TableCell>{d._id_satuan}</TableCell>
							<TableCell>{d._id_kategori}</TableCell>
							<TableCell>
								<Button
									color="error"
									size="small"
									variant="contained"
									onClick={() => del(d._id_barang)}
								>
									Del
								</Button>{" "}
								<Button
									color="warning"
									size="small"
									variant="contained"
									onClick={() => edit(d._id_barang)}
								>
									Edit
								</Button>
							</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</MainTable>
	);
};

export default TablePage;
