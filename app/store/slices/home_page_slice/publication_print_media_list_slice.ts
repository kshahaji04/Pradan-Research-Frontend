// import GetCategoryListApi from "@/services/api/category_list_api/category_list_api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../root-reducer";
import GetPublicationsApi from "@/app/services/api/home_page_api/publictaion_list_api";


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
export const fetchPublicationPrintMediaList = createAsyncThunk(
    "publicationPrintMediaList/fetchPublicationPrintMediaList",
    async (type:any) => {
        try {
            const response = await GetPublicationsApi(type);
            // console.log(response,"response")
            return response;
        } catch (error) {
            throw error;
        }
    }
);

// Create a slice for the technical skills
const PublicationPrintMediaListSliceScreen = createSlice({
    name: "publicationList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPublicationPrintMediaList.pending, (state) => {
                state.loading = true;
                state.error = "";
                // state.data = []
            })
            .addCase(fetchPublicationPrintMediaList.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                // console.log('language is in slice', action.payload);
                state.error = "";
            })
            .addCase(fetchPublicationPrintMediaList.rejected, (state, action) => {
                state.loading = true;
                state.data = [];
                state.error = "An error occurred.";
            });
    },
});

export const get_publication_print_media_list_from_store = (state: RootState) => state.publicationPrintMediaList;
// Export the reducer
export default PublicationPrintMediaListSliceScreen.reducer;
