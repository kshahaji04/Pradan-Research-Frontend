import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/app/store/root-reducer";
import GetLogoApi from "@/app/services/api/home_page_api/logo_api";
import GetNavbarApi from "@/app/services/api/home_page_api/navbar_api";
import GetFooterApi from "@/app/services/api/home_page_api/footer_api";

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
export const fetchFooter = createAsyncThunk(
    "footer/fetchFooter",
    async () => {
        try {
            const response = await GetFooterApi();
            // console.log(response)
            return response;
        } catch (error) {
            throw error;
        }
    }
);

// Create a slice for the technical skills
const footerSliceScreen = createSlice({
    name: "footer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFooter.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchFooter.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                // console.log('language is in slice', action.payload);
                state.error = "";
            })
            .addCase(fetchFooter.rejected, (state, action) => {
                state.loading = true;
                state.data = [];
                state.error = "An error occurred.";
            });
    },
});

export const get_footer_from_store = (state: RootState) => state.footer;
// Export the reducer
export default footerSliceScreen.reducer;
