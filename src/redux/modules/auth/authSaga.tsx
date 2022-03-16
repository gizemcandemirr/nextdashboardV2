import {call, put, SagaReturnType, takeLatest} from 'redux-saga/effects'
import { post,endpoints } from '../../../api'
import { authSlice } from './authState';


export function* fetchDataSaga(payload: any) {
		
	
}

function* postAuth(){
	yield takeLatest('auth/postAuthFetch', fetchDataSaga)
}


export default fetchDataSaga