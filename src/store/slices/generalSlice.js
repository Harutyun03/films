import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { FilmsAPI } from "../../api/API";

export const getGeneres = createAsyncThunk(
    'getGeneres',
    async ({language}) => {
        const res = await FilmsAPI.getGeners(language)

        return res.data.genres
    }
)


const generSlice = createSlice({
    name : 'generSlice ',
    initialState : {
        generes : [],
        isFetching : false
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
    }
})

export default generSlice.reducer