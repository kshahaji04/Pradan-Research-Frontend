import getGoogleAccessTokenApi from '@/app/services/api/auth_api/google_login_api';
import { RootState } from '@/app/store/root-reducer';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


interface AuthState {
    token: any;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string;
}

const initialState: AuthState = {
    token: '',
    loading: 'idle',
    error: '',
};

export const getGoogleAccessToken: any = createAsyncThunk(
    'auth/getGoogleAccessToken',
    async (credential) => {
        
        try {
            const GoogleAccessTokenData = await getGoogleAccessTokenApi(credential);
            return GoogleAccessTokenData;
        } catch (err: any) {
            if (axios.isCancel(err)) {
                throw new Error('Request canceled');
            }

            if (err.code === 'ECONNABORTED') {
                throw new Error('Request timed out');
            } else if (err.code === 'ERR_BAD_REQUEST') {
                throw new Error('Bad Request');
            } else if (err.code === 'ERR_INVALID_URL') {
                throw new Error('Invalid URL');
            } else {
                throw err;
            }
        }
    }
);

const authGoogleSliceScreen = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        ClearGoogleToken(state?: any, action?: any) {
            state.token = "";
            state.error = "";
            state.loading = "idle";
        },
        updateGoogleAccessToken(state?: any, action?: any) {
            state.token = action?.payload;
            state.error = "";
            state.loading = "idle";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getGoogleAccessToken.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(getGoogleAccessToken.fulfilled, (state, action) => {
                if (action?.payload?.data?.hasOwnProperty("access_token")) {
                    state.token = action?.payload?.data?.access_token;
                    const loginStatus = {
                        LoggedIn: "true",
                        LoggedInGoogle: "true"
                      };
                      
                      localStorage.setItem("loginStatus", JSON.stringify(loginStatus));
                      
                    // localStorage.setItem("LoggedIn", "true");
                    state.loading = "succeeded";
                }

            })
            .addCase(getGoogleAccessToken.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.error.message || 'An error occurred';
            });
    },
});

export const get_google_access_token = (state: RootState) =>
    state.authGoogleSliceScreen;
export const { ClearGoogleToken, updateGoogleAccessToken }: any =
    authGoogleSliceScreen.actions;

export default authGoogleSliceScreen.reducer;
