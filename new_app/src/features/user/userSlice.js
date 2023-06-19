
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";



// register user
export const register = createAsyncThunk(
    "user/register",
    async (userdata, thunkAPI) => {
        try {
            return await userService.register(userdata);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
            // return rejectWithValue(err.response.data)

        }
    }
);

// register user end.

const initialState = {
    register: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",

};

export const userSlice = createSlice({
    name: "register",
    initialState,
    reducers: {},

    extraReducers: (builder) => {

        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.user = action.payload;
                state.message = action.payload.message;

            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                // state.user = null;
                state.message = action.payload.message;


            });

    },
});
export default userSlice.reducer;