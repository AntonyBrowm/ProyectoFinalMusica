import { Box} from "@mui/material";
import {useParams} from 'react-router-dom'
import { useEffect} from "react";
import {singersSelector } from "../../features/musicSlice";
import { useDispatch } from "react-redux";
import { getSingersById,getSongsBySinger  } from "../../services/singer";
import { getSinglesBySinger} from "../../services/single";
import { useAppSelector } from "../../app/hooks";
import SingerFragment from "../../components/fragments/singer/component";
import {Styles} from "../../theme/types";

const Singer= () => {
const dispatch = useDispatch();
const singers = useAppSelector(singersSelector);
const {id} = useParams();
 useEffect(() => {
    dispatch(getSingersById(id));
    dispatch(getSongsBySinger(id));
    dispatch(getSinglesBySinger(id));
  }, [dispatch, id]);
const styles: Styles={
  container:{
    padding: "60px" ,
    paddingLeft:"100px",
},};
 
    return (
    <Box sx={styles.container}>
        <SingerFragment
        {...singers}
        />
    </Box>)
};
export default Singer;