import { configureStore,combineReducers } from '@reduxjs/toolkit'
import {bookiCreateReducer,bookiAllReducer } from './slice/booki'


export default configureStore({
    reducer:{
        createBook:bookiCreateReducer,
        allBookmark:bookiAllReducer
    }
})