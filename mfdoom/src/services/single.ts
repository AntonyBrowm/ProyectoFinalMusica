import { setLoading } from "../features/loaderSlice";
import { AppDispatch } from "../app/store";
import { Single } from "../models/single";
import {setSingles, setSingle} from "../features/musicSlice";

  export const getSingles = () => async (dispatch: AppDispatch) => {
    
    try {
      dispatch(setLoading(true));
      const response = await fetch("http://3.218.67.164:9005/apiMusic/singleSong/");
  
      if (response.status !== 200) return "";
  
      const singles: Single[] = await response.json();
      dispatch(setSingles(singles));
    } catch (err) {
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  };
  export const getSingleById = (id) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await fetch(`http://3.218.67.164:9005/apiMusic/singleSong/${id}`);
  
      if (response.status !== 200) return "";
  
      const single: Single[] = await response.json();
      dispatch(setSingle(single));
    } catch (err) {
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  };
  export const getSinglesById = (id) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await fetch(`http://3.218.67.164:9005/apiMusic/singleSong/${id}`);
  
      if (response.status !== 200) return "";
  
      const singles: Single[] = await response.json();
      dispatch(setSingles(singles));
    } catch (err) {
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  };
  export const getSinglesBySinger = (id) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await fetch(`http://3.218.67.164:9005/apiMusic/singleSong/?singerSingle=${id}`);
      if (response.status !== 200) return "";
      const singles: Single[] = await response.json();
      dispatch(setSingles(singles));
    } catch (err) {
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  }; 
