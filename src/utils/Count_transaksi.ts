import { TCart } from "../schema/Transaksi.schema";

export const CountTransaksi = (transaksi: TCart[]) => {
	let total = 0;

	for (let i = 0; i < transaksi.length; i++) {
		total += transaksi[i].harga * transaksi[i].qty;
	}

	return total;
};

export const CountDiskon = (total: number, diskon: number) => {
	const ttl = (diskon / 100) * total;
	const result = total - ttl;

	return result;
};
