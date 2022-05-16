import * as React from 'react';
import Box from '@mui/material/Box';
import { useMemo} from "react";
import { Styles } from "../../theme/types";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {playerSelector} from "../../features/playerSlice";
import {singlesSelector } from "../../features/musicSlice";
import { useAppSelector } from "../../app/hooks";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
const Player = ()=>{
    const playerUrl = useAppSelector(playerSelector);
    const singles = useAppSelector(singlesSelector);

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

    return (
    <>
    <Box sx={styles.boxing}>
    <AudioPlayer
                autoPlay
                header={singles.name}
                src={playerUrl}
                onPlay={e => console.log('onPlay')}/>
    </Box>  
    </>
    )
}

export default Player