import axios from "axios";

const url = process.env.NEXT_PUBLIC_MOVIE_URL;
const key = process.env.NEXT_PUBLIC_MOVIE_KEY;

export const api = axios.create({
  baseURL: `${url}`,
  // timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});

api.interceptors.request.use((config) => {
  const { params } = config;

  config.params = {
    ...params,
    api_key: key,
    language: "ko-KR",
    region: "kr",
  };

  return config;
});
