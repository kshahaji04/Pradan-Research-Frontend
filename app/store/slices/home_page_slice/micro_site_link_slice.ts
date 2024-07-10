import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/app/store/root-reducer";
import GetLogoApi from "@/app/services/api/home_page_api/logo_api";
import GetNavbarApi from "@/app/services/api/home_page_api/navbar_api";
import GetBannerApi from "@/app/services/api/home_page_api/banner_api";
import GetAboutUsShortInfoApi from "@/app/services/api/home_page_api/about_us_short_info_api";
import GetMicroSiteLinkApi from "@/app/services/api/home_page_api/microsite_link_api";

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
export const fetchMicroSite = createAsyncThunk(
    "microSiteLinkList/fetchMicroSite",
    async () => {
        try {
            const response = await GetMicroSiteLinkApi();
            // console.log(response)
            return response;
        } catch (error) {
            throw error;
        }
    }
);

// Create a slice for the technical skills
const microSiteLinkListSliceScreen = createSlice({
    name: "microSiteLinkList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMicroSite.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchMicroSite.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                // console.log('language is in slice', action.payload);
                state.error = "";
            })
            .addCase(fetchMicroSite.rejected, (state, action) => {
                state.loading = true;
                state.data = [];
                state.error = "An error occurred.";
            });
    },
});

export const get_micro_site_link_list_from_store = (state: RootState) => state.microSiteLinkList;
// Export the reducer
export default microSiteLinkListSliceScreen.reducer;
