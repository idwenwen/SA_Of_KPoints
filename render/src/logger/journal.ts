import { typeGrade } from "../enums/index";

// 单一类型日志类。
export default class Journal {
  private content: string[];
  private type: typeGrade; // 当前日志的类型
  private customFormat: Function; // 格式化传递的内容

  constructor(type: typeGrade, format?: Function) {
    this.type = type;
    this.content = [];
    this.customFormat = format;
  }

  // 添加日志信息
  public push(str: string): void {
    this.content.push(this.format(str));
  }

  // 打印日志信息
  public print() {
    console[this.type](this.content.join('\n'))
  }

  // 格式化添加的日志信息
  private format(str: string): string {
    return this.customFormat
      ? `${this.type} - ${str} - ${Date.now()}`
      : this.customFormat(str);
  }

  // 下载日志信息
  public download(_name?: string): void {
    // TODO: 转换成为文件下载。
  }
}