import {action, makeObservable, observable, remove, runInAction} from "mobx";
import type {IRootStore} from "./index";
import {apiTask} from "../api/api";
import type {ITask, ResFetchTask} from "../commons/types";

export class TasksStore {
  tasks: ITask[] = [];

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      tasks: observable,
      addTask: action,
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
          this.tasks = data.map((el: ResFetchTask): ITask => {
            return ({
              key: el._id,
              create: new Date(el.create),
              update: new Date(el.update),
              deadline: el.deadline,
              title: el.title,
              description: el.description,
              status: el.status,
              priority: el.priority
            })
          })
        })
      }
    } catch (error: any) {
      console.log(error)
    }
  }


  async addTask(task: any) {
    try {
      const res = await apiTask.create(task)
      if (res.ok) {
        const task: ResFetchTask = await res.json();
        runInAction(() => {
          this.tasks.push({
            key: task._id,
            create: new Date(task.create),
            update: new Date(task.update),
            deadline: task.deadline,
            title: task.title,
            description: task.description,
            status: task.status,
            priority: task.priority
          })
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