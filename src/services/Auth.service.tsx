import client from "../config/Axios";
import { TRegister } from "../schema/User.schema";

const BASE_URL = "/auth/";

export const RegistrasiUser = async (data: TRegister) => {
	const regis = await client
		.post(`${BASE_URL}/register/`, data)
		.then((res) => res.data);
	return regis;
};

export const LoginUser = async (data: Omit<TRegister, "nama">) => {
	const login = await client
		.post(`${BASE_URL}/login/`, data, {
			withCredentials: true,
		})
		.then((res) => res.data);
	return login;
};

export const LogoutUser = async () => {
	const logout = await client
		.delete(`${BASE_URL}/logout/`)
		.then((res) => res.data);
	return logout;
};
