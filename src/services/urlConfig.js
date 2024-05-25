import axios from "axios";
import { userLocal } from "./localService";

export const BASE_URL = "https://elearningnew.cybersoft.edu.vn";

export const MA_NHOM = "GP01";

export const TOKEN_CYBER =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2NCIsIkhldEhhblN0cmluZyI6IjA4LzA5LzIwNTQiLCJIZXRIYW5UaW1lIjoiMTgyNTc1MzYwMDAwMCIsIm5iZiI6MTY5NTkyMDQwMCwiZXhwIjoxNzI1OTAxMjAwfQ.XLHg-hNTodOsN6aJbzkEOhntH6Bq2GMv2BTVxwDfqCA";

export const configHeader = () => {
  const accessToken = userLocal.get()?.accessToken;
  return {
    TokenCybersoft: TOKEN_CYBER,
    Authorization: `Bearer ${accessToken}`,
  };
};

export const http = axios.create({
  baseURL: BASE_URL,
  headers: configHeader(),
});

http.interceptors.request.use(
  function (config) {

    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${userLocal.get()?.accessToken}`,
      },
    };
  },
  function (error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  function (response) {

    return response;
  },
  function (error) {

    return Promise.reject(error);
  }
);


