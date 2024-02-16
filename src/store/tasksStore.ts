import {action, makeObservable, observable, runInAction} from "mobx";
import type {IRootStore} from "./index";
import {apiTask} from "../api/api";
import type {ITask, ResFetchTask} from "../commons/types";
import {Store} from "./store";


export class TasksStore extends Store {
  tasks: ITask[] = [];

  constructor(rootStore: IRootStore) {
    super();
    makeObservable(this, {
      tasks: observable,
      addTask: action,
      remove: action,
      fetch: action
    });
  }

  async fetch() {
    this.isLoading = true;
    try {
      const res = await apiTask.fetch();
      if (res.ok) {
        const data = await res.json();
        runInAction(() => {
          this.tasks = data.map((el: ResFetchTask): ITask => {
            return ({
              key: el._id,
              create: el.create,
              update: el.update,
              deadline: el.deadline,
              title: el.title,
              description: el.description,
              status: el.status,
              priority: el.priority,
              children: el.children
            })
          });
          this.isLoading = false;
        })
      }
    } catch (e) {}
  }


  async addTask(task: any) {
    try {
      const res = await apiTask.create(task)
      if (res.ok) {
        const task: ResFetchTask = await res.json();
        runInAction(() => {
          this.tasks.push({
            key: task._id,
            create: task.create,
            update: task.update,
            deadline: task.deadline,
            title: task.title,
            description: task.description,
            status: task.status,
            priority: task.priority
          })
        })
      }
    } catch (e) {}
  }

  async remove(key: string) {
    try {
      const res = await apiTask.remove(key);
      if (res.ok) {
        runInAction(() => {
          this.tasks = this.tasks.filter((el) => el.key !== key);
        })
      }
    } catch (e) {}
  }
}
