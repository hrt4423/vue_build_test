import * as types from './mutation-types'

export default {
  [types.UPDATE_MESSAGE] (state, message) {
    state.message = message
  },

  [types.AUTH_LOGIN] (state, payload) {
    state.auth.token = payload
  }
}
