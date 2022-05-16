import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeMaxRoundedIcon from '@mui/icons-material/HomeMaxRounded';
import PageviewOutlinedIcon from '@mui/icons-material/PageviewOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';   
import { useNavigate } from "react-router-dom";
import { NavButton } from './types';
import { useMemo} from "react";
import { Styles } from "../../theme/types";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import LoginButton from "../../components/logButton/component";
const Bar = ()=>{
const navigate = useNavigate();

const Buttons: NavButton[] = useMemo(
  () => [
    {
      text: "Explore",
      iconPosition:"start",
      icon: <HomeMaxRoundedIcon />,
      onClick: () => navigate("/"),
    },
    {
      text: "Library",
      iconPosition:"start",
      icon: <LibraryMusicOutlinedIcon />,
      onClick: () => navigate("/library"),
    },
    {
        text: "Account",
        iconPosition:"start",
        icon: <AccountBoxOutlinedIcon />,
        onClick: () => navigate("/account"),
      },
  ],
  [navigate]
);
    const [value, setValue] = React.useState(0);
    const styles: Styles={
      tabs: {
        '&:last-child': {
          position: 'absolute',
          right: '0'
        }
      },
      boxing: {
        display:"flex",
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
    <Tabs value={value} onChange={handleChange} aria-label="icon tabs">
    {Buttons.map((button, index) => (
        <Tab icon={button.icon} iconPosition="start" aria-label={`${index}`} label={button.text} key={`NavButton-${button.text}-${index}`}  onClick={button.onClick}/>
        ))}
    </Tabs>   
    <Box sx={styles.boxingCenter}>
    <Paper component="form"sx={{display: 'flex', alignItems: 'center', width: 400, height:30, marginTop:'20px', borderRadiius:'80px' }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}/>
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
    </Box>
    <Box sx={styles.boxingRight}>
    <LoginButton/>
    </Box> 
    </Box>  
    </>
    )
}

export default Bar



