/**
 * @description: 翻转二叉树
 * @param {*} root
 * @return {*}
 */
const flipTree = (root) => {
  if (!root) return null;
  const left = flipTree(root.left);
  const right = flipTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};
export const tree = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  right: {
    val: 7,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 9,
      left: null,
      right: null,
    },
  },
};
console.log("tree", flipTree(tree));
