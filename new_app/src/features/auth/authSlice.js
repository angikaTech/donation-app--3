
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import { useEffect } from "react";



// const userDefaultstate = {
//     _id: null,
//     name: null,
//     email: null,
//     mobile: null,
//     token: null,
// };

//

// useEffect(() => {
//     const getUserfromLocalStorage = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
//     alert(getUserfromLocalStorage)
// }, []);

// const getUserfromLocalStorage =
//     typeof window !== 'undefined' ? (localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null) : null;
let getUserfromLocalStorage;
if (typeof window !== 'undefined') {
    getUserfromLocalStorage = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
    // getUserfromLocalStorage = localStorage.getItem("user");
}





// const getUserfromLocalStorage =
//     localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
const initialState = {
    user: getUserfromLocalStorage,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",

};

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        return await authService.login(user);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},

    extraReducers: (builder) => {

        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = true;
                state.isSuccess = false;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.user = null;
            });
    },
});
export default authSlice.reducer;