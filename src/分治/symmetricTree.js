import { tree } from "./flipTree.js";

const symmetricTree = (root) => {
  const chect = (left, right) => {
    if (!left && !right) return true;
    if (!left || !right) return false;
    return (
      left.val === right.val &&
      chect(left.left, right.right) &&
      chect(left.right, right.left)
    );
  };
  return chect(root.left, root.right);
};

console.log("symmetricTree", symmetricTree(tree));
