import axios from "axios";
import CONSTANTS from "../constants/constants";

export const axiosInstance = axios.create({
    baseURL:CONSTANTS.BASE_URL
})