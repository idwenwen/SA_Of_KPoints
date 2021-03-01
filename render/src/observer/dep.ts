import { PropertyName } from "lodash";
import record from "../exception/index";
import { connection, propertyName } from "./type";

/**
 * 订阅中转站
 */
export default class Dep {
  static target: StackForTarget<connection>;
  static start: Function; // 订阅获取开始
  static end: Function; // 订阅获取结束
  sub: Map<propertyName, Array<connection>>; // 表示当前属性与相关的关联关系。

  constructor() {
    this.sub = new Map<propertyName, Array<connection>>();
  }

  /**
   * 添加细节关联关系。
   * @param propertyName 发布对象之中的变量名称
   * @param connectTo 当前关联的对象与对应变量名称
   */
  addSub(propertyName: propertyName, connectTo: connection) {
    let res: Array<connection> = this.sub.get(propertyName);
    if (!res) {
      res = [];
      this.sub.set(propertyName, res);
    }
    res.push(connectTo);
  }

  /**
   * 添加当前dep的订阅情况
   * @param relyOn 依赖属性
   */
  depend(relyOn: propertyName) {
    const relys = this.sub.get(relyOn);
    relys.push(Dep.target.)
  }

  /**
   * 删除对应property名称的关联关系
   * @param property 变量名称
   */
  clean(property: string) {}

  /**
   * 删除全部的关联关系
   */
  cleanUp() {}

  notify(propertyName: propertyName) {
    const list: Array<connection> = this.sub.get(propertyName);
    for (const item of list) {
      item.watcher.update(item);
    }
  }
}

/**
 * 当前存储特殊数值的stack对象
 */
class StackForTarget<T> {
  private current: T;
  private list: Array<T>;

  constructor(origin?: T) {
    this.current = origin;
    this.list = [];
  }

  /**
   * 将当前的current的数据存储到stack之中进行存储
   */
  public push(): boolean {
    try {
      if (this.current) {
        this.list.push(this.current);
        return true;
      } else {
        throw record("notExist", "There has no current target stuff.");
      }
    } catch (error) {
      return false;
    }
  }

  /**
   * 从队列之中获取前一个target对象内容。
   */
  public pop(): T {
    try {
      const res = this.list.pop();
      if (!res) {
        throw record("notExist", "There has no stuff pop from list.");
      }
      return res;
    } catch (error) {
      return null;
    }
  }

  /**
   * 保留前一个target内容，并运行现在设置的target内容
   * @param newCurrent 当前相关的target
   */
  public start(nCurrent: T): void {
    this.push();
    this.current = nCurrent;
  }

  /**
   * 获取上一个关联target内容
   */
  public end(): void {
    this.current = this.pop();
  }

  public getCurrent():T {
    return this.current
  }
}

Dep.target = new StackForTarget<connection>(); // 当前的调用的watcher对象。

Dep.start = function (connect: connection) {
  Dep.target.start(connect);
};

Dep.end = function () {
  Dep.end();
};
