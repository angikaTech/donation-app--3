import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import totalamountService from "./totalamountService";

export const totalamount1 = createAsyncThunk(
    "total/totalamount",
    async (thunkAPI) => {
        try {
            // return await profileService.getProfile();
            return await totalamountService.totalamount();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
const initialState = {
    totalamount: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};
export const totalamountSlice = createSlice({
    name: "total",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(totalamount1.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(totalamount1.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.totalamount = action.payload;
            })
            .addCase(totalamount1.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                // state.message = action.payload.message;
            });
    },
});
export default totalamountSlice.reducer;