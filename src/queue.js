const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  underList = null;
  getUnderlyingList() {
    return this.underList;
  }

  enqueue(value) {
    if(this.underList == null) this.underList = new ListNode(value);
    else{
      let copy = this.underList;
      while(copy.next){
        copy = copy.next;
      }
      copy.next = new ListNode(value);
    }
  }

  dequeue() {
    if(this.underList){
      let data = this.underList.value;
      this.underList = this.underList.next;
      return data;
    }
    return null;
  }
}


module.exports = {
  Queue
};
