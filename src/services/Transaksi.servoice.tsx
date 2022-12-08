import client from "../config/Axios";
import { TMtransaksi } from "../schema/Transaksi.schema";

const BASE_URL = "/transaksi/";

export const postTransaksi = async (transaksi: TMtransaksi) => {
	try {
		const postTransaksi = await client
			.post(BASE_URL, transaksi)
			.then((res) => res.data);
		return postTransaksi;
	} catch (error: any) {
		throw new Error(error);
	}
};
