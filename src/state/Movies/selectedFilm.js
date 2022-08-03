const { createAsyncThunk, createReducer, createAction } = require("@reduxjs/toolkit");
const axios = require("axios");

// export const getSingleFilm = createAsyncThunk("GET-SINGLE-FILM", (id, thunkAPI) => {

//     return (
//         axios.get(`/api/movies/${id}`)
//         .then((res) => res.data)
//     );
// });
export const getSingleFilm = createAction("GET-SINGLE-FILM")


export const singleFilmReducer = createReducer({}, {
    [getSingleFilm]:(state,action) => action.payload
});

