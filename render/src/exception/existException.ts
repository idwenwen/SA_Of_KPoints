import { typeGrade } from "../enums/index";
import Exception from "./exception";


// 循环终止异常。
export default class ExistException extends Exception {

  constructor(message: string) {
    super(typeGrade.Info, message)
  }
}