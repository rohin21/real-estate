import axios from "axios";
export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "dbc7432fa5msh95abcb03e33dd3bp182663jsn2d87d9fd6a84",
    },
  });
  return data;
};
