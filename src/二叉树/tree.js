class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
export const createTree = (arr) => {
  let tree = new Node(arr[0]);
  const nodes = [tree];
  let i = 1;
  for (const node of nodes) {
    node.left = new Node(arr[i]);
    nodes.push(node.left);
    i++;
    if (i >= arr.length) {
      break;
    }
    node.right = new Node(arr[i]);
    nodes.push(node.right);
    i++;
    if (i >= arr.length) {
      break;
    }
  }
  return tree;
};
// console.log("tree", createTree([1, null, 2, 3]));

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class Node1 {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
function createTree(arr) {
  let tree = new Node(arr[0]);
  const nodes = [tree];
  let i = 1;
  for (const node of nodes) {
    node.left = new Node(arr[i]);
    nodes.push(node.left);
    i++;
    if (i >= arr.length) {
      break;
    }
    node.right = new Node(arr[i]);
    nodes.push(node.right);
    i++;
    if (i >= arr.length) {
      break;
    }
    if (i >= arr.length) {
      break;
    }
  }
  return tree;
}
function createTree(arr) {
  let tree = new Node(arr[0]);
  const nodes = [tree];
  let i = 1;
  for (const node of nodes) {
    node.left = new Node(arr[i]);
    nodes.push(node.left);
    i++;
    if (i >= arr.length) {
      break;
    }
    node.right = new Node(arr[i]);
    nodes.push(node.right);
    i++;
    if (i >= arr.length) {
      break;
    }
    if (i >= arr.length) {
      break;
    }
  }
  return tree;
}
