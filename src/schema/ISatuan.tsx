export type TSatuan = {
	_id_satuan: string;
	nama: string;
	keterangan: string;
};

export interface ISatuan {
	code: number;
	data: TSatuan[];
	message: string;
	success: boolean;
}

export type TRSatuan = {
	loading: boolean;
	satuan: ISatuan;
	error: string;
};

export type ASatuan = {
	nama: string;
	keterangan: string;
};
