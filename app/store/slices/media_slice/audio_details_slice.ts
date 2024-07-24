import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../root-reducer";
import GetAudioDetailsApi from "@/app/services/api/media_page_api/audio_details_api";


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
export const fetchAudioDetails = createAsyncThunk(
    "audioDetails/fetchAudioDetails",
    async (slug:any) => {
        try {
            const response = await GetAudioDetailsApi(slug);
            // console.log(response,'query resp', slug)
            return response;
        } catch (error) {
            throw error;
        }
    }
);

// Create a slice for the technical skills
const AudioDetailsSliceScreen = createSlice({
    name: "audioDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAudioDetails.pending, (state) => {
                state.loading = true;
                state.error = "";
                // state.data = []
            })
            .addCase(fetchAudioDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                // console.log('language is in slice', action.payload);
                state.error = "";
            })
            .addCase(fetchAudioDetails.rejected, (state, action) => {
                state.loading = true;
                state.data = [];
                state.error = "An error occurred.";
            });
    },
});

export const get_audio_details_from_store = (state: RootState) => state.audioDetails;
// Export the reducer
export default AudioDetailsSliceScreen.reducer;
