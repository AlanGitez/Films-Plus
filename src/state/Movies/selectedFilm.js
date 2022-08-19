const { createReducer, createAction } = require("@reduxjs/toolkit");

export const getSingleFilm = createAction("GET-SINGLE-FILM")

export const singleFilmReducer = createReducer({}, {
    [getSingleFilm]:(state,action) => action.payload
});

