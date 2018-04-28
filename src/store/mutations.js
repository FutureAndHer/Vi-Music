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
  [types.SET_PLAY_MODE_STATE](state, playMode) {
    state.playMode = playMode
  },
  [types.SET_CURRENT_INDEX_STATE](state, index) {
    state.currentIndex = index
  },
  [types.SET_DISC_STATE](state, disc) {
    state.disc = disc
  },
  [types.SET_TOP_LIST_STATE](state, topList) {
    state.topList = topList
  },
  [types.SET_SEARCH_HISTORY_STATE](state, searchHistory) {
    state.searchHistory = searchHistory
  },
  [types.SET_PLAY_HISTORY_STATE](state, playHistory) {
    state.playHistory = playHistory
  }
}


export default mutations
