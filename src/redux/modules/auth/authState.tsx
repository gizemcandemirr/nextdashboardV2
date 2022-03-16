import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({

	name:'auth',
  initialState:{
		data:[],
		isLoading:false
	},
	reducers:{
		postAuthFetch:(state) => {
			state.isLoading= true;	
		},
		postAuthSuccess:(state,action) => {
			state.data= action.payload;
			state.isLoading= false;	
		},
		postAuthFailure:(state) => {
			state.isLoading= false;	
		},
	}
});

export const {postAuthFetch,postAuthSuccess,postAuthFailure } = authSlice.actions;

export default authSlice.reducer;