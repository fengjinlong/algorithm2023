/**
 * @description: 反转链表，ob
 * @param {*} head
 * @return {*}
 */
const flipLink = (head) => {
  let prev = null;
  let current = head;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev; // 断开当前节点的指针，指向前一个节点
    prev = current;
    current = next;
  }
  return prev;
};
