import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { FilmsAPI } from "../../api/API";

export const getfilmsThunk = createAsyncThunk(
    'getfilmsThunk',
     async ({language,pageCount}) => {
        const response = await FilmsAPI.getFilms(language, pageCount)

        return response.data.results
     }
)

export const getfilmInfoThunk = createAsyncThunk(
    'getfilmInfoThunk',
    async ({id,language}) => {
        const res = await FilmsAPI.getFilm(id,language)

        return res.data
    }
)

export const getSearch = createAsyncThunk(
    "getSearch",
    async (text) => {
        const res = await FilmsAPI.getSearch(text)
        console.log(text);

        return res.data
    }
)



const filmsSlice = createSlice({
    name : "filmsSlice",
    initialState : {
        films : [],
        pageCount : 1,
        film : {},
        search : [],
        text : ''
    },
    reducers : {
        changePage(state,action) {
            state.pageCount += 1 
        },
        changeText(state,action) {
            state.text = action.payload
        }
    },
    extraReducers : (builder) => {
        builder.addCase(getfilmsThunk.fulfilled, (state,action) => {
            state.films = action.payload
        })
        builder.addCase(getfilmInfoThunk.fulfilled, (state,action) => {
            state.film = action.payload
        })
        builder.addCase(getSearch.fulfilled, (state,action) => {
            state.search = action.payload.results
        })
    }
})

export const {changePage,changeText} = filmsSlice.actions
export default filmsSlice.reducer