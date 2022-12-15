import client from "../config/Axios";
import priv from "../config/Interceptor";
import { TBarang } from "../schema/IBarng";

const BASE_URL = "/barang/";

export const getAllBarang = async () => {
	try {
		const get = await priv.get(BASE_URL).then((res) => res.data);
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

export const getBarangReal = async (id: string) => {
	try {
		const res = await client
			.get(`${BASE_URL}/barang/${id}`)
			.then((res) => res.data);
		return res;
	} catch (error: any) {
		throw new Error(error);
	}
};

export const deleteBarangService = async (id: string) => {
	try {
		const del = await client
			.delete(`${BASE_URL}/${id}`)
			.then((res) => res.data);
		return del;
	} catch (error: any) {
		throw new Error(error);
	}
};

export const patchBarangService = async (data: TBarang) => {
	try {
		const res = await client
			.put(`${BASE_URL}/${data._id_barang}`, data)
			.then((res) => res.data);
		return res;
	} catch (error: any) {
		throw new Error(error);
	}
};
