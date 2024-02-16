import {createContext} from "react";
import {UserStore} from "./userStore";
import {TasksStore} from "./tasksStore";
import {TaskStore} from "./taskStore";
import {AppStore} from "./appStore";


export interface IRootStore {
  tasksStore: TasksStore
  appStore: AppStore
}

class RootStore implements IRootStore {
  tasksStore: TasksStore;
  userStore: UserStore;
  taskStore: TaskStore;
  appStore: AppStore;

  constructor() {
    this.tasksStore = new TasksStore(this);
    this.userStore = new UserStore(this);
    this.taskStore = new TaskStore();
    this.appStore = new AppStore();
  }
}

export const rootStore = new RootStore();
export const StoreContext = createContext(rootStore);
