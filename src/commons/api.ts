import {UserLoginType, UserRegistrationType} from "./types";

//const url = 'http://localhost:3001/api/'
// Proxy to http://localhost:3001
export const baseUrl = '/api';

export const authApi = {

  registration: (user: UserRegistrationType) => {
    const response = fetch(`${baseUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    });
    return response
  },
  login: (user: UserLoginType) => {
    const response = fetch(`${baseUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    });
    return response
  },
  auth: () => {
    const response = fetch(`${baseUrl}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({})
    });
    return response
  },
}