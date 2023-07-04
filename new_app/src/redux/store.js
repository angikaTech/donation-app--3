

import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice';
import customerReducer from '../features/customers/customerSlice';
import profileReducer from '../features/profile/profileSlice';
import registerReducer from '../features/user/userSlice';
import payeeReducer from "@/features/payee/payeeSlice";
import paymenttableReducer from "@/features/paymenttable/paymenttableSlice";
import successfullReducer from "@/features/paymentsuccess/paymentsuccessSlice";






export const store = configureStore({
    reducer: { auth: authReducer, customer: customerReducer, profile: profileReducer, register: registerReducer, payee: payeeReducer, paymenttable: paymenttableReducer, successpayment: successfullReducer },
});