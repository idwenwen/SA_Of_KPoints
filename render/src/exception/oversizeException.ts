import { typeGrade } from "../enums/index";
import Exception from "./exception";

// 超出范围异常。
export default class OversizeException extends Exception {
  constructor(message: string) {
    super(typeGrade.Warn, message);
  }
}
