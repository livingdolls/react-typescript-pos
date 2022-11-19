import {
	Box,
	Button,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import MainTable from "../../../components/Table/Table";
import TableHeads from "../../../components/Table/TableHead";
import { IData, TKategori } from "../../../schema/IKategori";

type IState = {
	kategoris: TKategori;
	delete: (id: string) => void;
	edit: (id: IData) => void;
};

const TablePage: React.FC<IState> = (props) => {
	const kategori = props.kategoris;
	const data = kategori.kategori;

	if (kategori.loading === true) {
		return <Typography variant={"button"}>Loading...</Typography>;
	}
	return (
		<Box sx={{ maxHeight: "70vh", overflow: "auto" }}>
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
										onClick={() =>
											props.delete(d._id_kategori)
										}
										sx={{ mr: 1 }}
									>
										DEL
									</Button>

									<Button
										size="small"
										variant="contained"
										color="warning"
										onClick={() => props.edit(d)}
									>
										EDIT
									</Button>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</MainTable>
		</Box>
	);
};

export default TablePage;
