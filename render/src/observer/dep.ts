import Watcher from "./watcher";

/**
 * 订阅中转站
 */
export default class Dep {
  static target: Watcher;
}

Dep.target = null;
