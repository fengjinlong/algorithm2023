function re(head) {
  let prev = null;
  let next = null;
  let current = head;
  while (current) {
    // 设置 next 为当前节点的下一个节点
    next = current.next;
    // 断开当前节点 与 下个节点的连接，并将当前节点的 next 指向 prev
    current.next = prev;
    // 设置 prev 为当前节点
    prev = current;
    // 设置当前节点为 next（步进）
    current = next;
  }
  // 返回 prev
  return prev;
}

const tree = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null,
    },
  },
};
console.log("re(tree)", re(tree));
function re(head) {
  let current = head;
  let next = null;
  let prev = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

function re(head) {
  let current = head;
  let next = null;
  let prev = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

function re(head) {
  let current = head;
  let next = null;
  let prev = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}
