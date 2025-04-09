import {configureStore} from '@reduxjs/toolkit'
import generSlice from './slices/generalSlice'
import globalSlice from './slices/globalSlice'
import  filmsSlice from './slices/filmsSlice'

const store = configureStore({
    reducer : {
        generesData : generSlice,
        globalData : globalSlice,
        filmsData : filmsSlice
    }
})

export default store