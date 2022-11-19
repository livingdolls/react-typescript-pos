import { IBarang, TBarang, TGBarang } from "../schema/IBarng";

export const initialbarang = {
	loading: true,
	barang: {} as TGBarang,
	error: "",
};

type action =
	| { type: "FETCH_START" }
	| { type: "FETCH_SUCCESS"; payload: TGBarang }
	| { type: "FETCH_ERROR"; payload: string };

export const barangReducer = (state: IBarang, action: action) => {
	switch (action.type) {
		case "FETCH_START":
			return {
				...state,
				loading: true,
			};
		case "FETCH_SUCCESS":
			return {
				...state,
				barang: action.payload,
				loading: false,
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
