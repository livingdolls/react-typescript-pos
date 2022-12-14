import { Box, Button, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import jwt_decode from "jwt-decode";
import UseRefreshToken from "../../hooks/UseRefreshToken";
import AuthContext from "../../context/AuthProvider";
import usePrivate from "../../hooks/UsePrivate";

const Home = () => {
	const auth = useContext(AuthContext);
	const refresh = UseRefreshToken();
	const priv = usePrivate();

	useEffect(() => {
		refresh();
	}, []);

	const getBarangPr = async () => {
		await priv
			.get("/barang/", {
				withCredentials: true,
			})
			.then((res) => {
				console.log(res);
			});
	};

	return (
		<Box>
			<Typography>Hello </Typography>
			<Button onClick={getBarangPr}>Private</Button>
		</Box>
	);
};

export default Home;
