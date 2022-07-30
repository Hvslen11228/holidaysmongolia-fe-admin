import axios from "axios";
import { getCookie } from "./functions/cookie";

// axios.defaults.baseURL = "http://localhost:5590";
axios.defaults.baseURL = "https://api.holidaysmongolia.com";
axios.defaults.headers.common["Authorization"] = "Bearer " + getCookie("token");
