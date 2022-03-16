import { createSlice } from "@reduxjs/toolkit";
import { post, get, endpoints } from "../../api";
import { call, put, SagaReturnType, takeLatest } from "redux-saga/effects";
import jwt from 'jsonwebtoken'




interface LoginState {
	email: string | null;
	password: string | null;
	result: string;
	error: any;
	data: any;
	isLoading: boolean;
	isAuth:boolean;
}
const initialState: LoginState = {
	email: null,
	password: null,
	result: "",
	error: null,
	data: null,
	isAuth:false,
	isLoading:false,
};


const loginSlice = createSlice({

	name: "login",
	initialState,
	reducers: {
		fetch: (state, payload) => {
			state.result = "loading";
			state.isLoading=true;
		},
		fetchSuccess: (state, payload: any) => {
			state.result = "yüklendi";
			state.isAuth=true;
			state.isLoading=false;
			state.data = payload;
			if(200){
			const accessJwt=	payload.payload.jwtToken;
			const refreshJWT= payload.payload.refreshToken;
			  sessionStorage.setItem("accessJWT", accessJwt)
				localStorage.setItem("crmSite", JSON.stringify({refreshJWT: refreshJWT}))	 
		 }
		}, 
		fetchFail: (state, payload) => {
			state.result = "hata";
			state.isLoading=false;
			state.error = payload;
		},
	},
});

export function* fetchDataSaga(payload: any) {
	try {
		const result: SagaReturnType<typeof post> = yield call(() =>
			post(endpoints.login.login, payload.payload)
		);
		yield put(loginSlice.actions.fetchSuccess(result));
	} catch (e) {
		yield put(loginSlice.actions.fetchFail((<Error>e).message));
	}
}

export function* saga() {
	yield takeLatest(loginSlice.actions.fetch, fetchDataSaga);
}

export default { loginSlice, saga };
export const { actions, reducer } = loginSlice;
