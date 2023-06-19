import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import paymenttableService from "./paymentsuccessService";
import successfullService from "./paymentsuccessService";



export const successfullPayee = createAsyncThunk(
    "successfull/get-paymentsuccess",
    async (thunkAPI) => {
        try {
            return await successfullService.successfullPayee();


        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const initialState = {
    successfullPaymet: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const successfullSlice = createSlice({
    name: 'successfullPaymet',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(successfullPayee.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(successfullPayee.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.successfullPaymet = action.payload;

            })
            .addCase(successfullPayee.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;

            });

    },
});

export default successfullSlice.reducer;