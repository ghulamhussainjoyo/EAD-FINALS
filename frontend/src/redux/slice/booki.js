import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiUrl } from '../../service/http';

const registerInitState = {
	success: false,
	loading: false,
	error: ''
};

export const createBookmark = createAsyncThunk('booki/create', (fromData) => {
    console.log(fromData)
	return axios.post(`${apiUrl}/bookmark/create`, fromData).then((responce) => responce.data).catch(err=>err.data);
});



 const createBookie = createSlice({
	name: 'bookieCreate',
	initialState: registerInitState,
	extraReducers: (builder) => {
		builder.addCase(createBookmark.pending, (state) => {
			state.loading = true;
			state.success = false;
		});

		builder.addCase(createBookmark.fulfilled, (state, action) => {
		
            state.success = true;
            state.loading = false;
		});

        builder.addCase(createBookmark.rejected,(state,action)=>{
            
            console.log(action.error)
            state.loading = false
            state.success = false
            state.error = action.error.message
        })
	}
});



const bookmarkInitState = {
	success: false,
	loading: false,
    bookmarks:[],
	error: ''
};

export const getAllBookmark = createAsyncThunk('booki/all', () => {
    // console.log(fromData)
	return axios.get(`${apiUrl}/bookmarks`).then((responce) => responce.data).catch(err=>err.data);
});

const getAllBookis = createSlice({
	name: 'bookieCreate',
	initialState: bookmarkInitState,
	extraReducers: (builder) => {
		builder.addCase(getAllBookmark.pending, (state) => {
			state.loading = true;
			state.success = false;
		});

		builder.addCase(getAllBookmark.fulfilled, (state, action) => {

            console.log("=>",action.payload);
            state.success = action.payload.success;
            state.loading = false;
            state.bookmarks = action.payload.bookmark
		});

        builder.addCase(getAllBookmark.rejected,(state,action)=>{
            
            console.log(action.error)
            state.loading = false
            state.success = false
            state.error = action.error.message
        })
	}
});

export const bookiCreateReducer =   createBookie.reducer
export const bookiAllReducer =   getAllBookis.reducer