import { SET_USER_INFO, CLEAR_USER_INFO } from './mutationTypes'
export default {
  [SET_USER_INFO] (state, info) {
    state.userInfo = info
  },
  [CLEAR_USER_INFO] (state) {
    state.userInfo = null
  }
}
