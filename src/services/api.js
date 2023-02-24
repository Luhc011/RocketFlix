import axios from "axios";

export const api = axios.create({
	baseURL: "https://rocketnotes-btp6.onrender.com"
});