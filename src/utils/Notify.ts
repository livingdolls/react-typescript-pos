import { toast } from "react-toastify";

export const NotifyAlert = (type: string, msg: string) => {
	switch (type) {
		case "success":
			toast.success(msg, {
				position: toast.POSITION.TOP_RIGHT,
			});
			break;
		case "info":
			toast.info(msg, {
				position: toast.POSITION.TOP_RIGHT,
			});
			break;
		case "error":
			toast.error(msg, {
				position: toast.POSITION.TOP_RIGHT,
			});
			break;
		default:
			toast(msg, {
				position: toast.POSITION.TOP_RIGHT,
			});
			break;
	}
};
