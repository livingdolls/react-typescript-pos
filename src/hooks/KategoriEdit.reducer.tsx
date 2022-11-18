export const editKategoriInitial = {
	loading: false,
	message: "",
	error: "",
};

type action =
	| { type: "FETCH_START" }
	| { type: "FETCH_SUCCESS"; payload: string }
	| { type: "FETCH_ERROR"; payload: string };

export type TPkategori = {
	loading: boolean;
	message: string;
	error: string;
};

export const KategoriEditReducer = (state: TPkategori, action: action) => {
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
				message: action.payload,
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
