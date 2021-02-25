import TreeNode from "./treeNode";
import { nodeSetting } from "./type";

// 树结构管理，包括维护一系列的数据指向，以及依据配置创建新的树内容。依据diff改变存储信息等等。
class TreeManager<T extends TreeNode> {
  private tree: T | TreeNode; // 当前树状图的信息节点与节点间关系。
  private nodes: Map<string, T | TreeNode>; // 方便快速查找节点
  private treeType: { new (setting?: nodeSetting): T | TreeNode }; // 当前树几点的构造函数。

  constructor(
    setting: nodeSetting, // 树配置信息
    constructoe: { new (setting: nodeSetting): T | TreeNode } = TreeNode // 构造函数，
  ) {
    this.treeType = constructoe;
    this.nodes = new Map<string, T | TreeNode>();
    this.tree = this.createNode(setting);
  }

  /**
   * 依据设置创建树状图。
   * @param setting 树状图设置
   */
  protected createNode<T>(setting: nodeSetting): T | TreeNode {
    // 依据设置创建此节点
    const node = new this.treeType(setting);
    this.nodes.set(node.uuid, node);

    // 获取子节点的配置信息
    const children = setting.children;
    let res: Array<T | TreeNode> = [];
    // 构建子节点对象
    if (children && Array.isArray(children)) {
      // 遍历当前子节点设置。
      res = children.reduce((total, val) => {
        total.push(this.createNode<T>(val));
        return total;
      }, res);
    }
    res.forEach((val: T | TreeNode) => {
      node.addChild(<TreeNode>val);
    });
    return node;
  }

  /**
   * 获取指定的node对象。
   * @param uuid 唯一标识符
   */
  getNode(uuid: string) {
    return this.nodes.get(uuid);
  }
}
