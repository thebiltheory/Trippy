/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @file Set and export helpers
 * @author thebiltheory
 */

/** @function applyDiscount */
var applyDiscount = exports.applyDiscount = function applyDiscount(price, discount) {
  return price - price * (discount / 100);
};

/** @function minItem */
var minItem = exports.minItem = function minItem(array) {
  return array.reduce(function (prev, curr) {
    return prev.cost < curr.cost ? prev : curr;
  });
};

/** @function minDuration */
var minDuration = exports.minDuration = function minDuration(array) {
  return array.reduce(function (prev, curr) {
    return prev.duration.total < curr.duration.total ? prev : curr;
  });
};

/** @function groupBy */
/* Reference for future me
 * https://www.consolelog.io/group-by-in-javascript
 */
var groupBy = exports.groupBy = function groupBy(array, key) {
  return array.reduce(function (groups, item) {
    var trip = item[key];
    groups[trip] = groups[trip] || [];
    groups[trip].push(item);
    return groups;
  }, {});
};

/** @function toMinutes */
var toMinutes = exports.toMinutes = function toMinutes(hours, minutes) {
  return 60 * parseInt(hours, 10) + parseInt(minutes, 10);
};

/** @function toHours */
var toHours = exports.toHours = function toHours(minutes) {
  var minToHours = minutes / 60;
  var hours = Math.round(Math.floor(minToHours));
  var minCalc = Math.ceil((minToHours - Math.round(Math.floor(minToHours))) * 60);
  var min = minCalc < 10 ? '0' + minCalc : minCalc;

  return hours + 'H' + min;
};

/** @function totalSum */
var totalSum = exports.totalSum = function totalSum(array) {
  return array.reduce(function (acc, current) {
    return acc + current;
  });
};

/** @function append */
var append = exports.append = function append(id, element) {
  var doc = new DOMParser().parseFromString(element, 'text/html');
  var html = doc.body.firstChild;
  document.getElementById(id).appendChild(html);
};

/** @function getValue */
var getValue = exports.getValue = function getValue(id) {
  return document.getElementById(id).value;
};

/** @function getRadioValue */
var getRadioValue = exports.getRadioValue = function getRadioValue(name) {
  var radios = [].concat(_toConsumableArray(document.getElementsByName(name)));
  var mode = null;
  for (var i = 0; i < radios.length; i += 1) {
    if (radios[i].checked) {
      mode = radios[i].value;
      return mode;
    }
  }
};

/** @function listenTo */
var listenTo = exports.listenTo = function listenTo(id, event, callback) {
  return document.getElementById(id).addEventListener(event, callback);
};

/** @function resetHtml */
var resetHtml = exports.resetHtml = function resetHtml(id) {
  document.getElementById(id).innerHTML = '';
};

/** @function docReady */
var docReady = exports.docReady = function docReady(initFn) {
  document.addEventListener('DOMContentLoaded', initFn);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
__webpack_require__(10);
module.exports = __webpack_require__(11);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Itinerary = __webpack_require__(3);

var _Itinerary2 = _interopRequireDefault(_Itinerary);

var _helpers = __webpack_require__(0);

var _api = __webpack_require__(6);

var _card = __webpack_require__(7);

var _card2 = _interopRequireDefault(_card);

var _form = __webpack_require__(8);

var _form2 = _interopRequireDefault(_form);

var _oops = __webpack_require__(9);

var _oops2 = _interopRequireDefault(_oops);

var _total = __webpack_require__(16);

var _total2 = _interopRequireDefault(_total);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deals = '../response.json';

var trippy = {
  renderList: function renderList(values) {
    var _this = this;

    var mode = values.mode,
        departure = values.departure,
        arrival = values.arrival;


    if (departure === arrival) {
      var oops = (0, _oops2.default)();
      (0, _helpers.append)('board-list', oops);
    } else {
      this.getItinerary(mode, departure, arrival).then(function (itinerary) {
        var totalTrip = {
          departure: departure,
          arrival: arrival,
          cost: 0,
          duration: 0
        };

        itinerary.forEach(function (card, i) {
          totalTrip.cost += card.cost;
          totalTrip.duration += card.duration.total;

          setTimeout(function () {
            _this.renderCard(card);
          }, 100 * i);
        });

        return totalTrip;
      }).then(function (total) {
        var departure = total.departure,
            arrival = total.arrival,
            cost = total.cost,
            duration = total.duration;

        var renderTotalData = {
          departure: departure,
          arrival: arrival,
          cost: cost,
          duration: (0, _helpers.toHours)(duration)
        };

        _this.renderTotal(renderTotalData);
      });
    }
  },
  loadDestinations: function loadDestinations() {
    var _this2 = this;

    var getCities = (0, _api.trippyGet)(deals);
    var allCities = [];
    var cities = [];

    getCities.then(function (dest) {
      dest.deals.map(function (city) {
        allCities.push(city.departure);
        allCities.push(city.arrival);
      });
    }).then(function () {
      // Runs after all cities have been pushed
      allCities.forEach(function (city) {
        if (!cities.includes(city)) {
          cities.push(city);
        }
      });
    }).then(function () {
      _this2.renderForm({ cities: cities });
    });

    return { cities: cities };
  },
  renderCard: function renderCard(itinerary) {
    var card = (0, _card2.default)(itinerary);
    (0, _helpers.append)('board-list', card);
  },
  renderTotal: function renderTotal(totalData) {
    (0, _helpers.resetHtml)('trip-total');
    var total = (0, _total2.default)(totalData);
    (0, _helpers.append)('trip-total', total);
  },
  renderForm: function renderForm(data) {
    var form = (0, _form2.default)(data);
    (0, _helpers.append)('trip-form-wrapper', form);
  },
  formValues: function formValues() {
    var formVal = {
      departure: (0, _helpers.getValue)('trip-from'),
      arrival: (0, _helpers.getValue)('trip-to'),
      mode: (0, _helpers.getRadioValue)('trip-mode')
    };

    return formVal;
  },
  getItinerary: function getItinerary(mode, departure, arrival) {
    var trips = (0, _api.trippyGet)(deals);

    return trips.then(function (cities) {
      var currency = cities.currency,
          deals = cities.deals;

      var destinations = (0, _helpers.groupBy)(deals, 'departure');
      var route = new _Itinerary2.default(destinations);

      return route.findRoute(mode, departure, arrival);
    });
  },
  watchForm: function watchForm() {
    var _this3 = this;

    (0, _helpers.listenTo)('trip-form-wrapper', 'change', function (e) {
      e.preventDefault();

      var _formValues = _this3.formValues(),
          departure = _formValues.departure,
          arrival = _formValues.arrival;

      if (departure && arrival !== '') {
        document.getElementById('trip-button').disabled = false;
      } else if (!departure && arrival || departure && !arrival) {
        document.getElementById('trip-button').disabled = true;
      }
    });

    (0, _helpers.listenTo)('trip-form-wrapper', 'submit', function (e) {
      e.preventDefault();
      (0, _helpers.resetHtml)('board-list');
      _this3.renderList(_this3.formValues());
    });
  },
  init: function init() {
    this.loadDestinations();
    this.watchForm();
  }
};

(0, _helpers.docReady)(function () {
  trippy.init();
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PriorityQueue = __webpack_require__(4);

var _PriorityQueue2 = _interopRequireDefault(_PriorityQueue);

var _Sorter = __webpack_require__(5);

var _helpers = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Creates a new Itinerary (path)
 * @class Itinerary
 * @reference https://brilliant.org/wiki/dijkstras-short-path-finder/
 * @reference https://leanpub.com/computer-science-distilled
 */
var Itinerary = function () {
  function Itinerary(trips) {
    _classCallCheck(this, Itinerary);

    this.vertices = trips;
    // this.mode = mode; // Cheapest/Fastest
    this.nodes = new _PriorityQueue2.default();
    this.distances = {};
    this.previous = {};
    this.smallest = null;
    this.route = [];
  }

  _createClass(Itinerary, [{
    key: 'findRoute',
    value: function findRoute(mode, departure, arrival) {
      var _this = this;

      var adj = function adj(neighbor, alt) {
        _this.distances[neighbor] = alt;
        _this.previous[neighbor] = _this.smallest;
        return _this.nodes.enqueue(neighbor, alt);
      };

      var setPriority = function setPriority(vertex, priority) {
        _this.distances[vertex] = priority;
        return _this.nodes.enqueue(vertex, priority);
      };

      Object.keys(this.vertices).forEach(function (vertex) {
        if (vertex === departure) {
          setPriority(vertex, 0);
        } else {
          setPriority(vertex, Infinity);
        }
        _this.previous[vertex] = null;
      });

      while (!this.nodes.isEmpty()) {
        this.smallest = this.nodes.dequeue();

        if (this.smallest === arrival) {
          while (this.previous[this.smallest]) {
            var previousS = this.vertices[this.previous[this.smallest]];
            var smallest = this.smallest;
            var stop = (0, _Sorter.sorter)(mode, previousS, smallest);
            this.route.push(stop);
            this.smallest = this.previous[this.smallest];
          }
          break;
        }

        if (!this.smallest || this.distances[this.smallest] === Infinity) {
          continue;
        }

        this.vertices[this.smallest].map(function (a) {
          var alt = _this.distances[_this.smallest];
          alt < _this.distances[a.arrival] && adj(a.arrival, alt);
          return true;
        });
      }

      return this.route.reverse();
    }
  }]);

  return Itinerary;
}();

exports.default = Itinerary;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Minimalist Priority Queue. */
var PriorityQueue = function () {
  function PriorityQueue() {
    _classCallCheck(this, PriorityQueue);

    this.nodes = [];
  }

  /**
   * Enqueue a new element to the Queue
   * @param {value} key value of the key item
   * @param {number} priority set the priority of the item
   */


  _createClass(PriorityQueue, [{
    key: "enqueue",
    value: function enqueue(key, priority) {
      this.nodes.push({ key: key, priority: priority });
      this.sort();
    }

    /**
     * Dequeue the first element
     * @return {value}
     */

  }, {
    key: "dequeue",
    value: function dequeue() {
      return this.nodes.shift().key;
    }

    /**
     * Sort the node Queue
     */

  }, {
    key: "sort",
    value: function sort() {
      this.nodes.sort(function (a, b) {
        return a.priority - b.priority;
      });
    }
    /**
     * Sort the node Queue
     * @return {Boolean}
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return !this.nodes.length;
    }
  }]);

  return PriorityQueue;
}();

exports.default = PriorityQueue;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sorter = undefined;

var _helpers = __webpack_require__(0);

// export const route = [];

var shortestRoute = function shortestRoute(previousSmallest, smallest) {
  return previousSmallest.filter(function (dest) {
    if (dest.arrival === smallest) {
      var cost = dest.cost,
          discount = dest.discount;
      var _dest$duration = dest.duration,
          hours = _dest$duration.h,
          minutes = _dest$duration.m;

      return Object.assign(dest, {
        cost: discount ? (0, _helpers.applyDiscount)(cost, discount) : cost,
        initialPrice: cost,
        duration: {
          h: hours,
          m: minutes,
          total: (0, _helpers.toMinutes)(hours, minutes)
        }
      });
    }
    return false;
  });
};

var sorter = exports.sorter = function sorter(mode, previous, smallest) {
  var stops = shortestRoute(previous, smallest);

  var stop = {};
  switch (mode) {
    case 'cheapest':
      {
        stop = (0, _helpers.minItem)(stops, 'cost');
        break;
      }
    case 'fastest':
      {
        stop = (0, _helpers.minDuration)(stops, 'duration');
        break;
      }
    default:
      {
        stop = (0, _helpers.minItem)(stops);
      }
  }

  return stop;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @function trippyGet api call to als endpointde
 * @param {url} endpoint for example purpose response.json
 */
var trippyGet = exports.trippyGet = function trippyGet(endpoint) {
  var headers = new Headers();
  var init = {
    method: 'GET',
    status: 200,
    statusText: 'Yep, found it!',
    headers: headers,
    mode: 'no-cors',
    cache: 'default'
  };

  var request = new Request(endpoint, init);

  return fetch(request).then(function (response) {
    return response.json();
  });
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function anonymous(locals, filters, escape, rethrow) {
    escape = escape || function(html) {
        return String(html).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
    };
    var __stack = {
        lineno: 1,
        input: '<li class="board-card" data-ref="<%= reference %>">\n  <div class="header-card">\n    <div class="departure">\n      <h4><%= departure %></h4>\n    </div>\n    <div class="from-to-icon">\n\n      <% if (transport === \'train\') { %>\n        <i class="ion-android-train"></i>\n        <% } else{ %>\n          <i class="ion-android-bus"></i>\n        <% } %>\n\n        <div class="dots"></div>\n\n    </div>\n    <div class="arrival">\n      <h4><%= arrival %></h4>\n    </div>\n  </div>\n  <div class="footer-card">\n    <div class="reference">\n      <span>Reference</span>\n      <%= reference %>\n    </div>\n\n    <div class="transport">\n      <span>Transport</span>\n      <%= transport %>\n    </div>\n\n    <div class="duration">\n      <span>Duration</span>\n      <%= duration.h %>H<%= duration.m %>\n    </div>\n\n    <div class="cost">\n      <span>Cost</span>\n      <%= cost %>\n    </div>\n\n  </div>\n</li>\n',
        filename: "."
    };
    function rethrow(err, str, filename, lineno) {
        var lines = str.split("\n"), start = Math.max(lineno - 3, 0), end = Math.min(lines.length, lineno + 3);
        var context = lines.slice(start, end).map(function(line, i) {
            var curr = i + start + 1;
            return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
        }).join("\n");
        err.path = filename;
        err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
        throw err;
    }
    try {
        var buf = [];
        with (locals || {}) {
            (function() {
                buf.push('<li class="board-card" data-ref="', escape((__stack.lineno = 1, reference)), '">\n  <div class="header-card">\n    <div class="departure">\n      <h4>', escape((__stack.lineno = 4, departure)), '</h4>\n    </div>\n    <div class="from-to-icon">\n\n      ');
                __stack.lineno = 8;
                if (transport === "train") {
                    buf.push('\n        <i class="ion-android-train"></i>\n        ');
                    __stack.lineno = 10;
                } else {
                    buf.push('\n          <i class="ion-android-bus"></i>\n        ');
                    __stack.lineno = 12;
                }
                buf.push('\n\n        <div class="dots"></div>\n\n    </div>\n    <div class="arrival">\n      <h4>', escape((__stack.lineno = 18, arrival)), '</h4>\n    </div>\n  </div>\n  <div class="footer-card">\n    <div class="reference">\n      <span>Reference</span>\n      ', escape((__stack.lineno = 24, reference)), '\n    </div>\n\n    <div class="transport">\n      <span>Transport</span>\n      ', escape((__stack.lineno = 29, transport)), '\n    </div>\n\n    <div class="duration">\n      <span>Duration</span>\n      ', escape((__stack.lineno = 34, duration.h)), "H", escape((__stack.lineno = 34, duration.m)), '\n    </div>\n\n    <div class="cost">\n      <span>Cost</span>\n      ', escape((__stack.lineno = 39, cost)), "\n    </div>\n\n  </div>\n</li>\n");
            })();
        }
        return buf.join("");
    } catch (err) {
        rethrow(err, __stack.input, __stack.filename, __stack.lineno);
    }
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function anonymous(locals, filters, escape, rethrow) {
    escape = escape || function(html) {
        return String(html).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
    };
    var __stack = {
        lineno: 1,
        input: '<form id="trip-form" class="form-horizontal">\n<!-- Select Basic -->\n<div class="form-group">\n  <div class="col">\n    <select id="trip-from" name="selectbasic" class="form-control">\n      <option value="">From</option>\n      <% cities.forEach(function(city){ %>\n        <option value="<%= city %>"><%= city %></option>\n      <% }); %>\n    </select>\n  </div>\n  <div class="col">\n    <select id="trip-to" name="selectbasic" class="form-control">\n      <option value="">To</option>\n      <% cities.forEach(function(city){ %>\n        <option value="<%= city %>"><%= city %></option>\n      <% }); %>\n    </select>\n  </div>\n</div>\n\n<!-- Multiple Radios (inline) -->\n<div class="form-group" id="trip-mode">\n  <label class="radio-inline" for="cheapest">\n    <input type="radio" name="trip-mode" id="cheapest" value="cheapest" checked>\n    Cheapest\n  </label>\n  <label class="radio-inline" for="fastest">\n    <input type="radio" name="trip-mode" id="fastest" value="fastest">\n    Fastest\n  </label>\n</div>\n\n<!-- Button -->\n<div class="form-group">\n  <button id="trip-button" name="singlebutton" class="btn btn-primary" disabled>Let\'s Go</button>\n</div>\n</form>\n',
        filename: "."
    };
    function rethrow(err, str, filename, lineno) {
        var lines = str.split("\n"), start = Math.max(lineno - 3, 0), end = Math.min(lines.length, lineno + 3);
        var context = lines.slice(start, end).map(function(line, i) {
            var curr = i + start + 1;
            return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
        }).join("\n");
        err.path = filename;
        err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
        throw err;
    }
    try {
        var buf = [];
        with (locals || {}) {
            (function() {
                buf.push('<form id="trip-form" class="form-horizontal">\n<!-- Select Basic -->\n<div class="form-group">\n  <div class="col">\n    <select id="trip-from" name="selectbasic" class="form-control">\n      <option value="">From</option>\n      ');
                __stack.lineno = 7;
                cities.forEach(function(city) {
                    buf.push('\n        <option value="', escape((__stack.lineno = 8, city)), '">', escape((__stack.lineno = 8, city)), "</option>\n      ");
                    __stack.lineno = 9;
                });
                buf.push('\n    </select>\n  </div>\n  <div class="col">\n    <select id="trip-to" name="selectbasic" class="form-control">\n      <option value="">To</option>\n      ');
                __stack.lineno = 15;
                cities.forEach(function(city) {
                    buf.push('\n        <option value="', escape((__stack.lineno = 16, city)), '">', escape((__stack.lineno = 16, city)), "</option>\n      ");
                    __stack.lineno = 17;
                });
                buf.push('\n    </select>\n  </div>\n</div>\n\n<!-- Multiple Radios (inline) -->\n<div class="form-group" id="trip-mode">\n  <label class="radio-inline" for="cheapest">\n    <input type="radio" name="trip-mode" id="cheapest" value="cheapest" checked>\n    Cheapest\n  </label>\n  <label class="radio-inline" for="fastest">\n    <input type="radio" name="trip-mode" id="fastest" value="fastest">\n    Fastest\n  </label>\n</div>\n\n<!-- Button -->\n<div class="form-group">\n  <button id="trip-button" name="singlebutton" class="btn btn-primary" disabled>Let\'s Go</button>\n</div>\n</form>\n');
            })();
        }
        return buf.join("");
    } catch (err) {
        rethrow(err, __stack.input, __stack.filename, __stack.lineno);
    }
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function anonymous(locals, filters, escape, rethrow) {
    escape = escape || function(html) {
        return String(html).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
    };
    var __stack = {
        lineno: 1,
        input: '<li>\n  <img src="https://media.giphy.com/media/KayVJ5lkB84rm/giphy.gif" alt="Great Scott ! ">\n</li>\n',
        filename: "."
    };
    function rethrow(err, str, filename, lineno) {
        var lines = str.split("\n"), start = Math.max(lineno - 3, 0), end = Math.min(lines.length, lineno + 3);
        var context = lines.slice(start, end).map(function(line, i) {
            var curr = i + start + 1;
            return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
        }).join("\n");
        err.path = filename;
        err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
        throw err;
    }
    try {
        var buf = [];
        with (locals || {}) {
            (function() {
                buf.push('<li>\n  <img src="https://media.giphy.com/media/KayVJ5lkB84rm/giphy.gif" alt="Great Scott ! ">\n</li>\n');
            })();
        }
        return buf.join("");
    } catch (err) {
        rethrow(err, __stack.input, __stack.filename, __stack.lineno);
    }
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <link rel=\"stylesheet\" href=\"http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css\">\n  <link href=\"https://fonts.googleapis.com/css?family=Montserrat:400,500,700\" rel=\"stylesheet\">\n  <!-- <link rel=\"stylesheet\" href=\"./css/trippy.css\"> -->\n  <title>Trippy</title>\n</head>\n<body>\n\n<div id=\"trippy-app\">\n  <div id=\"trip-form-wrapper\"></div>\n  <div id=\"trip-total\"></div>\n  <ul id=\"board-list\"></ul>\n</div>\n\n<!-- <script src=\"./js/trippy.js\" type=\"text/javascript\"></script> -->\n<script id=\"__bs_script__\">//<![CDATA[\n    document.write(\"<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.18.13'><\\/script>\".replace(\"HOST\", location.hostname));\n//]]></script>\n</body>\n</html>\n";

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

module.exports = function anonymous(locals, filters, escape, rethrow) {
    escape = escape || function(html) {
        return String(html).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
    };
    var __stack = {
        lineno: 1,
        input: '<div class="trip-total">\n\n  <div class="trip-summary">\n    <span class="label">Trip Summary</span>\n    <div class="trip-route">\n      <span><%= departure %></span>\n      <i class="ion-arrow-right-c"></i>\n      <span><%= arrival %></span>\n    </div>\n  </div>\n  <div class="trip-cost-wrapper">\n    <div class="trip-cost">\n      <span class="label">Total</span>\n      <span><%= cost %>€</span>\n    </div>\n    <div class="trip-duration">\n      <span class="label">Duration</span>\n      <span><%= duration %></span>\n    </div>\n  </div>\n\n</div>\n',
        filename: "."
    };
    function rethrow(err, str, filename, lineno) {
        var lines = str.split("\n"), start = Math.max(lineno - 3, 0), end = Math.min(lines.length, lineno + 3);
        var context = lines.slice(start, end).map(function(line, i) {
            var curr = i + start + 1;
            return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
        }).join("\n");
        err.path = filename;
        err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
        throw err;
    }
    try {
        var buf = [];
        with (locals || {}) {
            (function() {
                buf.push('<div class="trip-total">\n\n  <div class="trip-summary">\n    <span class="label">Trip Summary</span>\n    <div class="trip-route">\n      <span>', escape((__stack.lineno = 6, departure)), '</span>\n      <i class="ion-arrow-right-c"></i>\n      <span>', escape((__stack.lineno = 8, arrival)), '</span>\n    </div>\n  </div>\n  <div class="trip-cost-wrapper">\n    <div class="trip-cost">\n      <span class="label">Total</span>\n      <span>', escape((__stack.lineno = 14, cost)), '€</span>\n    </div>\n    <div class="trip-duration">\n      <span class="label">Duration</span>\n      <span>', escape((__stack.lineno = 18, duration)), "</span>\n    </div>\n  </div>\n\n</div>\n");
            })();
        }
        return buf.join("");
    } catch (err) {
        rethrow(err, __stack.input, __stack.filename, __stack.lineno);
    }
}

/***/ })
/******/ ]);
//# sourceMappingURL=trippy.js.map