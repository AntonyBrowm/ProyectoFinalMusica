import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Styles } from "../../../theme/types";
import { ArtistCardProps } from "./types";
import {
  Link
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ArtistCard:FC<ArtistCardProps> = ({image,artist,id}) => {
  const navigate = useNavigate();
    const styles: Styles = {
        cardContainer: {
          width: "150px",
          textAlign: "center",
        },
        imageContainer: {
          borderRadius: "50%",
          filter:" drop-shadow(1px 2px 4px hsl(340deg 50% 0%))",
            width: "150px",
          height: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          marginBottom: "20px",
        },
        image: {},
        title: {
          fontSize: "1.2rem",
          fontWeight: "bold",
          color: "black",
        },
      };
    const imageStyle = {
        height: "150px",
        width: "auto",
      };
    return (
        <Box sx={styles.cardContainer}>
        <Box sx={styles.imageContainer} onClick= {() => navigate(`/singer/${id}`)}>
          <img style={imageStyle} src={image} alt={`Singer-${artist}`} /></Box>
      <Typography sx={styles.title}>{artist}</Typography>
      </Box>
    );
};

export default ArtistCard;