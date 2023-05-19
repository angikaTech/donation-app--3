import axios from "axios";
import { base_url } from "@/utils/base_url";




// register user 
const register = async (user) => {
    const response = await axios.post(`${base_url}user/register`, user)
    // if (typeof window !== 'undefined' || response.data) {
    //     localStorage.setItem("user", JSON.stringify(response.data));

    // }
    return response.data;
}

// register user end.

const userService = {

    register,
};
export default userService;