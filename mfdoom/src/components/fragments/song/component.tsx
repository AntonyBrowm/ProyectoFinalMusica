import { FC } from "react";
import { SongFragmentProps } from "./types";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';

const SongFragment:FC<SongFragmentProps> = ({id,name,album,genre,singers,duration,completeFile,previewFile,price,recordLabel,}) => {

    return (   
    
        <TableRow>  
            <TableCell align="right" width="10px"></TableCell>
            <TableCell align="left" width="8px"><PlayArrowOutlinedIcon /></TableCell>
            <TableCell>{name}</TableCell>
            <TableCell align="right">{genre}</TableCell>
            <TableCell align="right">{duration}</TableCell>
            <TableCell align="right"><LibraryAddOutlinedIcon /></TableCell>
        </TableRow> 
     );
};

export default SongFragment;