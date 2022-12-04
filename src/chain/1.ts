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
  val: 2,
  next: {
    val: 4,
    next: {
      val: 6,
      next: null,
    },
  },
};
function merge(l1: any, l2: any) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.val < l2.val) {
    l1.next = merge(l1.next, l2);
    return l1;
  } else {
    l2.next = merge(l1, l2.next);
    return l2;
  }
}
merge(chain1, chain2);
// console.log("chain1", chain1);
// console.log("chain2", chain2);

// 坏链
function hasCycle(head) {
  while (head) {
    if (head.flag) {
      return true;
    }
    head.flag = true;
    head = head.next;
  }
}
// 利用 JSON.stringify() 不能序列化含有循环引用的结构
var hasCycle1 = function (head) {
  try {
    JSON.stringify(head);
    return false;
  } catch (err) {
    return true;
  }
};

/**
 * 找到两个单链表相交的起始节点
 *  chain3
 * 先排除长度差
 *
 */
const chain3 = {
  val: 7,
  next: null,
};
const chain12 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 5,
      next: chain3,
    },
  },
};
const chain22 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 6,
      next: chain3,
    },
  },
};
const getIntersectionNode = function (headA, headB) {
  let pa = headA;
  let pb = headB;
  while (pa || pb) {
    if (pa === pb) {
      return pa;
    }
    pa = pa === null ? headB : pa.next;
    pb = pb === null ? headA : pb.next;
  }
  return null;
};
console.log(getIntersectionNode(chain12, chain22));
