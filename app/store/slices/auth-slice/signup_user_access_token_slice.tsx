import { RootState } from '@/app/store/root-reducer';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';


interface SignUpUserAccessTokenState {
  data: any;
}

const initialState: SignUpUserAccessTokenState = {
  data: {}, // Provide an initial value
};


const SignUpUserAccessTokenSlice = createSlice({
  name: "SignUpUserAccessToken",
  initialState,
  reducers: {
    setSignUpUserAccessToken(state, action: PayloadAction<SignUpUserAccessTokenState>) {
      state.data = action.payload;
      const access_token = state.data.acess_token

    },
    clearSignUpUserAccessToken(state, action: PayloadAction<SignUpUserAccessTokenState>) {
      state.data = '';
    },
  },
});

export const SignUpUserAccessToken_from_store = (state: RootState) =>
  state.SignUpUserAccessToken;
// Export the action creator

export const { setSignUpUserAccessToken, clearSignUpUserAccessToken } = SignUpUserAccessTokenSlice.actions;

// Export the reducer
export default SignUpUserAccessTokenSlice.reducer;
