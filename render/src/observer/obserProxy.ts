import { isObject } from "lodash";
import record from "../exception/index";
import Dep from "./dep";
import Observer from "./index";

export default function obserHandler(observer: Observer) {
  return {
    get(target, property) {
      if (Dep.target) {
        // 关联当前的信息内容。存储当前watcher监控对象的细节属性。
      }
      return target[property];
    },

    set(target, property, value) {
      // 获取原值。
      const origin = target[property];
      try {
        if (origin === value) {
          // 当设置的数值与原始值相同的时候。
          throw record("equal", "Value setted is same as old one");
        } else {
          let newVal = value;
          // 如果是对象的话，需要进行代理之后再赋值给当前的对象内容。
          if (isObject(value)) {
            // TODO:
          }
          // 数值不相同的时候则设置新的数值
          target[property] = value;
          // TODO observer对数据进行更新通知。
        }
      } catch (error) {
        return false;
      }
    },

    delete(target, property) {
      try {
        if (!target[property]) {
          throw record(
            "notExist",
            `'${property}' is not existing into target object`
          );
        } else {
          delete target[property]; // 删除了对象之中的数值。同时需要删除dep之中的惯量关系。
          // TODO: 删除dep之中的关联关系。
        }
      } catch (error) {
        return false;
      }
    },
  };
}
