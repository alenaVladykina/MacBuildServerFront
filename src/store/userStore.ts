import {IRootStore} from "./index";
import {action, makeObservable, observable, onReactionError, runInAction} from "mobx";
import {apiAuth} from "../api/api";
import {IUserType} from "../commons/types";
import {AppStore} from "./appStore";


export class UserStore implements IUserType {
  id = ""
  email = ""
  isLogin = false

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      id: observable,
      email: observable,
      isLogin: observable,
      register: action,
      login: action,
      authMe: action
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
      console.log(error)
    }
    onReactionError((error) => {
      console.log(error)
    });

  }

  async login(email: string, password: string) {
    try {
      const res = await apiAuth.login(email, password)
      let response = await res.json();
      if (res.ok) {
        runInAction(() => {
          this.isLogin = response.isLogin
          this.email = response.email
          this.id = response.userId
        })
      } else {
        console.log(response)
        new AppStore(response.errorText)
      }
    } catch (error: any) {

    }
  }

  async authMe() {
    try {
      const res = await apiAuth.getUser()
      let response = await res.json();
      if (res.ok) {
        runInAction(() => {
          this.isLogin = response.isLogin
        })
      } else {
        new AppStore(response.errorText)
      }
    } catch (error: any) {
      // new AppStore(error)
    }


  }
};