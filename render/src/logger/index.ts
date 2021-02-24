import { typeGrade } from "../enums/index";
import Journal from "./journal";

// 日志集合对象
class Logger {
  //日志存储区
  private logs: Map<string, Journal>;

  constructor() {
    this.logs = new Map<string, Journal>();
  }

  // 创建相关类型的日志的基本记录内容。
  private create(type: typeGrade): Journal {
    const res = new Journal(type)
    this.logs.set(type, res)
    return res
  }

  // 添加新的日志信息。
  public set(type: typeGrade, content: string) {
    const jo = this.logs.get(type) || this.create(type)
    jo.push(content)
  }

  // 打印相关类型的日志信息。
  public print(type: typeGrade) {
    const jo = this.logs.get(type)
    if (jo) jo.print()
  }

  // 下载相关类型的日志信息。
  public download(type: typeGrade, name?: string) {
    const jo = this.logs.get(type)
    if (jo) jo.download(name)
  }
}

export default new Logger()
