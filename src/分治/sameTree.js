/**
 * @description: 是否是相同的 tree
 * @param {*} tree1
 * @param {*} tree2
 * @return {*}
 */
function isSameTree(tree1, tree2) {
  if (tree1 === null && tree2 === null) return true;
  if (tree1 === null || tree2 === null) return false;
  if (tree1.val !== tree2.val) return false;
  return (
    isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right)
  );
}

const isSameTree1 = (tree1, tree2) => {
  if (tree1 === null && tree2 === null) return true;
  if (tree1 === null || tree2 === null) return false;
  if (tree1.val !== tree2.val) return false;
  return (
    isSameTree1(tree1.left, tree2.left) && isSameTree1(tree1.right, tree2.right)
  );
};

const isSameTree2 = (tree1, tree2) => {
  if (tree1 === null && tree2 === null) return true;
  if (tree1 === null || tree2 === null) return false;
  if (tree1.val !== tree2.val) return false;
  return (
    isSameTree1(tree1.left, tree2.left) && isSameTree1(tree1.right, tree1.right)
  );
};
