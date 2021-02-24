import record from "../exception/index"
import UUID from "../uuid/index"
import globalStorage from '../storage/index'

// 全局的UUID
class TreeUUID extends UUID {
  static TREE_GLOBAL_ID: string = 'TREE'
  constructor() {
    super()
    globalStorage.set(TreeUUID.TREE_GLOBAL_ID, new Map<string, Tree>())
  }

  set(uuid: string, node: Tree) {
    const map = <Map<string, Tree>>(globalStorage.get(TreeUUID.TREE_GLOBAL_ID))
    map.set(uuid, node)
  }

  get(uuid: string): Tree {
    const map = <Map<string, Tree>>(globalStorage.get(TreeUUID.TREE_GLOBAL_ID))
    return map.get(uuid)
  }
}

// 全局树状图存取对象
const treeuuid = new TreeUUID()

// 树节点对象
export default class Tree {
  private uuid: string // 唯一标识
  private children: Tree[] // 子节点
  private parent: Tree // 父节点
  private level: number // 树中层数

  constructor() {
    this.uuid = treeuuid.getID()
    this.children = []
    this.parent = null
    this.level = 1
  }

  // 设置父节点
  setParent(np: Tree): boolean {
    try {
      if (this.parent !== np) {
        np.addChild(this)
        this.parent.removeChild(this)
        this.parent = np
      } else {
        throw record('exist', 'Setting different value of parent')
      }
      return true
    } catch(error) {
      return false
    }
  }

  // 设置树状图的节点的层级信息。
  setLevel(level): void {
    this.level = level
    // 设置子节点的层级信息
    if (this.children.length > 0) {
      for (const val of this.children) {
        val.setLevel(this.level + 1)
      }
    }
  }

  // 添加子节点
  addChild(tree: Tree, noLimit: boolean = true): boolean {
    let has:boolean = false
    if (noLimit) {
      has = !!this.children.find((val) => {
        return tree.uuid === val.uuid
      })
    }
    if (!has) {
      this.children.push(tree)
      tree.setLevel(this.level + 1)
      return true
    }
    return false
  }

  // 删除子节点内容。
  removeChild(tree: Tree): boolean {
    if (this.children.length > 0) {
      const index = this.children.findIndex((val) => {
        return val.uuid === tree.uuid
      })
      if (index >= 0) {
        this.children.splice(index, 1)
        return true
      }
    }
    return false
  }

  // 获取根节点
  getRoot() {
    let root = this.parent
    while (root.parent) {
      root = root.parent
    }
    return root
  }
}