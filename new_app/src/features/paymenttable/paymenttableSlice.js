import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import paymenttableService from "./paymenttableService";



export const getPayee = createAsyncThunk(
    "paymenttable/get-paymenttable",
    async (thunkAPI) => {
        try {
            return await paymenttableService.getPayee();

        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const initialState = {
    paymenttable: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const paymenttableSlice = createSlice({
    name: 'paymenttable',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPayee.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getPayee.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.paymenttable = action.payload;

            })
            .addCase(getPayee.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;

            });

    },
});

export default paymenttableSlice.reducer;