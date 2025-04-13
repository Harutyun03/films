import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { FilmsAPI } from "../../api/API";

export const getGeneres = createAsyncThunk(
    'getGeneres',
    async ({language}) => {
        const res = await FilmsAPI.getGeners(language)

        return res.data.genres
    }
)


export const getGenresMoviesThunk = createAsyncThunk(
    "getGenresMoviesThunk",
    async ({language,genreId,page}) => {
        const res = await FilmsAPI.getMovies(language,genreId,page)
        return res.data.results
    }
)


const generSlice = createSlice({
    name : 'generSlice ',
    initialState : {
        generes : [],
        isFetching : false,
        generFilm : []
    },
    reducers : {
    },
    extraReducers : (builder) => {
        builder.addCase(getGeneres.pending, (state,action) => {
            state.isFetching = true
        })
        builder.addCase(getGeneres.fulfilled, (state,action) => {
            state.isFetching = false
            state.generes = action.payload
        })
        builder.addCase(getGenresMoviesThunk.fulfilled, (state,action) => {
            state.loading = false 
            if (action.payload.page === 1) {
                state.generFilm = action.payload;
            } else {
                state.generFilm = [...state.generFilm, ...action.payload];
            }
        })
    }
})

export default generSlice.reducer