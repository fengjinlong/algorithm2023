import { createTree } from "./tree.js";

// 深度遍历
function dep(tree) {
  if (!tree) return null;
  // console.log("tree.val", tree.val);
  dep(tree.left);
  // console.log("tree.val", tree.val);
  dep(tree.right);
  console.log("tree.val", tree.val);
}
const arr = [1, 2, 3, 4, 5];
const t1 = createTree(arr);

console.log("t1", t1);
dep(t1);

function dep1(tree) {
  if (!tree) return null;
  dep(tree.left);
  dep(tree.right);
}

function deep(tree) {
  if (!tree) return null;
  deep(tree.left);
  deep(tree.right);
}
