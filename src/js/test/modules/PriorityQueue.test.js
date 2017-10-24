import assert from 'Chai';
import PriorityQueue from '../../app/modules/PriorityQueue';

describe('PriorityQueue', function () {
  it('Should enqueue and sort nodes', function () {
    const nodes = new PriorityQueue();

    nodes.enqueue('Tokyo', Infinity);
    nodes.enqueue('Konoha', Infinity);
    nodes.enqueue('Brussels', 0);
    nodes.enqueue('Gotham', Infinity);
    nodes.enqueue('Kiev', Infinity);

    return nodes[0] === 'Brussels';
  })

  it('Should return the first element of the nodes', function() {
    const nodes = new PriorityQueue();

    nodes.enqueue('Tokyo', 0);
    nodes.enqueue('Konoha', Infinity);
    nodes.enqueue('Brussels', Infinity);

    return nodes.dequeue() === 'Tokyo';
  })

  it('Should return true if the nodes are empty', function () {
    const nodes = new PriorityQueue();

    return nodes.isEmpty();
  })

  it('Should return false if nodes is full', function () {
    const nodes = new PriorityQueue();

    nodes.enqueue('Tokyo', 0);
    nodes.enqueue('Konoha', Infinity);
    nodes.enqueue('Brussels', Infinity);

    return !nodes.isEmpty();
  })
});
