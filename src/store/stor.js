import {configureStore} from '@reduxjs/toolkit'
import generSlice from './slices/generalSlice'
import globalSlice from './slices/globalSlice'

const store = configureStore({
    reducer : {
        generesData : generSlice,
        globalData : globalSlice
    }
})

export default store