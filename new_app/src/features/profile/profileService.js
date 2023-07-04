
import axios from "axios";
import { base_url } from "@/utils/base_url";
import { config } from "@/utils/axiosconfig";


let id;
if (typeof window !== 'undefined') {
    id = JSON.parse(localStorage.getItem("id"));

}

const getProfile = async () => {

    const response = await axios.get(`${base_url}user/${id}`, config)
    return response.data;
}




const profileService = {

    getProfile,
};
export default profileService;