import { AxiosRequestConfig } from "axios";

export const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8888";
export const API_TOKEN = process.env.REACT_APP_API_TOKEN || "";

export const AXIOS_CONFIG: AxiosRequestConfig = {
  baseURL: API_URL,
  headers: {
    common: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  },
};
