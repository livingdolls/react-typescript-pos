import axios from "axios";

export const getAllKategori = async () => {
	return await axios.get("http://localhost:8800/api/v1/categori");
};
