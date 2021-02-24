import { typeGrade } from "../enums/index"
import Exception from "./exception"
import BreakException from "./breakException"
import EqualException from "./equalException"
import ExistException from "./existException"

/**
 * 获取对应的异常实例。
 * @param alias 异常类型别名
 * @param message 异常信息
 */
function exceptionFactory(alias: string, message: string): Exception {
  switch(alias) {
    case 'break': 
      return new BreakException(message)
    case 'exist': 
      return new ExistException(message)
    case 'equal': 
      return new EqualException(message)
    default :
      return new Exception(typeGrade.Info, message)
  }
}

/**
 * 加载并生成错误信息，并返回excep信息。
 * @param alias 错误类型
 * @param message 错误信息
 * @param log 是否添加入日志信息
 */
export default async function record(alias: string, message: string, log: boolean = false) {
  const excep = exceptionFactory(alias, message)
  if (log) excep.input()
  return excep
}