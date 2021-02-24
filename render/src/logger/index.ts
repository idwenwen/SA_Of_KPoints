import { typeGrade } from "../enums/index";

class Logger {
  private logs: Map<string, Journal>;

  constructor() {
    this.logs = new Map<string, Journal>();
  }

  private create(type: typeGrade): Journal {
    const res = new Journal(type)
    this.logs.set(type, res)
    return res
  }

  public set(type: typeGrade, content: string) {
    let jo = this.logs.get(type) || this.create(type)
    jo.
  }
}

class Journal {
  content: string[];
  type: typeGrade; // 当前日志的类型
  customFormat: Function; // 格式化传递的内容

  constructor(type: typeGrade, format?: Function) {
    this.type = type;
    this.content = [];
    this.customFormat = format;
  }

  push(str: string): void {
    this.content.push(this.format(str));
  }

  print() {
    console[this.type](this.content.join('\n'))
  }

  format(str: string): string {
    return this.customFormat
      ? `${this.type} - ${str} - ${Date.now()}`
      : this.customFormat(str);
  }

  download(): void {
    // 转换成为文件下载。
  }
}
