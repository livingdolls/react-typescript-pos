import client from "../config/Axios";
import { ASatuan, TSatuan } from "../schema/ISatuan";

const BASE_URL = "/satuan/";

export const getAllSatuan = async () => {
	try {
		const get = await client.get(BASE_URL).then((res) => res.data);
		return get;
	} catch (error) {
		return console.log(error);
	}
};

export const addSatuan = async (data: ASatuan) => {
	try {
		const add = await client.post(BASE_URL, data).then((res) => res.data);
		return add;
	} catch (error) {
		return console.log(error);
	}
};

export const delSatuan = async (params: string) => {
	try {
		const del = await client
			.delete(`${BASE_URL}/${params}`)
			.then((res) => res.data);
		return del;
	} catch (error) {}
};

export const editSatuan = async (data: TSatuan) => {
	try {
		const { _id_satuan, nama, keterangan } = data;
		const form = { nama, keterangan };
		const edit = await client
			.put(`${BASE_URL}/${_id_satuan}`, form)
			.then((res) => res.data);
		return edit;
	} catch (error) {
		console.log(error);
	}
};
