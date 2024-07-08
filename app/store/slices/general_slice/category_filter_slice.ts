import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/app/store/root-reducer";
import GetLogoApi from "@/app/services/api/home_page_api/logo_api";
import GetNavbarApi from "@/app/services/api/home_page_api/navbar_api";
import GetBannerApi from "@/app/services/api/home_page_api/banner_api";
// import GetBlogListApi from "@/app/services/api/blog_api/blog_list_api";
// import GetCategoryFilterApi from "@/app/services/api/general_api/category_filter_api";

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
export const fetchCategoryFilter = createAsyncThunk(
    "categoryFilter/fetchCategoryFilter",
    async () => {
        // try {
        //     const response = await GetCategoryFilterApi();
        //     // console.log(response)
        //     return response;
        // } catch (error) {
        //     throw error;
        // }
    }
);

// Create a slice for the technical skills
const categoryFilterSliceScreen = createSlice({
    name: "categoryFilter",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategoryFilter.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchCategoryFilter.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                // console.log('language is in slice', action.payload);
                state.error = "";
            })
            .addCase(fetchCategoryFilter.rejected, (state, action) => {
                state.loading = true;
                state.data = [];
                state.error = "An error occurred.";
            });
    },
});

export const get_category_filter_from_store = (state: RootState) => state.categoryFilter;
// Export the reducer
export default categoryFilterSliceScreen.reducer;
