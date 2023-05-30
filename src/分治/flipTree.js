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
const f = (root) => {
  if (!root) return null;
  const left = f(root.left);
  const right = f(root.right);
  root.left = right;
  root.right = left;
  return root;
};
function fliptree2(tree) {
  if (!tree) return null;
  const left = fliptree2(tree.left);
  const right = fliptree2(tree.right);
  tree.left = right;
  tree.right = left;
  return root;
}
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
