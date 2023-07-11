import axios from "axios";
const url = "http://localhost:8000";



export function getVocabularyCategories(endpoint) {
   return axios.get(`${url}/${endpoint}`);
}

export function getVocabularyByTopic(endpoint) {
   return axios.get(`${url}/${endpoint}`);
}

export function getVocabularyPractices(endpoint) {
   return axios.get(`${url}/${endpoint}`);
}

export function getQuestionsByTopic(endpoint) {
   return axios.get(`${url}/${endpoint}`);
}