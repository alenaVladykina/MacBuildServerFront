import {ITask} from "../store/taskStore";

const baseUrl = 'http://localhost:3001'

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
  create(title: string) {
    return fetch(`${baseUrl}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({title})
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