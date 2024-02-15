import {createContext} from "react";
import {UserStore} from "./userStore";
import {TasksStore} from "./tasksStore";
import {TaskStore} from "./taskStore";
import {AppStore} from "./appStore";
import {AppStoreType} from "../commons/types";


export interface IRootStore {
  tasksStore: TasksStore
}

class RootStore implements IRootStore {
  tasksStore: TasksStore;
  userStore: UserStore;
  taskStore: TaskStore;
  appStore: AppStoreType;

  constructor() {
    this.tasksStore = new TasksStore(this);
    this.userStore = new UserStore(this);
    this.taskStore = new TaskStore();
    this.appStore = new AppStore();
  }
}

export const rootStore = new RootStore();
export const StoreContext = createContext(rootStore);
