import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { Movies } from "../../services";

export const getPopularMovies = createAsyncThunk("GET_POPULAR", async () => {
    
    const {error, data} = await Movies.popular();
    if(!error) return data;
    
});

export const popularMoviesReducer = createReducer({}, {
    [getPopularMovies.fulfilled]:(state, action) => action.payload
});