import {takeLatest,put, fork, call} from "redux-saga/effects"
import {fetch} from "./modules/productSlice"
import {  get, endpoints } from "../api";



function* onLoadProductsAsync(){

    try {
				const response = yield call(() =>	{return get(endpoints.products.products)});
        
        if(response.status=== 200){
            yield put(fetch({...response.data}))
        }
    } catch (error) {
        console.log(error);
    }
}


function* onLoadProducts() {
    yield takeLatest(fetch.type, onLoadProductsAsync)
}

export const productSagas = [fork(onLoadProducts)];