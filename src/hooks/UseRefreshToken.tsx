import { useState } from "react";
import client from "../config/Axios";
import { UseAuth } from "./UseAuth";

const UseRefreshToken = () => {
	// const { setAuth } = UseAuth();
	const [auth, setAuth] = useState({});

	const refresh = async () => {
		const response = await client.get("/auth/token", {
			withCredentials: true,
		});
	};
	return refresh;
};

export default UseRefreshToken;
