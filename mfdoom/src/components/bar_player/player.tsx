import * as React from 'react';
import Box from '@mui/material/Box';
import { useMemo} from "react";
import { Styles } from "../../theme/types";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {playerSelector } from "../../features/playerSlice";
import { useAppSelector } from "../../app/hooks";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
const Player = ()=>{
    const playerUrl = useAppSelector(playerSelector);
    const playerState=false;
    if(playerUrl!=='undefined'){
        const playerState=true;
        console.log(playerState);
    }
    
    const [value, setValue] = React.useState(0);
    const styles: Styles={
      tabs: {
        '&:last-child': {
          position: 'absolute',
          right: '0'
        }
      },
      boxing: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 30
      },
      boxingCenter: {
        display:"flex",
        justifyContent: "center",
        paddingLeft:"300px",
      },
      boxingRight: {
        display:"absolute",
        marginLeft:"auto",
        padding:"20px",
      },
    };
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    return (
    <>
    <Box sx={styles.boxing}>
    <AudioPlayer
    src="https://res.cloudinary.com/dhz4matkl/video/upload/v1652680723/musica/150_v1_mw1emc.mp3"
    onPlay={e => console.log("onPlay")}
    />
    </Box>  
    </>
    )
}

export default Player