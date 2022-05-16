import { RootState } from "../app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Singer } from "../models/singer"
import { Album } from "../models/album"
import { Song } from "../models/song"
import { Single } from "../models/single"


export interface MusicState {
  singers: Singer[];
  albums: Album[];
  songs: Song[];
  singles: Single[];
  single: Single[];
}

const initialState: MusicState = {
  singers: [],
  albums: [],
  songs: [],
  singles: [],
  single: [],
};

export const MusicSlice = createSlice({
  name: "Music",
  initialState,
  reducers: {
    setSongs: (state, action) => {
      state.songs = action.payload;
    },
    setSingers: (state, action) => {
      state.singers = action.payload;
    },
    setAlbums: (state, action) => {
      state.albums = action.payload;
    },
    setSingles: (state, action) => {
      state.singles = action.payload;
    },
    setSingle: (state, action) => {
      state.single = action.payload;
    },
    setSelectedSingle: (state, action) => {
      state.single = action.payload;
  }
  },
});

export const musicSelector = (state: RootState) => state.music;
export const songsSelector = (state: RootState) => musicSelector(state).songs;
export const singersSelector = (state: RootState) =>musicSelector(state).singers;
export const albumsSelector = (state: RootState) => musicSelector(state).albums;
export const singlesSelector = (state: RootState) => musicSelector(state).singles;
export const singleSelector = (state: RootState) => musicSelector(state).single;
export const {
  setSingers,
  setAlbums,
  setSongs,
  setSingles,
  setSingle,
  setSelectedSingle,
} = MusicSlice.actions;

export default MusicSlice.reducer;