import { typeGrade } from "../enums/index";

export default class Exception extends Error {
  type: typeGrade; // 错误等级

  constructor(type: typeGrade, message: string) {
    super(message);
    this.type = type;
  }

  printing() {
    // Exception.message展示。
    console[this.type](this.message);
  }

  input() {}
}
