// 此文件为本项目中所有正则
/**
 * @author tobey 2019年09月14日
 * @detail 数字字母汉字
 */
export const verifyChineseCharacter = /^[A-Za-z0-9\u4e00-\u9fa5]+$/
/**
 * @author tobey 2019年10月18日
 * @detail 字母或数字
 */
export const verifyLetterAndNumber = /^[A-Za-z0-9]+$/
/**
 * @author fiona 2020年11月09日
 * @detail 字母、数字或下划线
 */
export const verifyLetterNumberUnderline = /^[A-Za-z0-9_]+$/

/**
 * @author tobey 2019年09月14日
 * @detail 正整数验证
 */
export const isInteger = /^[1-9]\d*$/

/**
 * @author tobey 2019年09月14日
 * @detail 大于等于0的整数
 */
export const isIntegerEqual0 = /^[0-9]\d*$/

/**
 * @author tobey 2019年09月06日
 * @detail 英文字符
 */
export const enchart = /^[a-zA-Z]+$/
/**
 * @author tobey 2019年09月06日
 * @detail 4到32位，只能输入数组，字母，下划线和点
 */
export const email4_32 = /^[0-9a-zA-Z._]{4,32}$/

/**
 * @author tobey 2019年09月06日
 * @detail 验证纯中文
 */
export const cnchart = /^[\u2E80-\u9FFF]+$/

/**
 * @author tobey 2019年09月06日
 * @detail 只能输入字母和点
 */
export const pointAndLetter = /^[a-zA-Z.]+$/

/**
 * @author tobey 2019年09月06日
 * @detail 验证1开头的手机号码
 */
export const phone_1 = /^1\d{10}$/

/**
 * @author tobey 2019年09月06日
 * @detail 验证11位数字
 */
export const number11 = /^\d{11}$/

/**
 * @author tobey 2019年10月18日
 * @detail 验证邮箱
 */
export const isEmail = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/

/**
 * @author tobey 2019年11月12日
 * @detail 限制小数点后4位
 */
export const price4 = /(^[1-9](\d+)?(\.\d{0,4})?$)|(^\d\.\d{0,4}$)/

/**
 * @author tobey 2019年11月12日
 * @detail 菜单规则限制正则
 */
export const menuValid = /^(\d{3})(:[C,M,S]\d{3}){0,2}$/

export const regExpObj = {
  // 手机号码正则
  MOBILE_REGEXP: new RegExp(/^1(3|4|5|7|8)\d{9}$/),
}

/**
 * @fun 验证正则表达式
 * @author jason 2019年10月17日
 * @patt 正则表达式索引
 * @str 待验证的字符串
 */
export const testRegexp = (patt, str) => {
  return regExpObj[patt].test(str)
}

/**
 * @author tobey 2019年11月12日
 * @detail 限制小数点后4位
 */
export const price2 = /(^[1-9](\d+)?(\.\d{0,2})?$)|(^\d\.\d{0,2}$)/

/**
 * @author jason 2020年06月16日
 * @detail 由英文、数字、汉字、空格或下划线组成
 */
export const NAME_REGEXP = /^[0-9A-Za-z\u4e00-\u9fa5_\s]+$/

/**
 * @author Jason 2020年06月17日
 * @detail 不允许输入中文
 */
export const NO_CHINESE = /^[^\u4E00-\u9FA5\uF900-\uFA2D\u0020]*$/

/**
 * @author Jason 2020年06月17日
 * @detail 纯数字
 */
export const PURE_NUMBER = /^[0-9]*$/

/**
 * @author Jason 2020年06月17日
 * @detail 1-100的数字
 */
export const HUNDRED_NUMBER = /^([1-9]\d?|100)$/

/**
 * @author tobey 2020年11月16日
 * @detail 验证邮箱
 */
export const checkEmail = /^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/

/**
 * @author tobey 2020年11月16日
 * @detail 验证1345678开头的手机号码
 */
export const checkPhone = /^1[3|4|5|7|8|9][0-9]{9}$/

/**
 * @author jason 2020年11月12日
 * @detail 由英文、数字或下划线组成
 */
export const NAME_NO_CHINESE_REGEXP = /^[0-9A-Za-z_]+$/

/**
 * @author Jason 2020年06月17日
 * @detail 1-100的数字
 */
export const POSITIVE_INTEGER = /^[1-9][0-9]{1,2}$/
