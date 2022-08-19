import User from "../../services/User";

import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";


export const login = createAsyncThunk("SEND_LOGIN_REQUEST", async (body) => {
  const {error, data} = await User.loginRequest(body);
  if(!error) return data; 
});

export const userReducer = createReducer({},
  {
    [login.fulfilled]: (state, action) => action.payload,
  }
);
