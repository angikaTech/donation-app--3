import axios from "axios";
import { base_url } from "@/utils/base_url";




// register user 
const register = async (user) => {
    const response = await axios.post(`${base_url}user/register`, user)
    return response.data;
}

// register user end.

const userService = {

    register,
};
export default userService;