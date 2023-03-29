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

const sy = (root) => {
  const check = (left, right) => {
    if (!left && !right) return true;
    if (!left || !right) return false;
    return (
      left.val === right.val &&
      check(left.left, right.right) &&
      check(left.right, right.left)
    );
  };
  return check(root.left, root.right);
};

const isSame = (root) => {
  const check = (left, right) => {
    if (!left && !right) return true;
    if (!left || !right) return false;
    return (
      left.val === right.val &&
      check(left.left, left.right) &&
      check(right.left, right.right)
    );
  };
  return check(root.left, root.right);
};
