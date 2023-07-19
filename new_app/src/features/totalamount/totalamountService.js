
import axios from "axios";
import { base_url } from "@/utils/base_url";
import { config } from "@/utils/axiosconfig";


let id;
if (typeof window !== 'undefined') {
    id = JSON.parse(localStorage.getItem("id"));

}

const totalamount = async () => {

    const response = await axios.get(`${base_url}user/total-amount/${id}`)
    return response.data;
}




const totalamountService = {

    totalamount,
};
export default totalamountService;