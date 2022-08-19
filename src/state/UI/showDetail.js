import User from "../../services/User";

import { createAsyncThunk, createReducer, createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const toggleShowDetail = createAction("SHOW_DETAIL");

export const showDetailReducer = createReducer(false,
  {
    [toggleShowDetail]: (state, action) => !state,
  }
);
