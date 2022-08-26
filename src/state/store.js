import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { getGenresReducer } from "./Movies/genres";
import { popularMoviesReducer } from "./Movies/popular";
import { singleFilmReducer } from "./Movies/selectedFilm";
import { hasGuestReducer } from "./UI/hasGuest";
import { searchingReducer } from "./UI/searching";
import { showDetailReducer } from "./UI/showDetail";
// import { currentFilmReducer } from "./currentFilm";
// import { currentListFilmsReducer } from "./currentListFilms";
// import { favoriteListReducer } from "./favoriteList";
// import { popularMoviesReducer } from "./popularsMovies";
import { userReducer } from "./User/User";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    genres: getGenresReducer,
    popularMovies: popularMoviesReducer, 
    singleFilm: singleFilmReducer,
    showDetail: showDetailReducer,
    searching: searchingReducer,
    guest: hasGuestReducer,
    // currentFilm: currentFilmReducer,
    // currentListFilms: currentListFilmsReducer,
    // favoriteList: favoriteListReducer
  },
});

export default store;
