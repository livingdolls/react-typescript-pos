import { useContext, useState } from "react";
import client, { clientPrivate } from "../config/Axios";
import AuthContext from "../context/AuthProvider";

const UseRefreshToken = () => {
	const auth = useContext(AuthContext);

	const refresh = async () => {
		const response = await clientPrivate.get("/auth/token/");
		auth?.setAuth((prev: any) => {
			return { ...prev, accessToken: response.data.accessToken };
		});
		return response.data.accessToken;
	};
	return refresh;
};

export default UseRefreshToken;
