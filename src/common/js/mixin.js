import {mapGetters, mapMutations, mapActions} from 'vuex'
import {mode} from 'common/js/config'
import {shuffle} from 'common/js/util'

export const playListMixin = {
  computed: {
    ...mapGetters([
      'playList'
    ])
  },
  mounted() {
    this.handlePlayList(this.playList)
  },
  activated() {
    this.handlePlayList(this.playList)
  },
  watch: {
    playList(newVal) {
      this.handlePlayList(newVal)
    }
  },
  methods: {
    handlePlayList() {
      throw new Error('component must implement handlePlaylist method')
    }
  }
}

export const playerMixin = {
  computed: {
    iconMode() {
      return 'icon-' + (this.playMode === mode.sequence ? 'sequence' : this.playMode === mode.loop ? 'loop' : 'random')
    },
    ...mapGetters([
      'sequenceList',
      'currentSong',
      'playList',
      'playMode'
    ])
  },
  methods: {
    changeMode() {
      const newMode = (this.playMode + 1) % 3
      this.setPlayMode(newMode)
      let list = null
      if (newMode === mode.random) {
        list = shuffle(this.sequenceList)
      } else {
        list = this.sequenceList
      }
      this.resetCurrentIndex(list)
      this.setPlayList(list)
    },
    resetCurrentIndex(list) {
      let index = list.findIndex((item) => {
        return this.currentSong.id === item.id
      })
      this.setCurrentIndex(index)
    },
    ...mapMutations({
      setPlayingState: 'SET_PLAYING_STATE',
      setCurrentIndex: 'SET_CURRENT_INDEX_STATE',
      setPlayMode: 'SET_PLAY_MODE_STATE',
      setPlayList: 'SET_PLAY_LIST_STATE'
    })
  }
}

