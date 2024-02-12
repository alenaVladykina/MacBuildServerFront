import {createContext} from "react";
import {UserStore} from "./userStore";
import type {IUserType} from "./userStore";
import {TasksStore} from "./tasksStore";
import {TaskStore} from "./taskStore";


export interface IRootStore {
  tasksStore: TasksStore
}

class RootStore implements IRootStore {
  tasksStore: TasksStore;
  userStore: IUserType;
  taskStore: TaskStore;

  constructor() {
    this.tasksStore = new TasksStore(this);
    this.userStore = new UserStore(this);
    this.taskStore = new TaskStore();
  }
}

export const rootStore = new RootStore();
export const StoreContext = createContext(rootStore);
