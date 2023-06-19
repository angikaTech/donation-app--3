import { base_url } from "@/utils/base_url";
import axios from "axios";

let id;
if (typeof window !== 'undefined') {
    id = JSON.parse(localStorage.getItem("id"));

}

const getPayee = async () => {
    const response = await axios.get(`${base_url}user/payee/${id}`)
    return response.data;
};


const paymenttableService = {
    getPayee,
};

export default paymenttableService;