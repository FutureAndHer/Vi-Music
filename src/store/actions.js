import * as types from './mutation-types'
import {mode} from 'common/js/config'
import {shuffle} from 'common/js/util'

export const selectPlay = function ({commit, state}, {list, index}) {
  commit(types.SET_SEQUENCE_LIST_STATE, list)

  if (state.mode === mode.random) {
    let randomList = shuffle(list)
    commit(types.SET_PLAY_LIST_STATE, randomList)
    index = findIndex(randomList, list[index])
  } else {
    commit(types.SET_PLAY_LIST_STATE, list)
  }
  commit(types.SET_CURRENT_INDEX_STATE, index)
  commit(types.SET_FULL_SCREEN_STATE, true)
  commit(types.SET_PLAYING_STATE, true)
}

function findIndex(list, song) {
  return list.findIndex((item) => {
    return item.id === song.id
  })
}

export const randomPlay = function ({commit}, {list}) {
  commit(types.SET_PLAY_MODE_STATE, mode.random)
  commit(types.SET_SEQUENCE_LIST_STATE, list)
  let randomList = shuffle(list)
  commit(types.SET_PLAY_LIST_STATE, randomList)
  commit(types.SET_CURRENT_INDEX_STATE, 0)
  commit(types.SET_FULL_SCREEN_STATE, true)
  commit(types.SET_PLAYING_STATE, true)
}
