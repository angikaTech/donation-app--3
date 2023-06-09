import axios from "axios";
import { base_url } from "@/utils/base_url";
import { config } from "@/utils/axiosconfig";
// import { data } from "../../../public/vendors/colcade/colcade";

const login = async (userData) => {
    const response = await axios.post(`${base_url}user/login`, userData, config);
    if (typeof window !== 'undefined' || response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("id", JSON.stringify(response.data._id));
        // sessionStorage.setItem("token", JSON.stringify(response.data.token));
        console.log(response.data)

    }
    return response.data;
};



const authService = {
    login,
};
export default authService;