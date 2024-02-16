import {IRootStore} from "./index";
import {action, makeObservable, observable, runInAction} from "mobx";
import {apiAuth} from "../api/api";
import {IUserType} from "../commons/types";
import {Store} from "./store";


export class UserStore extends Store implements IUserType {
  id = ""
  email = ""
  isLogin = false
  error = ''
  rootStore;

  constructor(rootStore: IRootStore) {
    super();

    this.rootStore = rootStore;

    makeObservable(this, {
      error: observable,
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
       await apiAuth.registration(email, password, confirmPassword)
    } catch (e) {}
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
      }
    } catch (e) {
    }
  }

  async authMe() {
    try {
      this.isLoading = true;
      const res = await apiAuth.getUser();
      let response = await res.json();
      if (res.ok) {
        runInAction(() => {
          this.isLogin = response.isLogin;
          this.email = response.email;
          this.isLoading = false;
        })
      }
    } catch (e) {}
  }
}