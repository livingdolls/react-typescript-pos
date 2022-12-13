import { Button } from "@mui/material";
import client from "../../config/Axios";
import UseRefreshToken from "../../hooks/UseRefreshToken";

const Home = () => {
	const refresh = async () => {
		await client
			.get("/auth/token", { withCredentials: true })
			.then((res) => console.log(res));
	};

	return <Button onClick={refresh}>Refresh</Button>;
};

export default Home;
