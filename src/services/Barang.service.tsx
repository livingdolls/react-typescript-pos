import client from "../config/Axios";
import { TBarang } from "../schema/IBarng";

const BASE_URL = "/barang/";

export const getAllBarang = async () => {
	try {
		const get = await client.get(BASE_URL).then((res) => res.data);
		return get;
	} catch (error: any) {
		throw new Error(error);
	}
};

export const postBarangService = async (data: Omit<TBarang, "_id_barang">) => {
	try {
		const add = await client.post(BASE_URL, data).then((res) => res.data);
		return add;
	} catch (error: any) {
		throw new Error(error);
	}
};
