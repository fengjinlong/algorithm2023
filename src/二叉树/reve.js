import { createTree } from "./tree.js";
function inverTree(tree) {
  if (!tree) return null;
  let left = inverTree(tree.left);
  let right = inverTree(tree.right);
  tree.left = right;
  tree.right = left;
  return tree;
}
const arr = [1, 2, 3];

const tree1 = createTree(arr);
const tree2 = inverTree(createTree(arr));
console.log("tree1", tree1);
console.log("tree1", tree2);
