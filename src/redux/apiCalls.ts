import axios from "axios";
import { Dispatch } from "react";
import { BASE_URL } from "src/constants";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const login = async (dispatch: Dispatch<unknown>, user: any) =>  {
  dispatch(loginStart());

  try {
    const {data} = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(data))
  } catch(err) {
  dispatch(loginFailure());
  }
}