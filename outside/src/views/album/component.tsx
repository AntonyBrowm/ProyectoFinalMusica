import { Box} from "@mui/material";
import {useParams} from 'react-router-dom'
import { useEffect} from "react";
import {albumsSelector } from "../../features/musicSlice";
import { useDispatch } from "react-redux";
import { getAlbumsById,getSongsByAlbum  } from "../../services/album";
import { useAppSelector } from "../../app/hooks";
import AlbumFragment from "../../components/fragments/album/component";

const Album= () => {
const dispatch = useDispatch();
const albums = useAppSelector(albumsSelector);
const {id} = useParams();
const styles: Styles={
  container:{
    padding: "60px" ,
    paddingLeft:"100px",
},};
  useEffect(() => {
    dispatch(getAlbumsById(id));
    dispatch(getSongsByAlbum(id));
  }, [dispatch, id]);
    return (
    <Box sx={styles.container}>
        <AlbumFragment
        {...albums}
        />
    </Box>)
};
export default Album;