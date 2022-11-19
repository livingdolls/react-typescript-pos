export type TBarang = {
	_id_barang: string;
	nama: string;
	harga: number;
	qty: number;
	_id_satuan: string;
	_id_kategori: string;
};

export type TGBarang = {
	code: number;
	data: TBarang[];
	message: string;
	success: boolean;
};

export interface IBarang {
	loading: boolean;
	barang: TGBarang;
	error: string;
}
