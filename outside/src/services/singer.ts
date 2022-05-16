import {
    setSingers,setSongs
  } from "../features/musicSlice";
  import { setLoading } from "../features/loaderSlice";
  import { AppDispatch } from "../app/store";
  import { Singer } from "../models/singer";
  import { Song } from "../models/singer";

  export const getSingers = () => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await fetch("http://3.218.67.164:9005/apiMusic/singer/");
  
      if (response.status !== 200) return "";
  
      const singers: Singer[] = await response.json();
      dispatch(setSingers(singers));
    } catch (err) {
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  };

  export const getSingersById = (id) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await fetch(`http://3.218.67.164:9005/apiMusic/singer/${id}`);
      if (response.status !== 200) return "";
      const singers: Singer[] = await response.json();
      dispatch(setSingers(singers));
    } catch (err) {
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  };
  
  export const getSongsBySinger = (id) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await fetch(`http://3.218.67.164:9005/apiMusic/song/?album=&singers=${id}`);
      if (response.status !== 200) return "";
      const songs: Song[] = await response.json();
      dispatch(setSongs(songs));
    } catch (err) {
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  }; 