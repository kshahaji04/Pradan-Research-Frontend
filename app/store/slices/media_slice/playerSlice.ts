import { createSlice } from '@reduxjs/toolkit';

interface PlayerState {
  playing: boolean;
  data: any;
  currentTime: number;
}

const initialState: { player: PlayerState } = {
  player: {
    playing: false,
    data: {},
    currentTime: 0,
  },
};

const playerSlice = createSlice({
  name: 'audioPlayer',
  initialState,
  reducers: {
    play(state, action) {
      state.player = { ...state.player, playing: true, data: action.payload };
    },
    pause(state) {
      state.player = { ...state.player, playing: false };
    },
    setCurrentTime(state, action) {
      state.player = { ...state.player, currentTime: action.payload };
    },
  },
});

export const { play, pause, setCurrentTime } = playerSlice.actions;
export default playerSlice.reducer;
