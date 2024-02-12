import {IRootStore} from "./index";
import {makeObservable, observable} from "mobx";

export interface IUserType {
  id: string
  name: string
  email: string
  isLogin: boolean
}

export class UserStore implements IUserType {
  id = ""
  name = ""
  email = ""
  isLogin = false

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      id: observable,
      name: observable,
      email: observable,
      isLogin: observable
    });
  }
}