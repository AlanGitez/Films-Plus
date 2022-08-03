import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { popularMoviesReducer } from "./Movies/popular";
import { singleFilmReducer } from "./Movies/selectedFilm";
// import { currentFilmReducer } from "./currentFilm";
// import { currentListFilmsReducer } from "./currentListFilms";
// import { favoriteListReducer } from "./favoriteList";
// import { popularMoviesReducer } from "./popularsMovies";
import { userReducer } from "./User/User";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    popularMovies: popularMoviesReducer, 
    singleFilm:singleFilmReducer,
    // currentFilm: currentFilmReducer,
    // currentListFilms: currentListFilmsReducer,
    // favoriteList: favoriteListReducer
  },
});

export default store;
