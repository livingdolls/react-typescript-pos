import axios from "axios";
import { IForm } from "../schema/IKategori";

const BASE_URL = "http://localhost:8800/api/v1/categori/";

export const getAllKategori = async () => {
	return await axios.get(BASE_URL);
};

export const addKategori = async (data: IForm) => {
	return await axios.post(BASE_URL, data);
};

export const delKategori = async (params: string) => {
	return await axios.delete(`${BASE_URL}/${params}`);
};
