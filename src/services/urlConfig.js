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

//'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidmFudGVvMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkdWIiwibmJmIjoxNjM4NzE2NTgwLCJleHAiOjE2Mzg3MjAxODB9.xp1vMV3syzmGDNh-C-sxDF2T60gh-QU_PuqRpQnfJsw'
