import client from "../config/Axios";
import { TRegister } from "../schema/User.schema";

const BASE_URL = "/auth/";

export const RegistrasiUser = async (data: TRegister) => {
	const regis = await client
		.post(`${BASE_URL}/register/`, data)
		.then((res) => res.data);
	return regis;
};
