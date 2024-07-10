import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/app/store/root-reducer";
import GetLogoApi from "@/app/services/api/home_page_api/logo_api";

// Define an initial state for your slice
const initialState: {
    data: any | null;
    loading: boolean;
    error: string | null;
} = {
    data: [],
    loading: false,
    error: "",
};

// Create an asynchronous thunk for fetching the technical skills
export const fetchLogo = createAsyncThunk(
    "logo/fetchLogo",
    async () => {
        try {
            const response = await GetLogoApi();
            // console.log(response)
            return response;
        } catch (error) {
            throw error;
        }
    }
);

// Create a slice for the technical skills
const logoSliceScreen = createSlice({
    name: "logo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLogo.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchLogo.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                // console.log('language is in slice', action.payload);
                state.error = "";
            })
            .addCase(fetchLogo.rejected, (state, action) => {
                state.loading = true;
                state.data = [];
                state.error = "An error occurred.";
            });
    },
});

export const get_logo_from_store = (state: RootState) => state.logo;
// Export the reducer
export default logoSliceScreen.reducer;
