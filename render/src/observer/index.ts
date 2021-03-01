import { isObject } from "lodash";
import record from "../exception/index";
import Dep from "./dep";
import obserHandler from "./obserProxy";

/**
 * 发布者对象
 */
export default class Observer {
  private dep: Dep; // 当前发布者的中转站。
  public proxy: object; // 代理好之后的对象，可以返回的代理数值。

  constructor(origin: object) {
    this.dep = new Dep();
    this.proxy = this.obsering(origin);
  }

  /**
   * 深度监听当前带观测的对象。
   * @param origin 带观测对象。
   */
  private obsering(origin: object): object {
    // 检测当前对象的属性之中是否存在
    for (const key in origin) {
      // 当属性是对象的时候需要代理。
      if (isObject(origin[key])) {
        origin[key] = this.obsering(origin[key]);
      }
    }
    return new Proxy(origin, obserHandler(this));
  }

  /**
   * 通知当前dep之中变化属性相对应的属性进行更新。
   * @param origin 变化对象
   * @param property 变化属性
   */
  public notify(origin: object, property: string) {
    // TODO: 通过当前property的确定当前的印象范围。
  }
}
