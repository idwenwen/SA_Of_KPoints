import Dep from "./dep";

function handler(observer) {
  return {
    get(target, property) {
      if (Dep.target) {
        // 关联当前的信息内容。存储当前watcher监控对象的细节属性。
      }
      return target[property];
    },
    set(target, property, value) {},
    delete(target, property) {},
  };
}

/**
 * 发布者对象
 */
export default class Observer {
  private dep: Dep; // 当前发布者的中转站。
  constructor(origin: object) {}
}
