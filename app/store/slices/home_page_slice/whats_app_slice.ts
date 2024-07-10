import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/app/store/root-reducer";
import GetWhatsAppDetailApi from "@/app/services/api/home_page_api/whats_app_api";

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
export const fetchWhatsAppDetail = createAsyncThunk(
    "whatsAppDetail/fetchWhatsAppDetail",
    async () => {
        try {
            const response = await GetWhatsAppDetailApi();
            return response;

        } catch (error) {
            throw error;
        }
    }
);

// Create a slice for the technical skills
const whatsAppDetailSliceScreen = createSlice({
    name: "whatsAppDetail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWhatsAppDetail.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchWhatsAppDetail.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = "";
            })
            .addCase(fetchWhatsAppDetail.rejected, (state, action) => {
                state.loading = true;
                state.data = [];
                state.error = "An error occurred.";
            });
    },
});

export const get_whats_app_detail_from_store = (state: RootState) => state.whatsAppDetail;
// Export the reducer
export default whatsAppDetailSliceScreen.reducer;
