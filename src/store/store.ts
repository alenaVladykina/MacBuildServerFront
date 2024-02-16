import {makeObservable, observable} from "mobx";

export interface IStore {
  isLoading: boolean
}

export class Store implements IStore {
  isLoading = true;

  constructor() {
    makeObservable(this, {
      isLoading: observable,
    });
  }
}
