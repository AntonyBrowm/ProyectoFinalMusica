import { setAlbums } from "../features/musicSlice";
import { setSongs } from "../features/musicSlice";
import { setLoading } from "../features/loaderSlice";
import { AppDispatch } from "../app/store";
import { Auth } from "../models/auth";

export const getAlbums = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch("http://3.218.67.164:9005/apiMusic/album/");

    if (response.status !== 200) return "";
    const albums: Album[] = await response.json();
    dispatch(setAlbums(albums));
  } catch (err) {
    throw err;
  } finally {
    dispatch(setLoading(false));
  }
};
export const getAlbumsById = (id) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch(`http://3.218.67.164:9005/apiMusic/album/${id}`);
    if (response.status !== 200) return "";
    const albums: Album[] = await response.json();
    dispatch(setAlbums(albums));
  } catch (err) {
    throw err;
  } finally {
    dispatch(setLoading(false));
  }
};
export const getSongsByAlbum = (id) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch(`http://3.218.67.164:9005/apiMusic/song/?album=${id}`);
    if (response.status !== 200) return "";
    const songs: Song[] = await response.json();
    dispatch(setSongs(songs));
  } catch (err) {
    throw err;
  } finally {
    dispatch(setLoading(false));
  }
}; 