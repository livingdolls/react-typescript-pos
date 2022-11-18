import { ISatuan } from "../schema/ISatuan";

type action = { type: "OPEN"; msg: string; s: string } | { type: "CLOSE" };

// export interface satuan {
// 	loading: boolean;
// 	satuan: ISatuan;
// 	error: string;
// }

export const initilaAlert = {
	severity: "success",
	open: false,
	msg: "",
};

export const AlertReducer = (state: any, action: any) => {
	switch (action.type) {
		case "OPEN":
			return {
				...state,
				open: true,
				msg: action.msg,
			};
		case "CLOSE":
			return {
				...state,
				open: false,
			};
		default:
			return state;
	}
};
