import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./PlayButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import { setPlayer  } from "../../features/playerSlice";

const PlayButton = (url) => {
  const [audio] = useState(new Audio(url));
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