import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { deleteAuth, tokenSelector } from "../../features/authSlice";
import { Styles } from "../../theme/types";
import LogoutIcon from '@mui/icons-material/Logout';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const LoginButton = () => {
  const token = useAppSelector(tokenSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (token !== undefined) {
      dispatch(deleteAuth());
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const styles: Styles = {
    button: {
        padding:"10px",
        height:"28px",
    },
  };

  return (
    <Button
      variant="contained"
      sx={styles.button}
      onClick={handleClick}
      color={token !== undefined ? "error" : "success"}>
      {token !== undefined ? <LogoutIcon/> : <ExitToAppIcon/>}
    </Button>
  );
};

export default LoginButton;
