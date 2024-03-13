import {Dispatch} from "react";
import {authApi} from "../commons/api";
import {UserLoginType, UserRegistrationType} from "../commons/types";

export type InitialStateBasketType = {
  isLogin: null | string,
  error: null | string,
  isLoading: boolean,
  payloadMessage: null | string,
}

const InitialState: InitialStateBasketType = {
  isLogin: null,
  error: null,
  isLoading: false,
  payloadMessage: null,
}

export type ActionsType = ReturnType<typeof LoginAC>
  | ReturnType<typeof ErrorAC>
  | ReturnType<typeof LoadingAC>
  | ReturnType<typeof MessageAC>

export const appReduser = (state: InitialStateBasketType = InitialState, action: any): InitialStateBasketType => {
  switch (action.type) {
    case "APP/REGISTRATION" : {
      const newState = {...state}
      newState.isLogin = action.payload.isLogin
      return newState
    }

    case "APP/ERROR" : {
      const newState = {...state}
      newState.error = action.payload.error
      return newState
    }

    case "APP/MESSAGE" : {
      const newState = {...state}
      newState.payloadMessage = action.payload.message
      return newState
    }

    case "APP/LOADING" : {
      const newState = {...state}
      newState.isLoading = action.payload.isLoading
      return newState
    }


    default: {
      return {...state}
    }
  }
}


export const LoginAC = (isLogin: boolean) => ({type: 'APP/REGISTRATION', payload: {isLogin}} as const)
export const ErrorAC = (error: string | null) => ({type: 'APP/ERROR', payload: {error}} as const)
export const LoadingAC = (isLoading: boolean) => ({type: 'APP/LOADING', payload: {isLoading}} as const)
export const MessageAC = (message: boolean) => ({type: 'APP/MESSAGE', payload: {message}} as const)


export const registrationTC = (user: UserRegistrationType) => (dispatch: Dispatch<ActionsType>) => {
  dispatch(LoadingAC(true))
  const response = authApi.registration(user);
  response.then(async (res) => {
    const date = await res.json();
    if (res.ok) {
      dispatch(LoginAC(true))
      dispatch(MessageAC(date.status))
    } else {
      const error = date.errorText
      dispatch(ErrorAC(error))
    }
  })
  response.finally(() => {
    dispatch(LoadingAC(false))
  })
}

export const loginTC = (user: UserLoginType) => (dispatch: Dispatch<ActionsType>) => {
  dispatch(LoadingAC(true))
  const response = authApi.login(user);
  response.then(async (res) => {
    const date = await res.json();
    if (res.ok) {
      dispatch(LoginAC(date.isLogin))
      dispatch(LoadingAC(false))
    } else {
      const error = date.errorText
      dispatch(ErrorAC(error))
    }
  })
  response.finally(() => {
    dispatch(LoadingAC(false))
  })
}


export const authTC = () => (dispatch: Dispatch<ActionsType>) => {
  const response = authApi.auth();
  dispatch(LoadingAC(true))
  response.then(async (res) => {
    const date = await res.json();
    if (res.ok) {
      dispatch(LoginAC(date.isLogin))
    } else {
      const error = date.errorText
      dispatch(ErrorAC(error))
    }
  })
  // response.finally(() => {
  //   dispatch(LoadingAC(false))
  // })
}

