/**
 * @file Set and export helpers
 * @author thebiltheory
 */

/** @function applyDiscount */
export const applyDiscount = (price, discount) => price - (price * (discount / 100));

/** @function minItem */
export const minItem = (array, key) => array.reduce((a, b) => {
  return a[key] <= b[key] ? a : b;
}, {});

/** @function groupBy */
/* Reference for future me
 * https://www.consolelog.io/group-by-in-javascript
 */
export const groupBy = (array, key) => {
  return array.reduce((groups, item) => {
    const trip = item[key];
    groups[trip] = groups[trip] || [];
    groups[trip].push(item);
    return groups;
  }, {});
};

/** @function toMinutes */
export const toMinutes = (hours, minutes) => {
  return (60 * parseInt(hours, 10)) + parseInt(minutes, 10);
};

/** @function totalSum */
export const totalSum = (array) => array.reduce((acc, current) => {
  return acc + current;
});
