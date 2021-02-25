import TreeNode from "./treeNode";

// 深度遍历算法
export default function* deepIteration<T extends TreeNode>(
  tree: T,
  reserve: boolean = false
) {
  if (!reserve) {
    yield tree;
  }
  if (tree.children.length > 0) {
    for (const val of tree.children) {
      yield* deepIteration(val, reserve);
    }
  }
  if (reserve) {
    yield tree;
  }
}
