import deepIterator from "./deepIterator";
import horizenIterator from "./horizonIterator";
import TreeNode from "./treeNode";

export type nodeSetting = {
  uuid?: string;
  children?: [];
};

// 树结构管理，包括维护一系列的数据指向，以及依据配置创建新的树内容。依据diff改变存储信息等等。
export default class TreeManager<T extends TreeNode> {
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
  public getNode(uuid: string): T | TreeNode {
    return this.nodes.get(uuid);
  }

  /**
   * 返回可遍历对象，用于不同方式遍历树
   * @param deep 是否进行深度遍历
   * @param reverse 是否反向遍历
   * @param tree 遍历开始的节点
   */
  private *iterator(
    deep: boolean,
    reverse: boolean = false,
    tree: T | TreeNode = this.tree
  ) {
    if (deep) {
      yield* deepIterator(tree, reverse);
    } else {
      yield* horizenIterator(tree, reverse);
    }
  }

  /**
   * 遍历树内容
   */
  public each(
    operation: Function,
    deep: boolean = true,
    reverse: boolean = false
  ): void {
    for (const val of this.iterator(deep, reverse, this.tree)) {
      operation(val);
    }
  }
  public eachByDeep(operation: Function): void {
    this.each(operation);
  }
  public eachByDeepFromRev(operation: Function): void {
    this.each(operation, true, false);
  }
  public eachByHor(operation: Function): void {
    this.each(operation, false);
  }
  public eachByHorFromRev(operation: Function): void {
    this.each(operation, false, false);
  }
}
