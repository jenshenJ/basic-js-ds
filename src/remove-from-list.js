const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let head = l;
  
  let prev = null;
  while(l){
    if(l.value === k){ removeNode(l, prev); prev = null; l = head; continue;}
    prev = l;
    l = l.next;
  }
  return head;

  function removeNode(node, prev){
      if(prev == null){
        head = node.next;
        node = null;
        return;
      }

      if(node.next == null){
        prev.next = null;
        return;
      }

      prev.next = node.next;
      node = null;
  }

}

module.exports = {
  removeKFromList
};
