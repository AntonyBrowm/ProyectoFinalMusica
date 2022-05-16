import { Box} from "@mui/material";
import {useParams} from 'react-router-dom'
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import {Styles} from "../../theme/types";
import SingleBioFragment from "../../components/fragments/single_bio/component";
import { getSingleById,getSinglesById} from "../../services/single";
import {singleSelector } from "../../features/musicSlice";

const Single= () => {
const dispatch = useDispatch();
const single = useAppSelector(singleSelector);
const {id} = useParams();
 useEffect(() => {
    dispatch(getSingleById(id));
    dispatch(getSinglesById(id));
  }, [dispatch, id]);
const styles: Styles={
  container:{
    padding: "60px" ,
    paddingLeft:"100px",
},};
 
    return (
    <Box sx={styles.container}>
        <SingleBioFragment
        {...single}
        url={single.completeFile}
        />
    </Box>)
};
export default Single;