import {action, makeObservable, observable} from "mobx";


export class AppStore {
  errorMessage: null | string = null
  payloadMessage: null | string = null

  constructor(errorMessage?: string, payloadMessage?: string) {
    makeObservable(this, {
      errorMessage: observable,
      payloadMessage: observable,
      fetchError: action,
      fetchPayload: action,
    });
    this.errorMessage = errorMessage;
    this.payloadMessage = payloadMessage;
  }

  fetchError() {
    return this.errorMessage;
  }

  fetchPayload() {
    return this.payloadMessage;
  }
}
