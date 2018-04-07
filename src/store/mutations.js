import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  },
  [types.SET_PLAYING_STATE](state, flag) {
    state.playing = flag
  },
  [types.SET_FULL_SCREEN_STATE](state, flag) {
    state.fullScreen = flag
  },
  [types.SET_PLAY_LIST_STATE](state, list) {
    state.playList = list
  },
  [types.SET_SEQUENCE_LIST_STATE](state, list) {
    state.sequenceList = list
  },
  [types.SET_PLAY_MODE_STATE](state, mode) {
    state.mode = mode
  },
  [types.SET_CURRENT_INDEX_STATE](state, index) {
    state.currentIndex = index
  }
}


export default mutations
