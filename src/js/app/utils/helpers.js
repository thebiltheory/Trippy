/**
 * @file Set and export helpers
 * @author thebiltheory
 */

/** @function applyDiscount */
export const applyDiscount = (price, discount) => price - (price * (discount / 100));

/** @function minItem */
export const minItem = (array, ...args) => {
  const keys = args.join('.');
  return array.sort((a, b) => {
    return a[keys] - b[keys];
  })[0];
};

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
