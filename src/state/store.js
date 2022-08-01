import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import { currentFilmReducer } from "./currentFilm";
// import { currentListFilmsReducer } from "./currentListFilms";
// import { favoriteListReducer } from "./favoriteList";
// import { popularMoviesReducer } from "./popularsMovies";
import { userReducer } from "./User/user";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    // popularMovies: popularMoviesReducer,
    // currentFilm: currentFilmReducer,
    // currentListFilms: currentListFilmsReducer,
    // favoriteList: favoriteListReducer
  },
});

export default store;
