import { createReducer, createAction } from "@reduxjs/toolkit";

export const searching = createAction("SET_SEARCHING");

export const searchingReducer = createReducer(false,
  {
    [searching]: (state, action) => !state,
  }
);
