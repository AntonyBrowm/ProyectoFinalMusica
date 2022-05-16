import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Styles } from "../../../theme/types";
import { SongCardProps } from "./types";
import {
  Link
} from "react-router-dom";
const SongCard:FC<SongCardProps> = ({image,singers,id,title,}) => {
  const imageStyle = {
    height: "180px",
    width: "auto",
  };
const styles: Styles={
  cardContainer:{
      width:"180px",
      height:"fit-content",
      border: "rgb(242,41,41) 1px",
      borderRadius: "10px",
      padding:"10px",
        },
  imageContainer: {
      filter:" drop-shadow(1px 2px 4px hsl(340deg 50% 0%))",
          width: "180px",
          height: "180px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          marginBottom: "20px",
  },
  image:{},
  title:{
      fontSize:"1rem",
      fontWeight:"bold",
      color:"black",
  },
  typo:{
      fontSize:"0.70rem",
      fontWeight:"600",
      color:"rgb(226,226,226)",
      paddingLeft: "4px",
  },

};

return (

  <Box sx={styles.cardContainer}>
  <Box sx={styles.imageContainer}>
        <img style={imageStyle} src={image} alt={`song-${artist}`} />
   </Box>
      <Link to={{
          pathname: `/song/${id}`,
          state: {
            id: id,
          }
        }}><Typography sx={styles.title}>{title}</Typography></Link>
  </Box>
);
};

export default SongCard;