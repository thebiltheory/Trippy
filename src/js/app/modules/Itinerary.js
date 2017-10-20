import PriorityQueue from './PriorityQueue';
import { sorter } from './Sorter';
import { totalSum } from '../utils/helpers';

/**
 * Creates a new Itinerary (path)
 * @class Itinerary
 * @reference https://brilliant.org/wiki/dijkstras-short-path-finder/
 * @reference https://leanpub.com/computer-science-distilled
 */
export default class Itinerary {
  constructor(trips) {
    this.vertices = trips;
    // this.mode = mode; // Cheapest/Fastest
    this.nodes = new PriorityQueue();
    this.distances = {};
    this.previous = {};
    this.smallest = null;
    this.route = [];
  }

  findRoute(mode, departure, arrival) {
    const adj = (neighbor, alt) => {
      this.distances[neighbor] = alt;
      this.previous[neighbor] = this.smallest;
      return this.nodes.enqueue(neighbor, alt);
    };

    const setPriority = (vertex, priority) => {
      this.distances[vertex] = priority;
      return this.nodes.enqueue(vertex, priority);
    };

    Object.keys(this.vertices).forEach((vertex) => {
      if (vertex === departure) {
        setPriority(vertex, 0);
      } else {
        setPriority(vertex, Infinity);
      }
      this.previous[vertex] = null;
    });

    while (!this.nodes.isEmpty()) {
      this.smallest = this.nodes.dequeue();

      if (this.smallest === arrival) {
        while (this.previous[this.smallest]) {
          // const travelMode = this.mode;
          const previousS = this.vertices[this.previous[this.smallest]];
          const smallest = this.smallest;
          const stop = sorter(mode, previousS, smallest);
          this.route.push(stop);
          this.smallest = this.previous[this.smallest];
        }
        break;
      }

      if (!this.smallest || this.distances[this.smallest] === Infinity) {
        continue;
      }

      this.vertices[this.smallest].map((a) => {
        const alt = this.distances[this.smallest];
        alt < this.distances[a.arrival] && adj(a.arrival, alt);
        return true;
      });
    }

    // console.table(this.route.reverse());
    return this.route.reverse();
  }
}
