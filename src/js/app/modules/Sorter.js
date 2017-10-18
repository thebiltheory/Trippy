import { minItem, applyDiscount, toMinutes } from '../utils/helpers';

// export const route = [];

const shortestRoute = (previousSmallest, smallest) => {
  return previousSmallest.filter((dest) => {
    if (dest.arrival === smallest) {
      const { cost, discount } = dest;
      const { h: hours, m: minutes } = dest.duration;

      // console.log(hours, minutes);

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

export const sorter = (mode, previous, smallest) => {
  const stops = shortestRoute(previous, smallest);

  let stop = {};
  switch (mode) {
    case 'cheapest': {
      stop = minItem(stops, 'cost');
      break;
    }
    case 'fastest': {
      stop = minItem(stops, 'duration', 'total');
      break;
    }
    default: {
      stop = minItem(stops, 'cost');
    }
  }

  return stop;
};

export const test = a => a;
