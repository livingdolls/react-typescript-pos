import { TBarang } from "../schema/IBarng";
import { TCart } from "../schema/Transaksi.schema";

export const initialTransaksi = {
	barang: [] as TBarang[],
	cart: [] as TCart[],
};

type action =
	| { type: "FETCH_BARANG"; payload: TBarang[] }
	| { type: "ADD_CART"; payload: TCart[] }
	| { type: "REMOVE_CART"; payload: TCart[] }
	| { type: "COMPLETED_CART" };

type initialStateType = {
	barang: TBarang[];
	cart: TCart[];
};

export const transaksiCart = (state: initialStateType, action: action) => {
	switch (action.type) {
		case "FETCH_BARANG":
			return {
				...state,
				barang: action.payload,
			};
		case "ADD_CART":
			return {
				...state,
				cart: action.payload,
			};
		case "REMOVE_CART":
			return {
				...state,
				cart: action.payload,
			};
		case "COMPLETED_CART":
			return {
				...state,
				cart: [],
			};
		default:
			return state;
	}
};
