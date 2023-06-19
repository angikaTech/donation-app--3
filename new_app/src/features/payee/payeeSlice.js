import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import payeeService from '../payee/payeeService';

// Async thunk action to create a payee
export const createPayee = createAsyncThunk(
    'payee/createPayee',
    async (payeeData, thunkAPI) => {
        try {
            const response = await payeeService.createPayee(payeeData);
            // You can handle the response data here if needed
            return response.data;
        } catch (error) {
            // You can handle errors here if needed
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// Redux slice
const payeeSlice = createSlice({
    name: 'payee',
    initialState: {
        payee: [],
        isError: false,
        isLoading: false,
        isSuccess: false,
        message: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createPayee.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(createPayee.fulfilled, (state) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
            })
            .addCase(createPayee.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error.message;
            });
    },
});

export default payeeSlice.reducer;
