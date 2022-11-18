import {
	Button,
	LinearProgress,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@mui/material";
import MainTable from "../../../components/Table/Table";
import TableHeads from "../../../components/Table/TableHead";
import { TRSatuan, TSatuan } from "../../../schema/ISatuan";

type propsSatuan = {
	satuan: TRSatuan;
	del: (id: string) => void;
	edit: (form: TSatuan) => void;
};

const TablePage: React.FC<propsSatuan> = ({ satuan, del, edit }) => {
	const data = satuan.satuan;

	if (satuan.loading === true) {
		return <LinearProgress />;
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
				{data.data.map((s, i) => {
					return (
						<TableRow key={s._id_satuan}>
							<TableCell>{i + 1}</TableCell>
							<TableCell>{s.nama}</TableCell>
							<TableCell>{s.keterangan}</TableCell>
							<TableCell>
								<Button
									color="error"
									size="small"
									variant="contained"
									onClick={() => del(s._id_satuan)}
								>
									Del
								</Button>{" "}
								<Button
									color="warning"
									size="small"
									variant="contained"
									onClick={() => edit(s)}
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
