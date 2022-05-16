import { Box,  Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import {songsSelector,singlesSelector } from "../../../features/musicSlice";
import { useAppSelector } from "../../../app/hooks";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import SongFragment from "../song/component";
import SingleFragment from "../single/component";
import {Styles} from "./theme/types";
import { SingerFragmentProps } from "./types";

const SingerFragment:FC<SingerFragmentProps> = ({id,name,stageName,lastName,nationality,image,biography
}) => {
    const songs = useAppSelector(songsSelector);
    const singles = useAppSelector(singlesSelector);
    const BootstrapButton = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 12,
        padding: '6px 12px',
        border: '1px solid',
        color: 'white',
        lineHeight: 1.5,
        backgroundColor: '#858a86',
        borderColor: 'transparent',
        width: "auto",
        borderRadius: "20px",
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
          backgroundColor: 'rgba(251, 26, 45, 0.50)',
          borderColor: 'rgba(251, 26, 45, 0.50)',
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#000000',
          borderColor: '#000000',
        },
        '&:focus': {
          boxShadow: 'rgba(285, 26, 45, 1)',
        },
      });
    const imageStyle = {
        height: "300px",
        width: "300px",
        borderRadius: "20px",
      };
    const styles: Styles={
      imageContainer: {        
        filter:" drop-shadow(1px 2px 4px hsl(340deg 50% 0%))",
      },
      image:{},
      container: {
          display:"flex",
          padding:"20px",
      },
      infoContainer: {
        padding:"40px",
    },
    Singer:{
        fontFamily: [
            " Asap Condensed", "sans-serif"
         ].join(','),
        fontSize: "14px",
        color: "rgb(251 26 45 / 74%)",
        fontWeight: "bold",
    },
    Artist:{
        fontFamily: [
            " Asap Condensed", "sans-serif"
         ].join(','),
        fontSize: "14px",
        fontWeight: "bold",
    },
    infoBox:{
        display:"flex",
        paddingTop:"15px",
        gap: "10px",
    },
    infoSinger:{
        fontFamily: [
            " Asap Condensed", "sans-serif"
         ].join(','),
        fontSize: "14px",
        color:"gray",
    },
    titleSinger:{
        fontFamily: [
           " Asap Condensed", "sans-serif"
        ].join(','),
        fontSize: "38px",
        textTransform: "uppercase",
        padding: "0px",
        margin: "0px 0px 4px",
        visibility: "visible",
        whiteSpace: "normal",
        overflow: "hidden",
        display: "webkit-box",
        fontWeight: "bold",
        },
    };
    return (
        <>
        <Box sx={styles.container}>
            <Box sx={styles.imageContainer}>
            <img style={imageStyle} src={image} alt={`singer-${name}`} />
            </Box>
                <Box sx={styles.infoContainer}>
                <Typography sx={styles.Singer}>Singer</Typography>
                <Typography sx={styles.titleSinger} >{stageName}</Typography>
                 <Typography sx={styles.Artist} >{`${name} `}{lastName}</Typography>
                    <Box sx={styles.infoBox}>
                    <Typography sx={styles.infoSinger}>{biography}</Typography>
                    </Box>
                    <Box sx={styles.infoBox}>
                    <BootstrapButton variant="contained" disableRipple startIcon={<PlayArrowOutlinedIcon />}>
                     Play 
                    </BootstrapButton>
                    </Box>
                </Box>
        </Box>   
        <Box sx={styles.container}> 
        <Typography sx={styles.Singer}>Album Songs</Typography>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption></caption>
        <TableBody>
        {songs.slice(0, 8).map((song) => (
              <SongFragment {...song} 
              key={`song-${song.id}`} 
              />
            ))}
        </TableBody>
        </Table>
        </TableContainer>
        </Box>
        <Box sx={styles.container}> 
        <Typography sx={styles.Singer}>Singles</Typography>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption></caption>
        <TableBody>
        {singles.slice(0, 8).map((single) => (
              <SingleFragment {...single} 
              key={`song-${single.id}`} 
              />
            ))}
        </TableBody>
        </Table>
        </TableContainer>
        </Box>
        </>
        );
};
export default SingerFragment;