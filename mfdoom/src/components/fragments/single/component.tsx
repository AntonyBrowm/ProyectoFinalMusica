import { FC } from "react";
import { SingleFragmentProps } from "./types";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import PlayButton from "../../playButton/PlayButton";

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

    return (
        <TableRow>  
            <TableCell align="right" width="10px"></TableCell>
            <TableCell align="left" width="8px"><PlayButton url={completeFile}/></TableCell>
            <TableCell>{name}</TableCell>
            <TableCell align="right">{genre}</TableCell>
            <TableCell align="right">{duration}</TableCell>
            <TableCell align="right"><LibraryAddOutlinedIcon /></TableCell>
        </TableRow>
     );
};

export default SingleFragment;