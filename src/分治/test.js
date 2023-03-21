const f = (root) => {
  if (!root) return null;
  const left = f(root.left);
  const right = f(root.right);
  root.left = right;
  root.right = left;
  return root;
};
