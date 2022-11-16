import { Alert, Box, Slide } from "@mui/material";
import { IToast } from "../schema/Toast";

type Toast = {
	TToast: IToast;
};

export const Toast: React.FC<Toast> = ({ TToast }: Toast) => {
	return (
		<Slide direction="left" in={TToast.open}>
			<Box zIndex={1500} sx={{ position: "fixed", top: 50, right: 20 }}>
				<Alert severity={TToast.severity}>{TToast.msg}</Alert>
			</Box>
		</Slide>
	);
};
