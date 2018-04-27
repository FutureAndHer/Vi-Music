import {mode} from 'common/js/config'
import {loadSearch} from 'common/js/cache'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playList: [],
  sequenceList: [],
  playMode: mode.sequence,
  currentIndex: -1,
  disc: {},
  topList: {},
  searchHistory: loadSearch(),
}

export default state
