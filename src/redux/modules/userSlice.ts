import { createSlice } from "@reduxjs/toolkit";
import { get, endpoints } from "../../api";

import {
	takeEvery,
	call,
	put,
	SagaReturnType,
	takeLatest,
} from "redux-saga/effects";

const initialState = {
	user: {},
	roles: {},
	permissions: {},
	isLoading: false,
	error: "",
};
const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {

		getUserPending: (state) => {
			state.isLoading = true;
		},
		getUserSuccess: (state, { payload }) => {
			(state.isLoading = false), (state.user = payload);
			state.roles = payload.roles;
			state.permissions = payload.permissions;
			state.error = "";
		},
		getUserRoles: (state, { payload }) => {
			(state.isLoading = false), (state.roles = payload);
			state.error = "";
		},
		getUserPermissions: (state, { payload }) => {
			(state.isLoading = false), (state.permissions = payload);
			state.error = "";
		},
		getUserFail: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		},
	},
});

export function* fetchUserSaga(payload: any) {
	try {
		const result: SagaReturnType<typeof get> = yield call(() => get(payload));
		yield put(userSlice.actions.getUserSuccess(result));
	} catch (e) {
		yield put(userSlice.actions.getUserFail((<Error>e).message));
	}
}

export function* saga() {
	yield takeEvery(userSlice.actions.getUserPending, fetchUserSaga);
}
export default { userSlice, saga };
export const { actions, reducer } = userSlice;
