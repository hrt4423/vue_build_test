import * as types from './mutation-types'

export default {
  changeMessage ({ commit }, message) {
    commit(types.UPDATE_MESSAGE, message)
  }
}
