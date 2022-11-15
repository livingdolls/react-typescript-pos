export interface IKategori {
	code: number;
	data: [
		{
			_id_kategori: string;
			nama: string;
			keterangan: string;
		}
	];
	message: string;
	success: boolean;
}
