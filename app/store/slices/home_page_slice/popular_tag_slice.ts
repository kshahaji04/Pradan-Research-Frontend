import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/app/store/root-reducer";
import GetLogoApi from "@/app/services/api/home_page_api/logo_api";
import GetNavbarApi from "@/app/services/api/home_page_api/navbar_api";
import GetBannerApi from "@/app/services/api/home_page_api/banner_api";
import GetAboutUsShortInfoApi from "@/app/services/api/home_page_api/about_us_short_info_api";
import GetCategoryListApi from "@/app/services/api/home_page_api/category_list_api";
import GetPopularTagApi from "@/app/services/api/home_page_api/popular_tag_api";

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
export const fetchPopularTag = createAsyncThunk(
    "popularTag/fetchPopularTag",
    async () => {
        try {
            const response = await GetPopularTagApi();
            // console.log(response)
            return response;
        } catch (error) {
            throw error;
        }
    }
);

// Create a slice for the technical skills
const popularTagSliceScreen = createSlice({
    name: "popularTag",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopularTag.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchPopularTag.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                // console.log('language is in slice', action.payload);
                state.error = "";
            })
            .addCase(fetchPopularTag.rejected, (state, action) => {
                state.loading = true;
                state.data = [];
                state.error = "An error occurred.";
            });
    },
});

export const get_popular_tag_from_store = (state: RootState) => state.popularTag;
// Export the reducer
export default popularTagSliceScreen.reducer;
