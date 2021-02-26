import TreeNode from "./treeNode";

// 深度遍历算法
export default function* deepIterator<T extends TreeNode>(
  tree: T,
  reverse: boolean = false
) {
  if (!reverse) {
    yield tree;
  }
  if (tree.children.length > 0) {
    for (const val of tree.children) {
      yield* deepIterator(val, reverse);
    }
  }
  if (reverse) {
    yield tree;
  }
}
