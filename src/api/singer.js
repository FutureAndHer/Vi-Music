import jsonp from 'common/js/jsonp'
import {commonParams, jsonpOptions} from './config'

export function getSingers() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    format: 'jsonp'
  })

  return jsonp(url, data, jsonpOptions)
}

export function getSingerDetail(singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const data = Object.assign({}, commonParams, {
    singermid: singerId,
    notice: 0,
    order: 'listen',
    begin: 0,
    num: 1000,
    songstatus: 1,
    format: 'jsonp'
  })
  return jsonp(url, data, jsonpOptions)
}
