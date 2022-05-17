import type {Store as rawStore} from 'redux';
import {useSelector as rawUseSelector,TypedUseSelectorHook,useDispatch,
} from "react-redux";
import { 	Action,combineReducers,configureStore,ThunkAction,} from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import createSagaMiddleware, {Task} from 'redux-saga';
import { all } from "redux-saga/effects";
import logger from 'redux-logger'
import login, {saga as loginSaga} from "./modules/loginSlice";
import products from "./modules/productSlice";


export const rootReducer = combineReducers({
	[login.loginSlice.name]: login.loginSlice.reducer,

	//...
})

function* rootSaga() {
  yield all([loginSaga()]) 
}

export interface SagaStore extends rawStore {
  sagaTask?: Task;
}

export const makeStore = () => {
	const sagaMiddleware = createSagaMiddleware();

	const store = configureStore({
		reducer: rootReducer,
      
		// middleware: [sagaMiddleware]
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({thunk: false}).concat(sagaMiddleware).concat(logger),
		devTools: true
	});

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store
}


type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
//export type RootState = ReturnType<typeof rootReducer>
export type RootState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
export const wrapper = createWrapper<rawStore<RootState>>(makeStore, { debug: true })