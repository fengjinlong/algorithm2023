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

function fl(head) {
  let prev = null;
  let current = head;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

const flipLink2 = (head) => {
  let prev = null;
  let current = head;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
function f3(head) {
  let prev = null;
  let current = head;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

function f4(head) {
  let prev = null;
  let current = head;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

function re(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

function ree(head) {
  let prev = null;
  let current = head;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return next;
}

function ree(head) {
  // body...
  let prev = null;
  let current = head;
  let next = null;
  while (current) {
    next = current.next;
    // 断指针
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}
