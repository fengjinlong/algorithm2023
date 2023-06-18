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
class Node1 {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
function createTreee(arr) {
  const tree = new Node1(arr[0]);
  const nodes = [tree];
  let i = 1;
  for (const node of nodes) {
    node.left = new Node1(arr[i]);
    nodes.push(node.left);
    i++;
    if (i >= arr.length) {
      break;
    }
    node.right = new Node1(arr[i]);
    i++;
    if (i >= arr.length) {
      break;
    }
  }
  return tree;
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const arrr = [1, 2, 3, 4, 5];
function ct(arr) {
  let len = arr.length;
  const tree = new Node(arr[0]);
  const nodes = [tree];
  let i = 1;
  for (const node of nodes) {
    node.left = new Node(arr[i]);
    nodes.push(node.left);
    i++;
    if (i >= arr.len) return;
    node.right = new Node(arr[i]);
    nodes.push(node.right);
    i++;
    if (i >= len) return;
  }
  return tree;
}

function createTree(arr) {
  const tree = new Node(arr[0]);
  const nodes = [tree];
  let i = 1;
  for (const node of nodes) {
    node.left = new Node(arr[i]);
    nodes.push(node.left);
    i++;
    if (i >= arr.length) break;
    node.right = new Node(arr[i]);
    nodes.push(node.right);
    i++;
    if (i >= arr.length) break;
  }
  return tree;
}
function ct(arr) {
  const tree = new Node(arr[0]);
  const nodes = [tree];
  let i = 1;
  for (const node of nodes) {
    node.left = new Node(arr[i]);
    nodes.push(node.left);
    i++;
    if (i >= arr.length) break;
    node.right = new Node(arr[i]);
    nodes.push(node.right);
    i++;
    if (i >= arr.length) break;
  }
  return tree;
}

function setTree(arr) {
  let tree = new Node(arr[0]);
  let nodes = [tree];
  let i = 1;
  for (const node of nodes) {
    let n = new Node(arr[i]);
    node.left = n;
    nodes.push(n);
    i++;
    if (i === arr.length) break;
    let n1 = new Node(arr[i]);
    node.right = n1;
    nodes.push(n1);
    i++;
    if (i === arr.length) break;
  }
  return tree;
}
