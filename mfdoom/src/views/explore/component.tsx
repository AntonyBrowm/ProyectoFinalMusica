import { Box} from "@mui/material";
import AlbumCard from "../../components/cards/album/component";
import ArtistCard from "../../components/cards/artist/component";
import SingleCard from "../../components/cards/single/component";
import { Styles } from "../../theme/types";
import { getSingers } from "../../services/singer";
import { getAlbums } from "../../services/album";
import { getSingles } from "../../services/single";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { singersSelector, albumsSelector, singlesSelector } from "../../features/musicSlice";
import Grid from '@mui/material/Grid';
const Explore= () => {
  const dispatch = useDispatch();
  const singers = useAppSelector(singersSelector);
  const albums = useAppSelector(albumsSelector);
  const singles = useAppSelector(singlesSelector);
  useEffect(() => {
    dispatch(getSingers());
    dispatch(getAlbums());
    dispatch(getSingles());
  }, [dispatch]);

const styles: Styles={
    container:{
   padding: "50px" ,
   overflowY: "auto",

    },
    AlbumsContainer:{
        width:"100%",
        borderRadius: "15px",
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
     albumsList: {
      width: "fit-content",
      display: "flex",
      overflowX: "auto",
      gap: "40px",
      paddingBottom: "20px",
    },
    singerContainer: {
        width: "100%",
        height: "auto",
        display: "flex",
        alignItems: "left",
        justifyContent: "left",
      },
      singerList: {
        width: "100%",
        display: "flex",
        overflowX: "auto",
        gap: "60px",
        paddingBottom: "20px",
        alignItems: "center",
        justifyContent: "center",
      },
      singleContainer: {
        width: "100%",
        height: "auto",
        display: "flex",
        alignItems: "left",
        justifyContent: "left",
      },
      singleList: {
        width: "100%",
        display: "flex",
        overflowX: "auto",
        gap: "60px",
      },
};
    return (
        <Box sx={styles.container}>
        <Box sx={styles.AlbumsContainer}>
    <Box sx={styles.albumsList}>
          {albums.map((album) => (
            <AlbumCard
              {...album} 
              key={`album-${album.id}`}
              title={album.name}
            />
          ))}
        </Box>
        </Box>

        <Box sx={styles.singerContainer}>
        <Box sx={styles.singerList}>
        {singers.slice(0,6).map((singer) => (
              <ArtistCard {...singer} 
              key={`singer-${singer.id}`} 
              artist={singer.stageName} 
              />
            ))}
        </Box>
        </Box>

        <Box sx={styles.singleContainer}>
        <Box sx={styles.singleList}>
        <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {singles.map((single) => (
              <SingleCard {...single}
              key={`single-${single.id}`} 
              singers={JSON.parse(JSON.stringify(single.singerSingle))}
              />
            ))
      }
      </Grid>
        </Box>
        </Box>
        </Box>
       </Box>
        );
    };

export default Explore;