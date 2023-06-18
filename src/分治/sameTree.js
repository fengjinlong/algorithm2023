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
const isSameTree11 = (t1, t2) => {
  if (t1 === null && t2 === null) return true;
  if (t1 === null || t2 === null) return false;
  if (t1.val !== t2.val) return false;
  return isSameTree11(t1.left, t2.left) && isSameTree11(t1.right, t2.right);
};
const isSameTree2 = (tree1, tree2) => {
  if (tree1 === null && tree2 === null) return true;
  if (tree1 === null || tree2 === null) return false;
  if (tree1.val !== tree2.val) return false;
  return (
    isSameTree1(tree1.left, tree2.left) && isSameTree1(tree1.right, tree1.right)
  );
};

const isSameTree3 = (tree1, tree2) => {
  if (tree1 === null && tree2 === null) return true;
  if (tree1 === null || tree2 === null) return false;
  if (tree1.val !== tree2.val) return false;
  return (
    isSameTree3(tree1.left, tree2.left) && isSameTree3(tree1.right, tree2.right)
  );
};
const ist = (t1, t2) => {
  if (t1 === null && t2 === null) return true;
  if (t1 === null || t2 === null) return false;
  if (t1.val !== t2.val) return false;
  return ist(t1.left, t2.left) && ist(t1.right, t2.right);
};
