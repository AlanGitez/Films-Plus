import { createReducer, createAction } from "@reduxjs/toolkit";

export const toggleShowDetail = createAction("SHOW_DETAIL");

export const showDetailReducer = createReducer(false,
  {
    [toggleShowDetail]: (state, action) => !state,
  }
);
