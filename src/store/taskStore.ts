import {ITask, PriorityTaskType, ResFetchTask, StatusTaskType} from "../commons/types";
import {action, makeObservable, observable, runInAction} from "mobx";
import {apiTask} from "../api/api";


export class TaskStore implements ITask {
  key = ''
  create: Date = new Date()
  update: Date = new Date()
  deadline: string = ''
  title = ''
  description = ''
  status: StatusTaskType = 'In Progress'
  priority: PriorityTaskType = 'High'

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

    if (!taskId) {
      runInAction(() => {
        this.key = ''
        this.create = new Date()
        this.update = new Date()
        this.deadline = ''
        this.title = ''
        this.description = ''
        this.status = 'In Progress'
        this.priority = 'High'
      })
    }

    try {
      const res = await apiTask.fetchTask(taskId)
      if (res.ok) {
        const task: ResFetchTask = await res.json();
        runInAction(() => {
          this.key = task._id
          this.create = new Date(task.create)
          this.update = new Date(task.update)
          this.deadline = task.deadline
          this.title = task.title
          this.description = task.description
          this.status = task.status
          this.priority = task.priority
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