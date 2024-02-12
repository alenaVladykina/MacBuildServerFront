import {PriorityTaskType, StatusTaskType} from "../types";
import {action, makeObservable, observable, runInAction} from "mobx";
import {apiTask} from "../api/api";
import {IRootStore} from "./index";


export interface ITask {
  key: string
  create: Date
  update: Date
  deadline: Date
  title: string
  description: string
  status: StatusTaskType
  priority: PriorityTaskType
}

export class TaskStore implements ITask {
  key = ''
  create: Date = new Date()
  update: Date = new Date()
  deadline: Date = new Date()
  title = ''
  description = ''
  status: StatusTaskType = 'Planned'
  priority: PriorityTaskType = 'Low'

  constructor() {
    makeObservable(this, {
      fetch: action.bound,
      edit: action.bound,
      key: observable,
      create: observable,
      update: observable,
      deadline: observable,
      title: observable,
      description: observable,
      status: observable,
      priority: observable,
    });
  }

  async fetch(taskId: string) {
    try {
      const res = await apiTask.fetchTask(taskId)
      if (res.ok) {
        const data = await res.json();
        runInAction(() => {
          this.key = data.key
          this.create = data.create
          this.update = data.update
          this.deadline = data.deadline
          this.title = data.title
          this.description = data.description
          this.status = data.status
          this.priority = data.priority
        })
      }
    } catch (error: any) {
      console.log(error)
    }
  }

  async edit(task: ITask) {
    try {
      await apiTask.updateTask(task)
    } catch (error: any) {
      console.log(error)
    }
  }
}