class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
function ct(arr) {
  let len = arr.length;
  const tree = new Node(arr[0]);
  const nodes = [tree];
  let i = 1;
  for (const node of nodes) {
    node.left = new Node(arr[i]);
    nodes.push(node.left);
    i++;
    if (i >= arr.len) break;
    node.right = new Node(arr[i]);
    nodes.push(node.right);
    i++;
    if (i >= len) break;
  }
  return tree;
}

// 深度遍历
function dep(tree) {
  if (!tree) return null;
  // 根左右
  // console.log("tree.val", tree.val);
  dep(tree.left);
  // 左根右
  // console.log("tree.val", tree.val);
  dep(tree.right);
  // 左右根
  console.log("tree.val", tree.val);
}
const arr = [1, 2, 3, 4, 5];
const t1 = ct(arr);

// console.log("t1", t1);
dep(t1);
