function timeago(dateTimeStamp){   //dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
    var minute = 1000 * 60;      //把分，时，天，周，半个月，一个月用毫秒表示
    var hour = minute * 60;
    var day = hour * 24;
    var week = day * 7;
    var halfamonth = day * 15;
    var month = day * 30;
    var now = new Date().getTime();   //获取当前时间毫秒
    var diffValue = now - dateTimeStamp;//时间差

    if(diffValue < 0){
        return;
    }
    var minC = diffValue/minute;  //计算时间差的分，时，天，周，月
    var hourC = diffValue/hour;
    var dayC = diffValue/day;
    var weekC = diffValue/week;
    var monthC = diffValue/month;
    if(monthC >= 1 && monthC <= 3){
        result = " " + parseInt(monthC) + "月前"
    }else if(weekC >= 1 && weekC <= 3){
        result = " " + parseInt(weekC) + "周前"
    }else if(dayC >= 1 && dayC <= 6){
        result = " " + parseInt(dayC) + "天前"
    }else if(hourC >= 1 && hourC <= 23){
        result = " " + parseInt(hourC) + "小时前"
    }else if(minC >= 1 && minC <= 59){
        result =" " + parseInt(minC) + "分钟前"
    }else if(diffValue >= 0 && diffValue <= minute){
        result = "刚刚"
    }else {
        var datetime = new Date();
        datetime.setTime(dateTimeStamp);
        var Nyear = datetime.getFullYear();
        var Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
        var Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
        var Nhour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
        var Nminute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
        var Nsecond = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
        result = Nyear + "-" + Nmonth + "-" + Ndate
    }
    return result;
}

export const forEach = (arr, fn) => {
  if (!arr.length || !fn) return;
  let i = -1;
  const len = arr.length;
  while (++i < len) {
    const item = arr[i];
    fn(item, i, arr);
  }
};

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的交集, 两个数组的元素为数值或字符串
 */
export const getIntersection = (arr1, arr2) => {
  const len = Math.min(arr1.length, arr2.length);
  let i = -1;
  const res = [];
  while (++i < len) {
    const item = arr2[i];
    if (arr1.indexOf(item) > -1) res.push(item);
  }
  return res;
};

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的并集, 两个数组的元素为数值或字符串
 */
export const getUnion = (arr1, arr2) => Array.from(new Set([...arr1, ...arr2]));

/**
 * @param {Array} target 目标数组
 * @param {Array} arr 需要查询的数组
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 */
export const hasOneOf = (targetarr, arr) => targetarr.some(_ => arr.indexOf(_) > -1);

/**
 * @param {String|Number} value 要验证的字符串或数值
 * @param {*} validList 用来验证的列表
 */
export function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}

/**
 * @param {Number} timeStamp 判断时间戳格式是否是毫秒
 * @returns {Boolean}
 */
const isMillisecond = timeStamp => {
  const timeStr = String(timeStamp);
  return timeStr.length > 10;
};

/**
 * @param {Number} timeStamp 传入的时间戳
 * @param {Number} currentTime 当前时间时间戳
 * @returns {Boolean} 传入的时间戳是否早于当前时间戳
 */
const isEarly = (timeStamp, currentTime) => timeStamp < currentTime;

/**
 * @param {Number} num 数值
 * @returns {String} 处理后的字符串
 * @description 如果传入的数值小于10，即位数只有1位，则在前面补充0
 */
const getHandledValue = num => (num < 10 ? '0' + num : num);

/**
 * @param {Number} timeStamp 传入的时间戳
 * @param {Number} startType 要返回的时间字符串的格式类型，传入'year'则返回年开头的完整时间
 */
const getDate = (timeStamp, startType) => {
  const d = new Date(timeStamp * 1000);
  const year = d.getFullYear();
  const month = getHandledValue(d.getMonth() + 1);
  const date = getHandledValue(d.getDate());
  const hours = getHandledValue(d.getHours());
  const minutes = getHandledValue(d.getMinutes());
  const second = getHandledValue(d.getSeconds());
  let resStr = '';
  if (startType === 'year') resStr = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + second;
  else resStr = month + '-' + date + ' ' + hours + ':' + minutes;
  return resStr;
};

/**
 * @param {String|Number} timeStamp 时间戳
 * @returns {String} 相对时间字符串
 */
export const getRelativeTime = timeStamp => {
  // 判断当前传入的时间戳是秒格式还是毫秒
  const IS_MILLISECOND = isMillisecond(timeStamp);
  // 如果是毫秒格式则转为秒格式
  if (IS_MILLISECOND) Math.floor(timeStamp /= 1000);
  // 传入的时间戳可以是数值或字符串类型，这里统一转为数值类型
  timeStamp = Number(timeStamp);
  // 获取当前时间时间戳
  const currentTime = Math.floor(Date.parse(new Date()) / 1000);
  // 判断传入时间戳是否早于当前时间戳
  const IS_EARLY = isEarly(timeStamp, currentTime);
  // 获取两个时间戳差值
  let diff = currentTime - timeStamp;
  // 如果IS_EARLY为false则差值取反
  if (!IS_EARLY) diff = -diff;
  let resStr = '';
  const dirStr = IS_EARLY ? '前' : '后';
  // 少于等于59秒
  if (diff <= 59) resStr = diff + '秒' + dirStr;
  // 多于59秒，少于等于59分钟59秒
  else if (diff > 59 && diff <= 3599) resStr = Math.floor(diff / 60) + '分钟' + dirStr;
  // 多于59分钟59秒，少于等于23小时59分钟59秒
  else if (diff > 3599 && diff <= 86399) resStr = Math.floor(diff / 3600) + '小时' + dirStr;
  // 多于23小时59分钟59秒，少于等于29天59分钟59秒
  else if (diff > 86399 && diff <= 2623859) resStr = Math.floor(diff / 86400) + '天' + dirStr;
  // 多于29天59分钟59秒，少于364天23小时59分钟59秒，且传入的时间戳早于当前
  else if (diff > 2623859 && diff <= 31567859 && IS_EARLY) resStr = getDate(timeStamp);
  else resStr = getDate(timeStamp, 'year');
  return resStr;
};

/**
 * @returns {String} 当前浏览器名称
 */
export const getExplorer = () => {
  const ua = window.navigator.userAgent;
  const isExplorer = (exp) => ua.indexOf(exp) > -1;
  if (isExplorer('MSIE')) return 'IE';
  if (isExplorer('Firefox')) return 'Firefox';
  if (isExplorer('Chrome')) return 'Chrome';
  if (isExplorer('Opera')) return 'Opera';
  if (isExplorer('Safari')) return 'Safari';
};

/* eslint-disable */
/**
 * @description 绑定事件 on(element, event, handler)
 */
export const on = (function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  }
  return function (element, event, handler) {
    if (element && event && handler) {
      element.attachEvent('on' + event, handler);
    }
  };
}());

/**
 * @description 解绑事件 off(element, event, handler)
 */
export const off = (function () {
  if (document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  }
  return function (element, event, handler) {
    if (element && event) {
      element.detachEvent('on' + event, handler);
    }
  };
}());
/* eslint-enable */

/**
 * 判断一个对象是否存在key，如果传入第二个参数key，则是判断这个obj对象是否存在key这个属性
 * 如果没有传入key这个参数，则判断obj对象是否有键值对
 */
export const hasKey = (obj, key) => {
  if (key) return key in obj;

  const keysArr = Object.keys(obj);
  return keysArr.length;
};

/**
 * @param {*} obj1 对象
 * @param {*} obj2 对象
 * @description 判断两个对象是否相等，这两个对象的值只能是数字或字符串
 */
export const objEqual = (obj1, obj2) => {
  const keysArr1 = Object.keys(obj1);
  const keysArr2 = Object.keys(obj2);
  if (keysArr1.length !== keysArr2.length) return false;
  if (keysArr1.length === 0 && keysArr2.length === 0) return true;
  /* eslint-disable-next-line */
  else return !keysArr1.some(key => obj1[key] != obj2[key])
};

export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  const date = new Date(time);
  let fmt = cFormat || 'yyyy-MM-dd hh:mm:ss';
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  Object.keys(o).forEach(k => {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  });
  return fmt;
}

// 数组转对象 [['a', 'b']] => {a:'b'}
export function arrayToObj(targetArray) {
  const result = {};
  targetArray.forEach(item => {
    result[item[0]] = item[1];
  });
  return result;
}

export function getFormCondition(configData) {
  const obj = {};
  configData.forEach(item => {
    if (!item.value || item.value === '' || item.value.length === 0) {
      return obj;
    }
    if (item.type === 'DatePicker' || item.type === 'TimePicker') {
      if (item.pickerType === 'daterange' || item.pickerType === 'datetimerange') {
        item.value[0] = item.value[0] ? parseTime(item.value[0], item.format) : '';
        item.value[1] = item.value[1] ? parseTime(item.value[1], item.format) : '';
        obj[item.field[0]] = item.value[0];
        obj[item.field[1]] = item.value[1];
      } else {
        item.value = item.value ? parseTime(item.value, item.format) : '';
        obj[item.field] = item.value;
      }
    } else {
      obj[item.field] = item.value;
    }
  });
  return obj;
}

export function getCurrentDay(isCurrent) {
  const date = new Date();
  if (!isCurrent) {
    date.setDate(1);
  }
  let month = parseInt(date.getMonth() + 1, 10);
  let day = date.getDate();
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }
  return date.getFullYear() + '-' + month + '-' + day;
}

// 去掉字符串两端的空格
export function trim(value) {
  if (value) {
    return value.replace(/(^\s*)|(\s*$)/g, '');
  }
  return '';
}
