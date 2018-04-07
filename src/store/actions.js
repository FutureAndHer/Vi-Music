import * as types from './mutation-types'
export const selectPlay = function ({commit, state}, {list, index}) {
  commit(types.SET_PLAY_LIST_STATE, list)
  commit(types.SET_SEQUENCE_LIST_STATE, list)
  commit(types.SET_CURRENT_INDEX_STATE, index)
  commit(types.SET_FULL_SCREEN_STATE, true)
  commit(types.SET_PLAYING_STATE, true)
}

