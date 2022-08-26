import User from "../../services/User";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";


export const login = createAsyncThunk("SEND_LOGIN_REQUEST", async (body) => {
  const {error, data} = await User.loginRequest(body);
  if(!error) return data; 
});

export const logout = createAsyncThunk("SEND_LOGOUT_REQUEST", async (body) => {
  const {error, data} = await User.logoutRequest(body);
  if(!error) return data; 
});


export const getMe = createAsyncThunk("SEND_GETME_REQUEST", async () => {
  const token = JSON.parse(localStorage.getItem("aa_tt"));
  if(!token) return {};
  const { error, data } = await User.getMe(token);
  if(error) return null;
  console.log("soy la data de redux", data);
  return data
});

export const userReducer = createReducer({},
  {
    [login.fulfilled]: (state, action) => action.payload,
    [getMe.fulfilled]: (state, action) => action.payload,
    [logout.fulfilled]: (state, action) => action.payload,
  }
);
