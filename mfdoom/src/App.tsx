import React from 'react';
import './App.css';
import Bar from './components/bar_menu/bar';
import Player from './components/bar_player/player';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Explore from './views/explore/component';
import Search from './views/search/component';
import Library from './views/library/component';
import Account from './views/account/component';
import Album from './views/album/component';
import Singer from './views/singer/component';
import Single from './views/single/component';
import Login from './views/login/component';
import {Styles} from "./theme/types";
import {Box} from "@mui/system";
import { useAppSelector } from "./app/hooks";
import { tokenSelector } from "./features/authSlice";
import { useEffect, useMemo } from "react";


const App = () => {

const publicPaths = ["/login", "/", "/search", "/account", "/album/:id", "/singer/:id", "/single/:id"];
const token = useAppSelector(tokenSelector);
const location = useLocation();
const navigate = useNavigate();
useEffect(() => {
const publicPath = publicPaths.some((path) => path === location.pathname);

if (token === undefined && !publicPath) navigate('/login');  
}, [location, navigate, token  ])

  const haveBar = useMemo(() => location.pathname !== "/login", [location]);

  const styles: Styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      padding: "0.0em 0.80em",
    },
    root: {
      display: "grid",
      height: "100%",
      gridTemplateColumns: haveBar ? "200px auto" : "auto",
    },
    boxing: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 30
    },
  };
  return  <>

      <Box sx={styles.container}>   
      {haveBar && <Bar />}
        <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/login" element={<Login />} />
            <Route path="/search" element={<Search />} />
            <Route path="/library" element={<Library />} />
            <Route path="/account" element={<Account />} />
            <Route path="/album/:id" element={<Album />} />
            <Route path="/singer/:id" element={<Singer />} />
            <Route path="/single/:id" element={<Single />} />
        </Routes>
      </Box>
      <Box sx={styles.boxing}> 
      {haveBar && <Player />}
      </Box>
  </>
}

export default App;
