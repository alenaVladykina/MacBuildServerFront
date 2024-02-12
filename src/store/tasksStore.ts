import {action, makeObservable, observable, remove, runInAction} from "mobx";
import type {IRootStore} from "./index";
import type {ITask} from "./taskStore";
import {apiTask} from "../api/api";

export class TasksStore {
  tasks: ITask[] = [];

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      tasks: observable,
      addTask: action.bound,
      remove: action,
      update: action,
      fetch: action
    });
  }

  async fetch() {
    try {
      const res = await apiTask.fetch()
      if (res.ok) {
        const data = await res.json();
        runInAction(() => {
          this.tasks = data
        })
      }
    } catch (error: any) {
      console.log(error)
    }
  }


  async addTask(title: string) {
    try {
      const res = await apiTask.create(title)
      if (res.ok) {
        const task = await res.json();
        runInAction(() => {
          this.tasks.push(task)
        })
      }
    } catch (error: any) {
      console.log('Error')
    }
  }

  async remove(key: string) {
    try {
      const res = await apiTask.remove(key)
      if (res.ok) {
        runInAction(() => {
          const pos = this.tasks.findIndex(task => task.key === key);
          pos > -1 && remove(this.tasks, pos.toString());
        })
      }
    } catch (error: any) {
      console.log('Error')
    }
  }

  async update(task: any) {
    // try {
    //   const res = await apiTask.update(task)
    //   if (res.ok) {
    //     runInAction(() => {
    //       const pos = this.tasks.findIndex(task => task.key === key);
    //       pos > -1 && remove(this.tasks, pos.toString());
    //     })
    //   }
    // } catch (error: any) {
    //   console.log('Error')
    // }
  }
}