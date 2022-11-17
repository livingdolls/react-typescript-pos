import { IKategori } from "../schema/IKategori";

export const initialKategori = {
	loading: true,
	kategori: {} as IKategori,
	error: "",
};

type action =
	| { type: "FETCH_START" }
	| { type: "FETCH_SUCCESS"; payload: IKategori }
	| { type: "FETCH_ERROR"; payload: string };

interface kategoris {
	loading: boolean;
	kategori: IKategori;
	error: string;
}

export const KategoriReducer = (state: kategoris, action: action) => {
	switch (action.type) {
		case "FETCH_START":
			return {
				...state,
				loading: true,
			};
		case "FETCH_SUCCESS":
			return {
				...state,
				loading: false,
				kategori: action.payload,
			};
		case "FETCH_ERROR":
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

// export const KategoriEditReducer = (state: any, action: any) => {
// 	switch (action.type) {
// 		case "FETCH_START":
// 			return {
// 				...state,
// 			};
// 		case "FETCH_SUCCESS":
// 			return {
// 				...state,
// 			};
// 		case "FETCH_ERROR":
// 			return {
// 				...state,
// 			};
// 		default:
// 			return state;
// 	}
// };
