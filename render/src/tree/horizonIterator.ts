import TreeNode from "./treeNode";

export default function* horizenIterator<T extends TreeNode>(
  tree: T | TreeNode,
  reverse: boolean = false
) {
  // 统计出树的每一层信息
  const levels: Map<number, Array<T | TreeNode>> = new Map();

  // 获取每层几点对象
  const toHierarchy = function (tree: T | TreeNode) {
    // 获取levels之中的
    let res = levels.get(tree.level);
    if (!res) {
      res = [];
      levels.set(tree.level, res);
    }
    res.push(tree);

    tree.children.forEach((val) => {
      toHierarchy(val);
    });
  };
  toHierarchy(tree);
  let keys: Array<number> = Array.from(levels.keys());
  if (reverse) keys = keys.reverse();

  for (const val of keys) {
    for (const item of levels.get(val)) {
      yield item;
    }
  }
}
