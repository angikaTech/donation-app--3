import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice';
import customerReducer from '../features/customers/customerSlice';
import profileReducer from '../features/profile/profileSlice';
export const store = configureStore({
    reducer: { auth: authReducer, customer: customerReducer, profile: profileReducer },
});