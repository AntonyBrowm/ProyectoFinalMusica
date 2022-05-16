import { AppDispatch } from "../app/store";
import { setAuth } from "../features/authSlice";
import { setLoading } from "../features/loaderSlice";
import { LoginDTO } from "../views/login/form";
import { store } from "../../app/store";
export const fetchLogin = (user: LoginDTO) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch("http://3.218.67.164:9005/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.status !== 200) return "";

    const userAuth = await response.json();
    console.log(userAuth);
    dispatch(setAuth(userAuth));
  } catch (err) {
    throw err;
  } finally {
    dispatch(setLoading(false));
  }
};