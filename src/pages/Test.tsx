import { ToastContainer, toast } from "react-toastify";

const Test = () => {
	const notify = () => toast("Wow so easy !");

	return (
		<div>
			<button onClick={notify}>Notify !</button>
		</div>
	);
};

export default Test;
