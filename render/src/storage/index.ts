/**
 * 全局存储对象，用于存储全局数据，并方便获取
 */
class GlobalStorage {
  storage: Map<string, object>; // 分配的存储空间
  keys: Set<string>; // 已有key值存储。

  constructor() {
    this.storage = new Map<string, object>();
    this.keys = new Set<string>();
  }

  // 创建key值对应的存储区域
  create(key: string, val?: object): object {
    let storages: object = val || {};
    if (!this.keys.has(key)) {
      this.storage.set(key, storages);
      this.keys.add(key);
    }
    return storages;
  }

  // 通过key值获取存储区域
  get(key: string) {
    let storages = this.storage.get(key);
    if (!storages) this.create(key);
  }
}
