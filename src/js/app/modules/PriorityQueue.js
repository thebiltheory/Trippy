/** Minimalist Priority Queue. */
export default class PriorityQueue {
  constructor() {
    this.nodes = [];
  }

  /**
   * Enqueue a new element to the Queue
   * @param {value} key value of the key item
   * @param {number} priority set the priority of the item
   */
  enqueue(key, priority) {
    this.nodes.push({ key, priority });
    this.sort();
  }

  /**
   * Dequeue the first element
   * @return {value}
   */
  dequeue() {
    return this.nodes.shift().key;
  }

  /**
   * Sort the node Queue
   */
  sort() {
    this.nodes.sort((a, b) => a.priority - b.priority);
  }
  /**
   * Sort the node Queue
   * @return {Boolean}
   */
  isEmpty() {
    return !this.nodes.length;
  }
}
