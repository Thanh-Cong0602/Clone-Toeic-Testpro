import axios from "axios";
const url = "http://localhost:8000/listItems";

export function getSubjects() {
   return axios.get(url);
}