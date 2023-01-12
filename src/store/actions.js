import * as types from './mutation-types'
import { Auth } from '../api'

export default {
  changeMessage ({ commit }, message) {
    commit(types.UPDATE_MESSAGE, message)
  },

  login: ({ commit }, authInfo) => {
    return Auth.login(authInfo)
      .then(token => { commit(types.AUTH_LOGIN, token) })
      .catch(err => { throw err })
  }
}
