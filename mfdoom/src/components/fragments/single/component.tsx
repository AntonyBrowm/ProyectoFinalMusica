import { FC } from "react";
import { SingleFragmentProps } from "./types";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import PlayButton from "../../playButton/PlayButton";
import { setPlayer  } from "../../../features/playerSlice";
import { useDispatch } from "react-redux";
const SingleFragment:FC<SingleFragmentProps> = ({ id,name,
    genre,
    singers,
    duration,
    completeFile,
    previewFile,
    price,
    recordLabel,
    image,
    releaseDate,}) => {
        const dispatch = useDispatch();
        
    return (
        <TableRow>  
            <TableCell align="right" width="10px"></TableCell>
            <TableCell align="left" width="8px"><PlayArrowOutlinedIcon onClick= {() => dispatch(setPlayer(completeFile))}/></TableCell>
            <TableCell>{name}</TableCell>
            <TableCell align="right">{genre}</TableCell>
            <TableCell align="right">{duration}</TableCell>
            <TableCell align="right"><LibraryAddOutlinedIcon /></TableCell>
        </TableRow>
     );
};

export default SingleFragment;