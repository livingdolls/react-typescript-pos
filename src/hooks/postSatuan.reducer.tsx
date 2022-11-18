import { ASatuan } from "../schema/ISatuan";

type action =
	| { type: "POST_START" }
	| { type: "POST_SUCCESS"; payload: string }
	| { type: "POST_ERROR"; payload: string };

export interface satuan {
	loading: boolean;
	message: string;
	error: string;
}

export const initialSP = {
	loading: false,
	message: "",
	error: "",
};

export const postRSatuan = (state: satuan, action: action) => {
	switch (action.type) {
		case "POST_START":
			return {
				...state,
				loading: true,
			};
		case "POST_SUCCESS":
			return {
				...state,
				loading: false,
				satuan: action.payload,
			};
		case "POST_ERROR":
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
