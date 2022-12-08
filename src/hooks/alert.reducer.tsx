type action =
	| { type: "OPEN"; msg: string; severity?: string }
	| { type: "CLOSE" };

export const initilaAlert = {
	severity: "success",
	open: false,
	msg: "",
};

export type IToasts = {
	open: boolean;
	severity: string;
	msg: string;
};

export const AlertReducer = (state: any, action: action) => {
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
