// import GetCategoryListApi from "@/services/api/category_list_api/category_list_api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../root-reducer";
import GetAudioVideoListApi from "@/app/services/api/media_page_api/audio_video_list_api";


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
export const fetchAudioVideoList = createAsyncThunk(
    "audioVideoList/fetchAudioVideoList",
    async () => {
        try {
            const response = await GetAudioVideoListApi();
            // console.log(response,"response")
            return response;
        } catch (error) {
            throw error;
        }
    }
);

// Create a slice for the technical skills
const AudioVideoListSliceScreen = createSlice({
    name: "audioVideoList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAudioVideoList.pending, (state) => {
                state.loading = true;
                state.error = "";
                // state.data = []
            })
            .addCase(fetchAudioVideoList.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                // console.log('language is in slice', action.payload);
                state.error = "";
            })
            .addCase(fetchAudioVideoList.rejected, (state, action) => {
                state.loading = true;
                state.data = [];
                state.error = "An error occurred.";
            });
    },
});

export const get_audio_video_list_from_store = (state: RootState) => state.audioVideoList;
// Export the reducer
export default AudioVideoListSliceScreen.reducer;
