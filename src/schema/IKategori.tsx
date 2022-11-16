export interface IKategori {
	code: number;
	data: IData[];
	message: string;
	success: boolean;
}

type IData = {
	_id_kategori: string;
	nama: string;
	keterangan: string;
};

export type IForm = {
	nama: string;
	keterangan: string;
};
