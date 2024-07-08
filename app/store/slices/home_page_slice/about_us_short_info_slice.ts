import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/app/store/root-reducer";
import GetLogoApi from "@/app/services/api/home_page_api/logo_api";
import GetNavbarApi from "@/app/services/api/home_page_api/navbar_api";
import GetBannerApi from "@/app/services/api/home_page_api/banner_api";
import GetAboutUsShortInfoApi from "@/app/services/api/home_page_api/about_us_short_info_api";

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
export const fetchAboutUsShortInfo = createAsyncThunk(
    "aboutUsShortInfo/fetchAboutUsShortInfo",
    async () => {
        try {
            const response = await GetAboutUsShortInfoApi();
            // console.log(response)
            return response;
        } catch (error) {
            throw error;
        }
    }
);

// Create a slice for the technical skills
const aboutUsShortInfoSliceScreen = createSlice({
    name: "aboutUsShortInfo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAboutUsShortInfo.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchAboutUsShortInfo.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                // console.log('language is in slice', action.payload);
                state.error = "";
            })
            .addCase(fetchAboutUsShortInfo.rejected, (state, action) => {
                state.loading = true;
                state.data = [];
                state.error = "An error occurred.";
            });
    },
});

export const get_about_us_short_info_from_store = (state: RootState) => state.aboutUsShortInfo;
// Export the reducer
export default aboutUsShortInfoSliceScreen.reducer;
