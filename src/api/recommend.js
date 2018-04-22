import jsonp from 'common/js/jsonp'
import {commonParams,jsonpOptions, jsonOptions} from './config'

export function getRecommend() {
  const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'

  const data = Object.assign({}, commonParams, {
    data: '{"comm": {"ct":24},"category":{"method":"get_hot_category","param":{"qq":""},"module":"music.web_category_svr"},"recomPlaylist":{"method":"get_hot_recommend","param":{"async":1,"cmd":2},"module":"playlist.HotRecommendServer"},"playlist":{"method":"get_playlist_by_category","param":{"id":8,"curPage":1,"size":40,"order":5,"titleid":8},"module":"playlist.PlayListPlazaServer"},"new_song":{"module":"QQMusic.MusichallServer","method":"GetNewSong","param":{"type":0}},"new_album":{"module":"QQMusic.MusichallServer","method":"GetNewAlbum","param":{"type":0,"category":"-1","genre":0,"year":1,"company":-1,"sort":1,"start":0,"end":39}},"toplist":{"module":"music.web_toplist_svr","method":"get_toplist_index","param":{}},"focus":{"module":"QQMusic.MusichallServer","method":"GetFocus","param":{}}}'
  })

  return jsonp(url, data, jsonOptions)
}

export function getSongList(dissid) {
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
  const data = Object.assign({}, commonParams, {
    disstid: dissid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    format: 'jsonp',
    loginUin: 0,
    g_tk: 5381,
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0
  })

  return jsonp(url, data, jsonpOptions)
}
