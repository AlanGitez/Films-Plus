import User from "../../services/User";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";


export const login = createAsyncThunk("SEND_LOGIN_REQUEST", async (body) => {
  const {error, data} = await User.loginRequest(body);
  if(!error) return data.data; 
});

export const userReducer = createReducer({},
  {
    [login.fulfilled]: (state, action) => action.payload,
  }
);
