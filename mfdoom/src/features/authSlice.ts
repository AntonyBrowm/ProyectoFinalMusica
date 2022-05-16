import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Auth } from "../models/auth"

export interface authState {
  autos  :  Auth[];
}
const initialState: authState = {
  autos: [],
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.autos = action.payload;
    },
    deleteAuth: (state) => {
      state.autos = undefined;
    },
  },
});

export const { setAuth, deleteAuth } = AuthSlice.actions;

export const authSelector = (state: RootState) => state.auth;

export const tokenSelector = (state: RootState) => authSelector(state).autos;

export default AuthSlice.reducer;