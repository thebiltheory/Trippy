import { minItem, minDuration, applyDiscount, toMinutes } from '../utils/helpers';

const shortestRoute = (previousSmallest, smallest) => {
  return previousSmallest.filter((dest) => {
    if (dest.arrival === smallest) {
      const { cost, discount } = dest;
      const { h: hours, m: minutes } = dest.duration;
      return Object.assign(dest, {
        cost: discount ? applyDiscount(cost, discount) : cost,
        initialPrice: cost,
        duration: {
          h: hours,
          m: minutes,
          total: toMinutes(hours, minutes),
        },
      });
    }
    return false;
  });
};

/** @function sorter
 * @param {string} mode cheapest or fastest
 * @param {obj} previous smallest elements
 * @param {string} smallest item of the nodes
 */
export const sorter = (mode, previous, smallest) => {
  const stops = shortestRoute(previous, smallest);

  let stop = {};
  switch (mode) {
    case 'cheapest': {
      stop = minItem(stops, 'cost');
      console.log(stop.cost);
      break;
    }
    case 'fastest': {
      stop = minDuration(stops, 'duration');
      break;
    }
    default: {
      stop = minItem(stops);
    }
  }

  return stop;
};
