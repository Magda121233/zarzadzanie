import { extendObservable } from 'mobx'

class UseStore {
    constructor() {
        extendObservable(this, {
            loading: true,
            isLoggedIn: false,
            username: ''
        })
    }
}

export default new UseStore();