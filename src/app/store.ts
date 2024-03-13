import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import {thunk, ThunkAction, ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {appReduser} from "./appReduser";


const rootReducer = combineReducers({
  app: appReduser,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
//export type  AppActionsType = BasketActionType | ProductsActionsType
//export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>
// @ts-ignore
window.store = store;