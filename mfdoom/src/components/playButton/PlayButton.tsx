import React, { useEffect, useState } from "react";

import "./PlayButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import { setPlayer  } from "../../features/playerSlice";
import { useDispatch } from "react-redux";
const PlayButton = () => {
  const dispatch = useDispatch();
  return (
    <FontAwesomeIcon
      className="icon-controller"
      icon={faPlay}
      onClick= {() => dispatch(setPlayer(url))}
    />
  );
};

export default PlayButton;