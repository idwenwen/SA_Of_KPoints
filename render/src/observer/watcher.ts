import { isFunction, isObject } from "lodash";
import { toArray } from "../utils/index";
import Dep from "./dep";
import { connection, OptionsForWatcher } from "./type";

const defOptions = {
  lazy: true,
  cache: true,
};

/**
 * 订阅者对象
 */
export default class Watcher {
  private _lazy: boolean; // 当前watcher是否懒更新。
  private _cache: boolean; // 是否缓存当前的计算结果。
  private _activity: boolean; // 当前watcher是否在工作

  private context: any; // 上下文环境，getter将会依据这个环境进行计算
  private getter: object | Function; // 当前获取器
  private callback: Array<Function>; // 每次计算完成getter之后的回调方法。将会传递最新的cache数值作为参数。
  public cache: object; // 缓存当前的获取结果

  constructor(
    context: any,
    getter: object | Function,
    callback: Function | Function[],
    options: OptionsForWatcher = defOptions
  ) {
    this.context = context;
    this.getter = getter;
    this.callback = toArray(callback);

    // 设置配置项
    this.rules(options);
    this._activity = true;
  }

  /**
   * 规范当前watcher的监控规则。
   * @param options 当前watcher的配置选项
   */
  private rules(options: OptionsForWatcher): void {
    this._lazy = options.lazy;
    this._cache = options.cache;
  }

  /**
   * 运行当前的watcher的内容。
   */
  public run() {
    
  }

  /**
   * 通过getter获取getter得到的结果。
   */
  public get() {
    if (this._activity) {
      // 如果当前的getter内容是Function的话。
      if (isFunction(this.getter)) {
      } else if (isObject(this.getter)) {
        for (const key in this.getter) {
          Dep.target.
        }
      }
    }
  }

  public update(connectTo: connection) {

  }
}
