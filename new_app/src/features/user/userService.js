import axios from "axios";
import { base_url } from "@/utils/base_url";
import { config } from "@/utils/axiosconfig";




// register user 
const register = async (user) => {
    const response = await axios.post(`${base_url}user/register`, user, config)
    return response.data;
}

// register user end.

const userService = {

    register,
};
export default userService;