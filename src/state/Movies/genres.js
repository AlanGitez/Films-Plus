import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { Movies } from "../../services";

export const getGenres = createAsyncThunk("GET_GENRES", async () => {
    
    const {error, data} = await Movies.getGenres();
    if(!error) return data?.genres;
    
});

export const getGenresReducer = createReducer([], {
    [getGenres.fulfilled]:(state, action) => action.payload,
});