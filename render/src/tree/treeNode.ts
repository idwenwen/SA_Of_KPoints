import record from "../exception/index";
import UUID from "../uuid/index";

// 全局树节点对象的UUID信息。
class TreeUUID extends UUID {}
const treeUUID = new TreeUUID();

// 树节点对象
export default class TreeNode {
  public uuid: string; // 唯一标识
  public children: TreeNode[]; // 子节点
  public parent: TreeNode; // 父节点
  public level: number; // 树中层数

  constructor({ uuid = treeUUID.getID() }) {
    this.uuid = uuid;
    this.children = [];
    this.parent = null;
    this.level = 1;
  }

  // 设置树状图的节点的层级信息。
  protected setLevel(level: number): void {
    this.level = level;
    // 设置子节点的层级信息
    if (this.children.length > 0) {
      for (const val of this.children) {
        val.setLevel(this.level + 1);
      }
    }
  }

  // 设置父节点
  public setParent(np: TreeNode): boolean {
    try {
      if (this.parent !== np) {
        const origin = this.parent;
        origin.removeChild(this);
        this.parent = np;
        np.addChild(this);
      } else {
        throw record("exist", "Setting different value of parent");
      }
      return true;
    } catch (error) {
      return false;
    }
  }

  // 添加子节点
  public addChild(tree: TreeNode, noLimit: boolean = true): boolean {
    let has: boolean = false;
    if (noLimit) {
      has = !!this.children.find((val) => {
        return tree.uuid === val.uuid;
      });
    }
    if (!has) {
      if (tree.parent !== this) {
        return tree.setParent(this);
      } else {
        this.children.push(tree);
        tree.setLevel(this.level + 1);
        return true;
      }
    }
    return false;
  }

  // 删除子节点内容。
  public removeChild(tree: TreeNode): boolean {
    if (this.children.length > 0) {
      const index = this.children.findIndex((val) => {
        return val.uuid === tree.uuid;
      });
      if (index >= 0) {
        this.children.splice(index, 1);
        return true;
      }
    }
    return false;
  }
}
