import axios from "axios";
import {
  GET_AUTH_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
} from "./actionTypes";

//REGISTER USER
export const registerUser = (newUser) => (dispatch) => {
  axios
    .post("/api/auth/register", newUser)
    .then((res) => dispatch({ type: REGISTER_USER, payload: res.data }))
    .catch((err) => console.log(err));
};
//LOGIN USER
export const loginUser = (user) => (dispatch) => {
  axios
    .post("/api/auth/login", user)
    .then((res) => dispatch({ type: LOGIN_USER, payload: res.data }))
    .catch((err) => console.log(err));
};
//GET AUTH USER
export const getAuthUser = () => (dispatch) => {
  const config = {
    headers: { auth: localStorage.getItem("token") },
  };
  axios
    .get("/api/auth/user", config)
    .then((res) => dispatch({ type: GET_AUTH_USER, payload: res.data }))
    .catch((err) => console.log(err));
};

//LOGOUT USER
export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};
