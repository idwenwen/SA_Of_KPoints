import record from "../exception/index";
import Tree from "./index";

function getTreesByLevel(tree: Tree, level: number) {
  const rootLevel = tree.level;
  const between = level - rootLevel;

  if (between < rootLevel)
    throw record("oversize", "Level need to be bigger than tree node is given");

  const res: Array<Tree> = [];
}

function* horizenIterator() {}
