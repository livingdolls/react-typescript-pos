import { IData, IForm } from "../schema/IKategori";
import client from "../config/Axios";

const BASE_URL = "/categori/";

export const getAllKategori = async () => {
	try {
		const get = await client.get(BASE_URL).then((res) => res.data);
		return get;
	} catch (error) {
		return console.log(error);
	}
};

export const addKategori = async (data: IForm) => {
	try {
		const add = await client.post(BASE_URL, data).then((res) => res.data);
		return add;
	} catch (error) {
		return console.log(error);
	}
};

export const delKategori = async (params: string) => {
	try {
		const del = await client
			.delete(`${BASE_URL}/${params}`)
			.then((res) => res.data);
		return del;
	} catch (error) {}
};

export const editKategori = async (data: IData) => {
	try {
		const { _id_kategori, nama, keterangan } = data;
		const form = { nama, keterangan };
		const edit = await client
			.put(`${BASE_URL}/${_id_kategori}`, form)
			.then((res) => res.data);
		return edit;
	} catch (error) {
		console.log(error);
	}
};
