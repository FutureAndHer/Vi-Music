import jsonp from 'common/js/jsonp'
import {commonParams, jsonpOptions} from './config'

export function getHotKey() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    needNewCode: 1,
    format: 'jsonp',
    notice: 0,
  })

  return jsonp(url, data, jsonpOptions)
}

export function search(query, page, zhida) {
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'
  // g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&n&w=%E9%9D%92%E8%8A%B1%E7%93%B7&zhidaqu=1&catZhida=1&&_=1524406443929'
  const data = Object.assign({}, commonParams, {
    w: query,
    p: page,
    catZhida: zhida ? 1 : 0,
    format: 'jsonp',
    notice: 0,
    platform: 'h5',
    needNewCode: 1,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    perpage: 20,
    n: 20,
    remoteplace: 'txt.mqq.all'
  })
  return jsonp(url, data, jsonpOptions)
}
