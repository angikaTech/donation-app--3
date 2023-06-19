import { base_url } from "@/utils/base_url";
import axios from "axios";

let id;
if (typeof window !== 'undefined') {
    id = JSON.parse(localStorage.getItem("id"));

}

const successfullPayee = async () => {
    const response = await axios.get(`${base_url}user/successfullPayment/${id}`)
    return response.data;
};


const successfullService = {
    successfullPayee,
};

export default successfullService;