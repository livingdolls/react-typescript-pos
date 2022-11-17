import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider, IconButton, styled, Tooltip } from "@mui/material";
import React from "react";

const style = {
	position: "absolute" as "absolute",
	top: "30%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 600,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 2,
};

const Header = styled(Box)({
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
});

type Modal = {
	children: React.ReactNode;
	open: boolean;
	handleModal: () => void;
};

const MainModal: React.FC<Modal> = ({ children, open, handleModal }) => {
	return (
		<Modal
			open={open}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Header>
					<Typography
						variant="h5"
						fontWeight={400}
						sx={{ color: "#2196f3", marginTop: 1 }}
					>
						Edit Data
					</Typography>

					<Tooltip title="Delete">
						<IconButton onClick={handleModal}>X</IconButton>
					</Tooltip>
				</Header>

				<Divider />

				<Box>{children}</Box>
			</Box>
		</Modal>
	);
};

export default MainModal;
