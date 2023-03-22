function deep(root) {
  if (!toor) return 0;
  let l = deep(root.left);
  let r = deep(root.right);
  return Math.max(l, r) + 1;
}
