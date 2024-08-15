import axios from "axios";
import { url } from "./url";

const axiosInstance = axios.create({
  baseURL: url,
  withCredentials: true,
});

export default axiosInstance;
