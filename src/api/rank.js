import jsonp from 'common/js/jsonp'
import {commonParams, jsonpOptions} from './config'

export function getTopList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'

  const data = Object.assign({}, commonParams, {
    playform: 'h5',
    needNewCode: 1,
    format: 'jsonp'
  })

  return jsonp(url, data, jsonpOptions)
}

export function getMusicList(topid) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    needNewCode: 1,
    format: 'jsonp',
    topid: topid,
    type: 'top',
    page: 'detail',
    tpl: 3,
    notice: 0,
    g_tk: 5381
  })

  return jsonp(url, data, jsonpOptions)
}
