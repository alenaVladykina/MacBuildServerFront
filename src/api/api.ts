import {ITask} from "../commons/types";


const baseUrl = '/api';
//'http://localhost:3001'

export const apiTask = {
  fetch() {
    return fetch(`${baseUrl}/tasks`)
  },
  fetchTask(taskId: string) {
    return fetch(`${baseUrl}/task/${taskId}`)
  },
  updateTask(task: ITask) {
    return fetch(`${baseUrl}/tasks`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({task})
    })
  },
  create(task: any) {
    return fetch(`${baseUrl}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({task})
    })
  },
  remove(key: string) {
    return fetch(`${baseUrl}/tasks`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({key})
    })
  },
  update(task: any) {
    return fetch(`${baseUrl}/tasks`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({task})
    })
  }
}

export const apiAuth = {
  registration(email: string, password: string, confirmPassword: string) {
    return fetch(`${baseUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({email, password, confirmPassword})
    })
  },
  login(email: string, password: string) {
    return fetch(`${baseUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({email, password})
    })
  },
  getUser() {
    return fetch(`${baseUrl}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({})
    })
  }
}