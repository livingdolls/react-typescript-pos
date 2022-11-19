import { ASatuan } from "../schema/ISatuan";

type action =
	| { type: "POST_START" }
	| { type: "POST_SUCCESS"; payload: string }
	| { type: "POST_ERROR"; payload: string };

interface IBarang {
	loading: boolean;
	message: string;
	error: string;
}

export const initialPB = {
	loading: false,
	message: "",
	error: "",
};

export const postRBarang = (state: IBarang, action: action) => {
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
				message: action.payload,
			};
		case "POST_ERROR":
			return {
				...state,
				loading: false,
				message: action.payload,
			};
		default:
			return state;
	}
};
