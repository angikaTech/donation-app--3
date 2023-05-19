
import axios from "axios";
import { base_url } from "@/utils/base_url";


let id;
if (typeof window !== 'undefined') {
    id = JSON.parse(localStorage.getItem("id"));

}

const getProfile = async () => {

    const response = await axios.get(`${base_url}user/${id}`)


    return response.data;
}




const profileService = {

    getProfile,
};
export default profileService;