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
      clean: action
    });
    this.errorMessage = errorMessage
    this.payloadMessage = payloadMessage
    console.log(this)
  }

  fetchError() {
    return this.errorMessage
  }

  fetchPayload() {
    return this.payloadMessage
  }

  clean(error?: string | null, payload?: null | string) {
    if (error === null) {
      this.errorMessage = null;
    } else if (payload === null) {
      this.payloadMessage = null;
    }
  }


}