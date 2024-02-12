import {PriorityTaskType, StatusTaskType} from "../types";
import {makeObservable, observable, runInAction} from "mobx";
import {apiTask} from "../api/api";


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

export class Task implements ITask {
  key = ''
  create: Date = new Date()
  update: Date = new Date()
  deadline: Date = new Date()
  title = ''
  description = ''
  status: StatusTaskType = 'Planned'
  priority: PriorityTaskType = "Low"

  constructor(key: string, title: string, create: Date) {
    makeObservable(this, {
      key: observable,
      create: observable,
      update: observable,
      deadline: observable,
      title: observable,
      description: observable,
      status: observable,
      priority: observable
    });

    this.key = key;
    this.title = title;
    this.create = create;
    this.update = create;
  }

  async fetch(task: any) {
    try {
      const res = await apiTask.update(task)
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


}