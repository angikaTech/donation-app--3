import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const userDefaultstate = {
    _id: null,
    name: null,
    email: null,
    mobile: null,
    token: null,
};

const initialState = {
    user: userDefaultstate,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => { },
});


