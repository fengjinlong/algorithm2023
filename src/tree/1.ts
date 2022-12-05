/**
 * 前序遍历
 * 递归 fun1
 * 迭代 fun2
 */

const fun1 = (root) => {
  let result = [];
  const preOrder = (root) => {
    if (root) {
      console.log(root.val);
      preOrder(root.left);
      preOrder(root.right);
    }
  };
};

const fun2 = (root) => {
  let strck = [];
  let list = [];
  if (root) strck.push(root);
  while (strck.length) {
    let node = strck.pop();
    list.push(node.val);
    if (node.right) strck.push(node.right);
    if (node.left) strck.push(node.left);
  }
  return list;
};
