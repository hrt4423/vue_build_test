import * as types from './mutation-types'
// import { Auth, Task } from '../api'

export default {
  changeMessage ({ commit }, message) {
    commit(types.UPDATE_MESSAGE, message)
  }
}
