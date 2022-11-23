import { TBarang } from "../schema/IBarng";

export const initialPatchBarang = {
	loading: false,
	message: "",
	error: "",
	barang: {} as TBarang,
};

type action =
	| { type: "PATCH_START" }
	| { type: "PATCH_INITIAL"; payload: any }
	| { type: "PATCH_CHANGE"; field: string; value: string }
	| { type: "PATCH_SUCCESS"; payload: string }
	| { type: "PATCH_ERROR"; payload: string };

export type RTPbarang = {
	loading: boolean;
	message: string;
	error: string;
	barang: TBarang;
};

export const patchBarangReducer = (state: RTPbarang, action: action) => {
	switch (action.type) {
		case "PATCH_INITIAL":
			return {
				...state,
				barang: action.payload,
			};
		case "PATCH_CHANGE":
			return {
				...state,
				barang: { ...state.barang, [action.field]: action.value },
			};
		case "PATCH_START":
			return {
				...state,
				loading: true,
			};
		case "PATCH_SUCCESS":
			return {
				...state,
				loading: false,
				message: action.payload,
			};
		case "PATCH_ERROR":
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
