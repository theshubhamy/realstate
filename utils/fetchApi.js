import axios from "axios";
//baseUrl
export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "a3e6c4f856msh2bd275054204cccp1a2284jsnde94b9bf9b31",
    },
  });
  return data;
};
