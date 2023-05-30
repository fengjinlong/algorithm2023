const chain1 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 5,
      next: null,
    },
  },
};
const chain2 = {
  val: 1,
  next: {
    val: 4,
    next: {
      val: 6,
      next: null,
    },
  },
};
function m(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  if (l1.val < l2.val) {
    l1.next = m(l1.next, l2);
    return l1;
  } else {
    l2.next = m(l1, l2.next);
    return l2;
  }
}
function merge(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  if (l1.val < l2.val) {
    l1.next = merge(l1.next, l2);
    return l1;
  } else {
    l2.next = merge(l1, l2.next);
    return l2;
  }
}
console.log(JSON.stringify(merge(chain1, chain2)));
