function B() {
  let Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };
  let root = null;
  this.insert = function (key) {
    let newNode = new Node(key);
    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };
  this.search = function (key) {
    return searchNode(root, key);
  };
  this.remove = function (key) {
    root = removeNode(root, key);
  };
}
function removeNode(root: any, key: any) {
  if (root === null) {
    return null;
  }
  if (key < root.key) {
    root.left = removeNode(root.left, key);
    return root;
  }
  if (key > root.key) {
    root.right = removeNode(root.right, key);
    return root;
  }
  if (root.left === null && root.right === null) {
    root = null;
    return root;
  }
  if (root.left === null) {
    root = root.right;
    return root;
  }
  if (root.right === null) {
    root = root.left;
    return root;
  }
  let aux = findMinNode(root.right);
  root.key = aux.key;
  root.right = removeNode(root.right, aux.key);
  return root;
}
function findMinNode(node: any) {
  if (node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  }
  return null;
}
function insertNode(root: any, newNode: any) {
  if (newNode.key < root.key) {
    if (root.left === null) {
      root.left = newNode;
    } else {
      insertNode(root.left, newNode);
    }
  } else {
    if (root.right === null) {
      root.right = newNode;
    } else {
      insertNode(root.right, newNode);
    }
  }
}
function searchNode(root: any, key: any) {
  if (root === null) {
    return false;
  }
  if (key < root.key) {
    return searchNode(root.left, key);
  }
  if (key > root.key) {
    return searchNode(root.right, key);
  }
  return true;
}
