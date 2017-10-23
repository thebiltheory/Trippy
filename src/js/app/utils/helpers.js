/**
 * @file Set and export helpers
 * @author thebiltheory
 */

/** @function applyDiscount */
export const applyDiscount = (price, discount) => price - (price * (discount / 100));

/** @function minItem */
export const minItem = array => array.reduce((prev, curr) => {
  return prev.cost < curr.cost ? prev : curr;
});

/** @function minDuration */
export const minDuration = array => array.reduce((prev, curr) => {
  return prev.duration.total < curr.duration.total ? prev : curr;
});

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

/** @function toHours */
export const toHours = (minutes) => {
  const minToHours = minutes / 60;
  const hours = Math.round(Math.floor(minToHours));
  const minCalc = Math.ceil((minToHours - (Math.round(Math.floor(minToHours)))) * 60);
  const min = minCalc < 10 ? `0${minCalc}` : minCalc;

  return `${hours}H${min}`;
};

/** @function totalSum */
export const totalSum = (array) => array.reduce((acc, current) => {
  return acc + current;
});

/** @function append */
export const append = (id, element) => {
  const doc = new DOMParser().parseFromString(element, 'text/html');
  const html = doc.body.firstChild;
  document.getElementById(id).appendChild(html);
};

/** @function getValue */
export const getValue = (id) => {
  return document.getElementById(id).value;
};

/** @function getRadioValue */
export const getRadioValue = (name) => {
  const radios = [...document.getElementsByName(name)];
  let mode = null;
  for (let i = 0; i < radios.length; i += 1) {
    if (radios[i].checked) {
      mode = radios[i].value;
      return mode;
    }
  }
};

/** @function listenTo */
export const listenTo = (id, event, callback) => {
  return document.getElementById(id).addEventListener(event, callback);
};

/** @function resetHtml */
export const resetHtml = (id) => {
  document.getElementById(id).innerHTML = '';
}

/** @function docReady */
export const docReady = (initFn) => {
  document.addEventListener('DOMContentLoaded', initFn);
};
