function reviver(head) {
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
