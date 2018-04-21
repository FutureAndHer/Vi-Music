<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="category">
      <div>
        <div v-if="focus.length" class="slider-wrapper">
          <slider>
            <div v-for="(item, index) in focus" v-if="index !== focus.length - 1">
              <a :id="item.jump_info.url">
                <img :src="item.pic_info.url" class="needsclick" @onload="loadSliderImage"/>
              </a>
            </div>
          </slider>
        </div>

        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="item in category" class="item">
              <div class="icon">
                <img width="60" height="60" v-lazy="item.cover"/>
              </div>
              <div class="text">
                <h2 class="name" v-html="item.title"/>
                <p class="desc" v-html="item.rcmdcontent"/>
              </div>
            </li>
          </ul>
        </div>

      </div>
      <div class="loading-wrapper">
        <loading></loading>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getRecommend} from 'api/recommend'
  import {ERR_OK} from 'api/config'
  import Slider from 'base/slider/slider'
  import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'
  import {playListMixin} from 'common/js/mixin'

  export default {
    mixins: [playListMixin],
    data() {
      return {
        focus: [],
        category: []
      }
    },
    created() {
        this._getRecommend()
    },
    methods: {
      handlePlayList(playList) {
        const bottom = playList.length > 0 ? '60px' : ''
        this.$refs.recommend.style.bottom = bottom
      },
      _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.focus = res.focus.data.content
            this.category = res.recomPlaylist.data.v_hot
          }
        })
      },
      loadSliderImage() {
        if (!this.hasLoadSliderImage) {
          this.hasLoadSliderImage = true
        }
      }
    },
    components: {
      Loading,
      Scroll,
      Slider
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
