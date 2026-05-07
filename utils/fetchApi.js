import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url, params) => {
  const { data } = await axios.get(`${baseUrl}${url}`, {
    params: {
      ...params, // This will spread the query parameters you pass when you call fetchApi
      hitsPerPage: '25',
      page: '0',
      lang: 'en'
    },
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'ae4fe94479msh064591a75003e1ap17ad02jsn3af563dfabd2',
    },
  });

  return data;
}