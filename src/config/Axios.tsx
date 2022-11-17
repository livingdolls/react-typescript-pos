import axios from "axios";

const client = axios.create({
	baseURL: "http://localhost:8800/api/v1/",
});

export default client;
