import axios from "axios";
import API_BASE from "../config";

export function loginAPI(endpoint, inputs) {
   return axios.post(`${API_BASE.apiUrl}/${endpoint}`, inputs)
}

export function registerAPI(endpoint, user) {
   return axios.post(`${API_BASE.apiUrl}/${endpoint}`, user)
}