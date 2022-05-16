import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Styles } from "../../../theme/types";
import { SingleCardProps } from "./types";
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";

const SingleCard:FC<SingleCardProps> = ({id,name,image,singers}) => {
    const navigate = useNavigate();
    const styles: Styles = {
        cardContainer: {
            display:"flex",
        },
        infoContainer: {
            padding: "14px",
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
        },
        infoSingers:{
            fontSize:"0.90rem",
            fontWeight:"600",
            padding: "4px",
        },
      };
      const imageStyle = {
        height: "80px",
        width: "80",
        borderRadius:"18px",
      };
      const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
      }));
    return (
        <Grid item xs={4}>
        <Item>
        <Box sx={styles.cardContainer} onClick= {() => navigate(`/single/${id}`)}>
        <img style={imageStyle} src={image} alt={`single-${name}`} />
        <Box sx={styles.infoContainer}>
        <Typography sx={styles.title}>{name}</Typography>
        <Typography sx={styles.infoSingers}>{singers}</Typography>
        </Box>
        </Box>
        </Item>
        </Grid>
    );
};

export default SingleCard;