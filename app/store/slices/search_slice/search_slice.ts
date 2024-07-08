import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/app/store/root-reducer";
import GetSearchApi from "@/app/services/api/search_api/search_api";

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
export const fetchSearch = createAsyncThunk(
    "search/fetchSearch",
    async ({ page, searchQuery, sortBy, selectedFilters }: { page: number, searchQuery?: string, sortBy?: string, selectedFilters?: any }) => {
        try {
            const response = await GetSearchApi(page, searchQuery, sortBy, selectedFilters);
            // console.log(response)
            return response;
        } catch (error) {
            throw error;
        }
    }
);

// Create a slice for the technical skills
const searchSliceScreen = createSlice({
    name: "search",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearch.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchSearch.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                // console.log('language is in slice', action.payload);
                state.error = "";
            })
            .addCase(fetchSearch.rejected, (state, action) => {
                state.loading = true;
                state.data = [];
                state.error = "An error occurred.";
            });
    },
});

export const get_search_from_store = (state: RootState) => state.search;
// Export the reducer
export default searchSliceScreen.reducer;
