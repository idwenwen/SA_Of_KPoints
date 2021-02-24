import { typeGrade } from "../enums/index";
import logger from "../logger/index";

/**
 * 自定义Error对象，主要添加类型信息，并帮助录入到Logger对象之中。
 */
export default class Exception extends Error {
  public type: typeGrade; // 错误等级

  constructor(type: typeGrade, message: string) {
    super(message);
    this.type = type;
  }

  // 错误信息打印
  public print() {
    console[this.type](this.message);
  }

  // 错误信息录入到logger内容。
  public input() {
    logger.set(this.type, this.message)
  }
}
