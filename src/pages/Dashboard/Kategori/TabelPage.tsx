import {
	Button,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import MainTable from "../../../components/Table/Table";
import TableHeads from "../../../components/Table/TableHead";
import { IKategori } from "../../../schema/IKategori";

interface TKategori {
	loading: boolean;
	kategori: IKategori;
	error: null;
}

type IState = {
	kategoris: TKategori;
	delete: (id: string) => void;
};

const TablePage: React.FC<IState> = (props) => {
	const kategori = props.kategoris;
	const data = kategori.kategori;

	if (kategori.loading === true) {
		return <Typography variant={"button"}>Loading...</Typography>;
	}
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
				{data.data.map((d, index) => {
					return (
						<TableRow key={d._id_kategori}>
							<TableCell>{index + 1}</TableCell>
							<TableCell>{d.nama}</TableCell>
							<TableCell>{d.keterangan}</TableCell>
							<TableCell>
								<Button
									size="small"
									variant="contained"
									color="error"
									onClick={() => props.delete(d._id_kategori)}
								>
									DEL
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
