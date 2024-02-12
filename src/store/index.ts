import {createContext} from "react";
import {TaskStore} from "./taskStore";
import {UserStore} from "./userStore";
import type {IUserType} from "./userStore";


export interface IRootStore {
  tasksStore: TaskStore
}

class RootStore implements IRootStore {
  tasksStore: TaskStore;
  userStore: IUserType;

  constructor() {
    this.tasksStore = new TaskStore(this);
    this.userStore = new UserStore(this)
  }
}

export const rootStore = new RootStore();
export const StoreContext = createContext(rootStore);
