export type TTransaksi = {
	id: string;
	nama: string;
	harga: number;
	qty: number;
	total: number;
};

export type TCart = {
	_id_barang: string;
	nama: string;
	harga: number;
	qty: number;
	sub_total: number;
};

export type TMtransaksi = {
	_id_admin: string;
	invoice: string | number;
	sub_total: number;
	diskon: number;
	total: number;
	detail_transaksi: Array<Omit<TCart, "nama">>;
};
