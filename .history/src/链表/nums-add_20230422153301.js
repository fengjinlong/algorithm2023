/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var addTwoNumbers = function (l1, l2) {
  let carry = 0; // 进位
  let result = new ListNode(0);
  let current = result;
  while (l1 || l2 || carry) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;
    let sum = val1 + val2 + carry;
    carry = sum >= 10 ? 1 : 0;
    current.next = new ListNode(sum % 10);
    current = current.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return result.next;
};
// let l1 = [2, 4, 3], l2 = [5, 6, 4];
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const add = (l1, l2) => {
  let carry = 0;
  let result = new ListNode(0);
  let current = result;
  while (l1 || l2 || carry) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;
    let sum = val1 + val2 + carry;
    carry = sum >= 10 ? 1 : 0;
    current.next = new ListNode(sum % 10);
    current = current.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return result.next;
};

const add1 = (l1, l2) => {
  let cary = 0;
  let result = new ListNode(0);
  let current = result;
  while (l1 || l2 || carry) {
    let val1 = l1.val ? l1.val : 0;
    let val2 = l2.val ? l2.val : 0;
    let sum = val1 + val2 + carry;
    carry = sum > 9 ? 1 : 0;
    current.next = new ListNode(sum % 10);
    current = current.next;
    l1 = l1.next ? l1.next : null;
    l2 = l2.next ? l2.next : null;
  }
  return result.next;
};
const add2 = (l1, l2) => {};
