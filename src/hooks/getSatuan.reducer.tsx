import { ISatuan } from "../schema/ISatuan";

type action =
	| { type: "FETCH_START" }
	| { type: "FETCH_SUCCESS"; payload: ISatuan }
	| { type: "FETCH_ERROR"; payload: string };

export interface satuan {
	loading: boolean;
	satuan: ISatuan;
	error: string;
}

export const initialGS = {
	loading: true,
	satuan: {} as ISatuan,
	error: "",
};

export const SatuanReducer = (state: satuan, action: action) => {
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
				satuan: action.payload,
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
