import {createSlice} from "@reduxjs/toolkit";


interface ProductState {
	data:string[];
	isLoading:boolean;
	error: any;

}
const initialState: ProductState = {
  data: [],
 isLoading:false,
 error:null

};

const productSlice = createSlice({

	name: "product",
	initialState,
	reducers: {
		fetch: (state, payload) => {
			state.isLoading=true;
		},
		fetchSuccess: (state, payload: any) => {
			state.isLoading=false;
			state.data = payload;
		}, 
		fetchFail: (state, payload) => {
			state.isLoading=false;
			state.error = payload;
		},
	},
});

export default {productSlice};
export const { actions, reducer } = productSlice;
