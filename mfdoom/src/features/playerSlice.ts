import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Player } from "../models/player"

export interface playState {
  player  :  Player;
}
const initialState: playState = {
    player: undefined,
};

export const PlayerSlice = createSlice({
  name: "Player",
  initialState,
  reducers: {
    setPlayer: (state, action) => {
      state.player = action.payload;
    },
  },
});

export const { setPlayer } = PlayerSlice.actions;

export const playerSelector = (state: RootState) => state.player;

export default PlayerSlice.reducer;