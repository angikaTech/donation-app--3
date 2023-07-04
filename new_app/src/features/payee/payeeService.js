import axios from 'axios';
import { base_url } from '@/utils/base_url';
import { config } from '@/utils/axiosconfig';

// API endpoint for creating a payee
// const CREATE_PAYEE_API = 'http://localhost:5000/api/user/add-payee/6435047b5724bcd11329418e';
let id;
if (typeof window !== 'undefined') {
    id = JSON.parse(localStorage.getItem("id"));

}
// Service function to create a payee

const createPayee = async (payeeData) => {
    try {
        const response = await axios.post(`${base_url}user/add-payee/${id}`, payeeData, config);
        return response.data;
    } catch (error) {
        throw new Error('Failed to create payee.');
    }
};


const payeeService = {
    createPayee,
};
export default payeeService;