import { TableCell, Typography } from "@mui/material";
type head = {
	children: React.ReactNode;
};
const TableHeads = ({ children }: head) => {
	return (
		<TableCell sx={{ color: "#fff" }}>
			<Typography variant="button">{children}</Typography>
		</TableCell>
	);
};

export default TableHeads;
