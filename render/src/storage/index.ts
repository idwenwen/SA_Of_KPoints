import record from "../exception/index";

/**
 * 全局存储对象，用于存储全局数据，并方便获取
 */
class GlobalStorage {
  private storage: Map<string, object>; // 分配的存储空间
  private keys: Set<string>; // 已有key值存储。

  constructor() {
    this.storage = new Map<string, any>();
    this.keys = new Set<string>();
  }

  // 创建key值对应的存储区域
  private create(key: string, val?: any): any {
    let storages: any = val || {};
    if (!this.keys.has(key)) {
      this.storage.set(key, storages);
      this.keys.add(key);
      return storages;
    } else {
      record('exist', `There has already exist which key equals to ${key}`)
    }
  }

  // 设置新的关键字对应存储对象
  public set(key: string, val?: any): boolean {
    try {
      return !!this.create(key, val)
    } catch(error) {
      return false
    }
  }

  // 通过key值获取存储区域
  public get(key: string) {
    try {
      let storages = this.storage.get(key);
      if (!storages) { 
        this.create(key);
      }
      return storages
    } catch(error) {
      return {}
    }
  }
}

export default new GlobalStorage()