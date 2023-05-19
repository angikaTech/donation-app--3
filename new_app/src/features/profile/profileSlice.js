import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import profileService from "./profileService";

export const getProfile = createAsyncThunk(
    "profile/get-profile",
    async (thunkAPI) => {
        try {
            return await profileService.getProfile();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
const initialState = {
    profile: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};
export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProfile.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.profile = action.payload;
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});
export default profileSlice.reducer;