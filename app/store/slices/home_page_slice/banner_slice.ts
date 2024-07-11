import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/app/store/root-reducer";
import GetLogoApi from "@/app/services/api/home_page_api/logo_api";
import GetNavbarApi from "@/app/services/api/home_page_api/navbar_api";
import GetBannerApi from "@/app/services/api/home_page_api/banner_api";

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
export const fetchBanner = createAsyncThunk(
    "banner/fetchBanner",
    async () => {
        try {
            const response = await GetBannerApi();
            // console.log(response)
            return response;
        } catch (error) {
            throw error;
        }
    }
);

// Create a slice for the technical skills
const bannerSliceScreen = createSlice({
    name: "banner",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBanner.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchBanner.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                // console.log('language is in slice', action.payload);
                state.error = "";
            })
            .addCase(fetchBanner.rejected, (state, action) => {
                state.loading = true;
                state.data = [];
                state.error = "An error occurred.";
            });
    },
});

export const get_banner_from_store = (state: RootState) => state.banner;
// Export the reducer
export default bannerSliceScreen.reducer;
