import axios from "axios";

export const apiClients = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ICON_BACKEND_URL,
  timeout: 60000,
  headers: { "X-Request-ID": crypto.randomUUID() },
  validateStatus: (status) => status < 500,
  withCredentials: true,
});
