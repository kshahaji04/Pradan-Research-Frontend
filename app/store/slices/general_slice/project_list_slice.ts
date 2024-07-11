import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/app/store/root-reducer";
import GetLogoApi from "@/app/services/api/home_page_api/logo_api";
import GetProjectListApi from "@/app/services/api/general_api/project_list_api";

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
export const fetchProjectList = createAsyncThunk(
    "projectList/fetchProjectList",
    async () => {
        try {
            const response = await GetProjectListApi();
            // console.log(response)
            return response;
        } catch (error) {
            throw error;
        }
    }
);

// Create a slice for the technical skills
const projectListSliceScreen = createSlice({
    name: "projectList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjectList.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchProjectList.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                // console.log('language is in slice', action.payload);
                state.error = "";
            })
            .addCase(fetchProjectList.rejected, (state, action) => {
                state.loading = true;
                state.data = [];
                state.error = "An error occurred.";
            });
    },
});

export const get_project_list_from_store = (state: RootState) => state.projectList;
// Export the reducer
export default projectListSliceScreen.reducer;
