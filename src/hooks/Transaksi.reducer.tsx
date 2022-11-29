export const initialTransaksi = {
	barang: [],
	cart: [],
};

// type action =
// 	| { type: "FETCH_START" }
// 	| { type: "FETCH_SUCCESS"; payload:  }
// 	| { type: "FETCH_ERROR"; payload: string };

export const transaksiCart = (state: any, action: any) => {
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
		default:
			return state;
	}
};
