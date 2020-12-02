// import { get } from 'lodash';
/**
 * @author cooper.liu 2019.04.24
 * tools为不依赖任何框架的原生公共方法
 *  */
/**
 * @param {Array} arr 目标数组
 * @param {Function} fn 对目标函数进行处理的函数
 * @date 2019年04月23日
 * @author cooper
 * @description 对arr进行遍历，在fn中进行处理
 */
export const forEach = (arr, fn) => {
  if (!arr.length || !fn) return
  let i = -1
  let len = arr.length
  while (++i < len) {
    let item = arr[i]
    fn(item, i, arr)
  }
}

/**
 * @param {*} falg 需要校验的参数
 * @date 2019年04月23日
 * @author cooper
 * @description 判断传入的参数是否为空
 */
export const isNull = (falg) => {
  return falg === null || falg === undefined || falg === ''
}

/**
 * @param {Array} targetarr 目标数组
 * @param {Array} arr 需要查询的数组
 * @date 2019年04月23日
 * @author cooper
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 */
export const hasOneOf = (targetarr, arr) => {
  return targetarr.some((_) => arr.indexOf(_) > -1)
}
/**
 * @param {String|Number} value 要验证的字符串或数值
 * @param {*} validList 用来验证的列表
 * @date 2019年05月21日
 * @author cooper
 */
export function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @date 2019年04月24日
 * @author cooper
 * @description 得到两个数组的交集, 两个数组的元素为数值或字符串
 */
export const getIntersection = (arr1, arr2) => {
  let len = Math.min(arr1.length, arr2.length)
  let i = -1
  let res = []
  while (++i < len) {
    const item = arr2[i]
    if (arr1.indexOf(item) > -1) res.push(item)
  }
  return res
}

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @date 2019年04月24日
 * @author cooper
 * @description 得到两个数组的并集, 两个数组的元素为数值或字符串
 */
export const getUnion = (arr1, arr2) => {
  return Array.from(new Set([...arr1, ...arr2]))
}

/**
 * @param  {number} time
 * @author cooper 2019年04月24日
 */
export const formatTime = (time) => {
  return time < 10 ? '0' + time : time
}
/**
 * @param  {string[yyyy-MM-dd HH:mm:ss]} value
 * @param  {string} type year 代表年月日, date 代表时分秒, all 代表年月日 时分秒
 * @author cooper 2019年04月28日
 * @description 对时间进行处理，获取页面展示需要用的时间格式
 */
export const formatDate = (value, type) => {
  if (!value) return ''
  if (!type) type = 'all'
  let _time = new Date(value)
  let _year = formatTime(_time.getFullYear())
  let _month = formatTime(_time.getMonth() + 1)
  let _date = formatTime(_time.getDate())
  let _hour = formatTime(_time.getHours())
  let _minutes = formatTime(_time.getMinutes())
  let _seconds = formatTime(_time.getSeconds())
  let timerYear = _year + '-' + _month + '-' + _date
  let timerDate = _hour + ':' + _minutes + ':' + _seconds
  const timer = {
    year: timerYear,
    date: timerDate,
    all: timerYear + ' ' + timerDate,
  }
  return timer[type]
}

export const dateFormat = (value, fmt) => {
  if (!value) return ''
  if (!fmt) fmt = 'yyyy-MM-dd hh:mm:ss'
  let _time = new Date(value)
  var o = {
    'M+': _time.getMonth() + 1, // 月份
    'd+': _time.getDate(), // 日
    'h+': _time.getHours(), // 小时
    'm+': _time.getMinutes(), // 分
    's+': _time.getSeconds(), // 秒
    'q+': Math.floor((_time.getMonth() + 3) / 3), // 季度
    S: _time.getMilliseconds(), // 毫秒
  }
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (_time.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
  }
  return fmt
}
/**
 * 获取两个时间月份差
 */
export const getMonths = (start, end) => {
  var result = []
  var starts = start.split('-')
  var ends = end.split('-')
  var staYear = starts[0] * 1
  var staMon = starts[1] * 1 < 10 ? starts[1] : starts[1]
  var endYear = ends[0] * 1
  var endMon = ends[1] * 1 < 10 ? ends[1] : ends[1]
  result.push(staYear + '-' + staMon)
  while (staYear <= endYear) {
    if (staYear === endYear) {
      while (staMon < endMon) {
        staMon++
        if (staMon < 10) {
          result.push(staYear + '-0' + staMon)
        } else {
          result.push(staYear + '-' + staMon)
        }
      }
      staYear++
    } else {
      staMon++
      if (staMon > 12) {
        staMon = 1
        staYear++
      }
      if (staMon < 10) {
        result.push(staYear + '-0' + staMon)
      } else {
        result.push(staYear + '-' + staMon)
      }
    }
  }
  return result
}

/**
 * @param  {2019-08-05T16:00:00.000Z}
 * @author tobey 2019年08月09日
 * @description 获取两个时间相差的完整天数
 */
export const getDaysBetween = (dateString1, dateString2) => {
  var startDate = Date.parse(dateString1)
  var endDate = Date.parse(dateString2)
  var days = (endDate - startDate) / (1 * 24 * 60 * 60 * 1000) + 1
  return days
}
/**
 * @param  {2019-08-05T16:00:00.000Z}
 * @author tobey 2019年08月09日
 * @description 获取当前月份的天数
 */
export const mGetDate = (dataTime) => {
  var date = new Date(dataTime)
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var d = new Date(year, month, 0)
  return d.getDate()
}
/**
 * @param  {2019-08-05T16:00:00.000Z}
 * @author tobey 2019年08月09日
 * @description 获取当前月份的第一天
 */
export const getCurrentMonthFirst = (dateTime) => {
  var date = new Date(dateTime)
  date.setDate(1)
  var month = parseInt(date.getMonth() + 1)
  var day = date.getDate()
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  return date.getFullYear() + '-' + month + '-' + day
}

/**
 * @param  {2019-08-05T16:00:00.000Z}
 * @author tobey 2019年08月09日
 * @description 获取当前月份的上个月份的最后一天
 */

export const getCurrentMonthLast1 = () => {
  var date = new Date()
  var currentMonth = date.getMonth()
  var nextMonth = ++currentMonth
  var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1)
  var oneDay = 1000 * 60 * 60 * 24
  var lastTime = new Date(nextMonthFirstDay - oneDay)
  var month = parseInt(lastTime.getMonth())
  var day = lastTime.getDate()
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  return date.getFullYear() + '-' + month + '-' + day
}

/**
 * @param  {2019-08-05T16:00:00.000Z}
 * @author tobey 2019年08月09日
 * @description 获取当前月份的最后一天
 */

export const getCurrentMonthLast = (dateTime) => {
  var date = new Date(dateTime)
  var currentMonth = date.getMonth()
  var nextMonth = ++currentMonth
  var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1)
  var oneDay = 1000 * 60 * 60 * 24
  var lastTime = new Date(nextMonthFirstDay - oneDay)
  var month = parseInt(lastTime.getMonth() + 1)
  var day = lastTime.getDate()
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  return date.getFullYear() + '-' + month + '-' + day
}

/**
 * @param  {2019-08-05T16:00:00.000Z}
 * @author tobey 2019年08月09日
 * @description 一年后的前一天
 */

export const getNextYearCurrentDay = (dateTime) => {
  var time = new Date(dateTime)
  var year = time.getFullYear() + 1
  var month = time.getMonth() + 1
  var day = time.getDate()
  if (month < 10) {
    month = '0' + month
  }
  if (day > 1) {
    day = day - 1
  } else {
    month = month - 1
    if (month < 10) {
      month = '0' + month
    }
    if (month === 0) {
      month = 12
    }
    day = new Date(year, month, 0).getDate()
  }
  var v2 = year + '-' + month + '-' + day
  return v2
}

/**
 * @param  {2019-08-05T16:00:00.000Z} iveiw返回的默认格式 转换成2019-08-07 16:00:00.000+0000
 * @author tobey 2019年08月09日
 * @description 对时间格式进行转换，得到后端支持的格式
 */
export const formatDateCommon = (value) => {
  if (!value) return ''
  let date = ''
  date = new Date(value).toJSON()
  let y = date.split('T')[0]
  let h = date.split('T')[1]
  h = h.replace('Z', '+0000')
  date = y + 'T' + h
  return date
}

// 获取当前时间的前N个月的时间 {N< 12}(不要超过12个月)
export const getStartTime = (format, forward = 1) => {
  if (!format) return ''
  let date = formatDate(format, 'year')
  var arr = date.split('-')
  var year = arr[0] // 获取当前日期的年份
  var month = arr[1] // 获取当前日期的月份
  var day = arr[2] // 获取当前日期的日
  // var days = new Date(year, month, 0)
  // days = days.getDate() // 获取当前日期中月的天数
  var year2 = year
  var month2 = parseInt(month) - forward
  if (month2 <= 0) {
    year2 = parseInt(year2) - 1
    month2 = 12 + month2
  }
  if (month2 >= 13) {
    year2 = parseInt(year2) + 1
    month2 = month2 - 12
  }
  var day2 = day
  var days2 = new Date(year2, month2, 0)
  days2 = days2.getDate()
  if (day2 > days2) {
    day2 = days2
  }
  if (month2 < 10) {
    month2 = '0' + month2
  }
  var t2 = year2 + '-' + month2 + '-' + day2
  return t2
}

/**
 * @author cooper 2019年05月16日
 * @description 绑定事件 on(element, event, handler)
 */
export const on = (function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()

/**
 * 移除某个元素的监听事件
 */
export const off = (function () {
  if (document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()

/**
 * @author cooper 2019年06月16日
 * @param  {string} str 需要进行校验的邮箱
 */
export const isEmail = (str) => {
  var reg = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
  return reg.test(str)
}

/**
 * @author tobey 2019年06月19日
 * @param  {string} str 需要进行z正整数验证
 */
export const isInteger = (str) => {
  var reg = /^[1-9]\d*$/
  return reg.test(str)
}

/**
 * @author tobey 2019年10月25日
 * @param  {Array} arr 数组
 * @description 数组去重
 */
export const arrayRepeat = (arr) => {
  // Set数据结构，它类似于数组，其成员的值都是唯一的
  return Array.from(new Set(arr)) // 利用Array.from将Set结构转换成数组
}

/**
 * @author tobey 2019年06月19日
 * @param  {Array} arr 数组
 * @param  {Object} keyObj 定义arr中对象元素的属性关键字
 * @description 把arr的值遍历转换成逗号拼接的字符串
 */
export const joinValue = (arr, keyObj) => {
  let key = {
    dictValue: 'dictValue',
    dictText: 'dictText',
  }
  if (keyObj) key = keyObj
  let value = []
  forEach(arr, (item, index, arr) => {
    value.push(item[key['dictValue']])
  })
  return value.join(',')
}

/**
 * @author mac 2019年06月19日
 * @param  {filename} 文件名
 * @description 取文件名的后缀，并转换
 */
export const extname = (filename) => {
  if (!filename || typeof filename !== 'string') {
    return false
  }
  let a = filename.split('').reverse().join('')
  let b = a.substring(0, a.search(/\./)).split('').reverse().join('')
  return b
}

/**
 * @author jason 2019年11月28日
 * @param  {oneArr} 数组一
 * @param  {twoArr} 数组二
 * @param  {onlyId} 对应唯一id
 * @description 两数组取并集
 */
export const intersection = (oneArr, twoArr, onlyId) => {
  let twoArrList = twoArr.map((e) => e[onlyId])
  let arrNew = JSON.parse(JSON.stringify(twoArr))
  oneArr.forEach((e) => {
    if (!twoArrList.includes(e[onlyId])) {
      arrNew.push(e)
    }
  })
  return arrNew
}
/**
 * @author tobey 2019年12月26日
 * @param  {arr} 树数组
 * @description 把树数组的children为空对象的（[]）转换成null
 */
export const handleTreeChildren = (arr) => {
  if (arr) {
    arr.forEach((v, i) => {
      if (v.children && v.children instanceof Array) {
        if (v.children.length > 0) {
          handleTreeChildren(v.children)
        } else {
          v.children = null
        }
      }
    })
  }
}

/**
 * @author jason 2019年04月13日
 * @param {}
 * @description 获取缓存里当前子系统的systemSign
 */

export const getCookiesSystemSign = (systemId) => {
  let localSystemList = localStorage.getItem('systemList')
  let systemList = []
  if (localSystemList) {
    systemList = localSystemList
      ? JSON.parse(localStorage.getItem('systemList'))
      : []
  }
  let currentSystemSignArr = []
  if (systemList && systemList.length > 0) {
    currentSystemSignArr = systemList.filter((e) => e.systemId === systemId)
  } else {
    currentSystemSignArr = []
  }
  return currentSystemSignArr.length > 0
    ? currentSystemSignArr[0].systemSign
    : ''
}

// 将非树结构转换成Cascader树
export function getDataToTree(obj) {
  let bigList = []
  let smallList = []
  for (let key in obj.parentAuthContentMap) {
    bigList.push({
      value: key,
      label: obj.parentAuthContentMap[key],
    })
  }
  for (let key in obj.childAuthContentMap) {
    for (let i in obj.childAuthContentMap[key]) {
      let smallItem = {
        parentKey: key,
        value: obj.childAuthContentMap[key][i].key,
        label: obj.childAuthContentMap[key][i].val,
      }
      smallList.push(smallItem)
    }
  }
  for (let key in smallList) {
    let childrenItem = smallList[key]
    for (let i in bigList) {
      let parentItem = {
        value: bigList[i].value,
        label: bigList[i].label,
      }
      if (childrenItem.parentKey === parentItem.value) {
        if (!bigList[i].children) {
          bigList[i].children = []
        }
        bigList[i].children.push(childrenItem)
        break
      }
    }
  }
  return bigList
}

/**
 * 转换tree结构数据的键名
 * @param {array} treeArr 要转换的树的数组
 * @param {object} mapKey 键值对映射
 * @param {object} tokey 转换的key  { label: 'title1', value: 'value1', children: 'children1' }) 非必传，不传的话默认value label children
 * @param {boolen} isReturnArr true 没有子元素的时候返回空数组，false没有子元素的时候返回null
 * @author tobey 2019.06.05
 * @description 转换tree结构数据的键名
 */
export const convertTree = (obj) => {
  const result = []
  // 遍历 treeArr
  obj.treeArr.forEach((item) => {
    // 读取 map 的键值映射
    const value = item[obj.mapKey.value]
    const label = item[obj.mapKey.label]
    let children =
      item[obj.mapKey.children] && item[obj.mapKey.children].length > 0
        ? item[obj.mapKey.children]
        : obj.isReturnArr
        ? []
        : null
    // 如果有子节点，递归
    if (children) {
      children = obj.tokey
        ? convertTree({
            treeArr: children,
            mapKey: obj.mapKey,
            tokey: obj.tokey,
            isReturnArr: obj.isReturnArr,
          })
        : convertTree({
            treeArr: children,
            mapKey: obj.mapKey,
            isReturnArr: obj.isReturnArr,
          })
    }
    let data = {}
    if (obj.tokey) {
      data[obj.tokey.value ? obj.tokey.value : 'value'] = value
      data[obj.tokey.label ? obj.tokey.label : 'label'] = label
      if (children && children.length > 0) {
        // 如果children没有值，则不要children这个字段
        data[obj.tokey.children ? obj.tokey.children : 'children'] = children
        children.forEach((item, index) => {
          item.parentKey = value
        })
      }
      result.push(data)
    } else {
      result.push(
        children && children.length > 0
          ? {
              value,
              label,
              children,
            }
          : {
              value,
              label,
              parentKey: undefined,
            }
      )
    }
  })
  return result
}
// 文件大小
export function formatFileSize(size) {
  let sizeNum = size ? parseInt(size, 10) : 0
  return sizeNum >= 1024
    ? sizeNum / 1024 >= 1024
      ? sizeNum / (1024 * 1024) >= 1024
        ? (sizeNum / (1024 * 1024 * 1024)).toFixed(0) + 'GB'
        : (sizeNum / (1024 * 1024)).toFixed(0) + 'MB'
      : (sizeNum / 1024).toFixed(0) + 'KB'
    : sizeNum.toFixed(0) + 'B'
}
// 校验名称
export function checkName(rule, value, callback) {
  if (value.search(/^[0-9A-Za-z\u4e00-\u9fa5_\s]+$/)) {
    return callback(new Error('名称仅由英文、数字、汉字、空格或下划线组成'))
  } else {
    callback()
  }
}

// 校验mac
export function checkMac(rule, value, callback) {
  var reg = /^[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}$/
  if (!reg.test(value)) {
    return callback(new Error('MAC地址格式为XX:XX:XX:XX:XX:XX,X为数字或A-F'))
  } else {
    callback()
  }
}
// 校验Version
export function checkVersion(rule, value, callback) {
  let reg = /^\d\d\.\d\d\.\d\d(.\d\d)?$/
  if (!reg.test(value)) {
    return callback(new Error('版本格式为XX.XX.XX或XX.XX.XX.XX(X为数字0-9)'))
  } else {
    callback()
  }
}
// 校验SN
export function checkSN(rule, value, callback) {
  let pattern = /^[A-Z\d]{25}$/
  let errorFlag = false
  value.split(' ').forEach((item) => {
    if (!pattern.test(item)) {
      errorFlag = true
    }
  })
  if (errorFlag) {
    return callback(new Error('请输入25位大写英文或数字'))
  } else {
    return callback()
  }
}

export function isImage(value) {
  if (isNull(value)) return false
  return /\.(png|jpe?g|gif|bmp|psd|tiff|tga|eps)$/i.test(value)
}

export function isVideo(value) {
  if (isNull(value)) return false
  return /\.(mp4|rmvb|flv|mpeg|avi)$/i.test(value)
}
