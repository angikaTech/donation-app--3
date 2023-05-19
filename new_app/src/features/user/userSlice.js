
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";





// const userDefaultstate = {
//     _id: null,
//     name: null,
//     email: null,
//     mobile: null,
//     token: null,
// };

// let getUserfromLocalStorage;
// if (typeof window !== 'undefined') {
//     getUserfromLocalStorage = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

// }

const initialState = {
    ruser: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",

};

// export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
//     try {
//         return await authService.login(user);
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error);

//     }
// });

// register user
export const register = createAsyncThunk(
    "user/register",
    async (userdata, thunkAPI) => {
        try {
            return await userService.register(userdata);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
            // return rejectWithValue(err.response.data)

        }
    }
);

// register user end.

export const userSlice = createSlice({
    name: "register",
    initialState,
    reducers: {},

    extraReducers: (builder) => {

        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;

            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.user = null;
                state.message = action.error;

            });

    },
});
export default userSlice.reducer;