import { Table, TableContainer } from "@mui/material";

type table = {
	children: React.ReactNode;
};

const MainTable = ({ children }: table) => {
	return (
		<TableContainer>
			<Table sx={{ minWidth: "800px" }}>{children}</Table>
		</TableContainer>
	);
};

export default MainTable;
