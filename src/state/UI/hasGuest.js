import { createReducer, createAction } from "@reduxjs/toolkit";

export const hasGuest = createAction("SHOW_DETAIL");

export const hasGuestReducer = createReducer(false,
  {
    [hasGuest]: (state, action) => true,
  }
);
