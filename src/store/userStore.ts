import {IRootStore} from "./index";
import {action, makeObservable, observable, runInAction} from "mobx";
import {apiAuth} from "../api/api";
import {IUserType} from "../commons/types";



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
      isLogin: observable,
      register: action,
      login:action
    });
  }

  async register(email: string, password: string, confirmPassword: string) {
    try {
      const res = await apiAuth.registration(email, password, confirmPassword)
      if (res.ok) {
        runInAction(() => {
          console.log(res.ok)
        })
      }
    } catch (error: any) {
      console.log('Error')
    }
  }

  async login(email: string, password: string,) {
    try {
      const res = await apiAuth.login(email, password)
      if (res.ok) {
        runInAction(() => {
          console.log(res.ok)
        })
      }
    } catch (error: any) {
      console.log('Error')
    }
  }
}