import { makeAutoObservable } from "mobx"


class AppStore {

  userInfo: any = {}
  commitInfo: any = []

  constructor() {
    makeAutoObservable(this)
  }

  setUserInfo = (userData: any) => (this.userInfo = userData)
  setCommitInfo = (commitData: any) => (this.commitInfo = commitData)
}

export default new AppStore()