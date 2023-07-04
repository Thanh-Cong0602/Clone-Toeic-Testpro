import axios from "axios";
import API_BASE from "../config";

export function registerAPI(endpoint, body) {
   return axios.post(`${API_BASE.apiUrl}/${endpoint}`, body)
}

