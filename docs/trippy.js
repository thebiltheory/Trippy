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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(7);
module.exports = __webpack_require__(8);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Itinerary = __webpack_require__(2);

var _Itinerary2 = _interopRequireDefault(_Itinerary);

var _helpers = __webpack_require__(4);

var _api = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deals = '../response.json';
var trippy = {
  init: function init() {
    // Init destinations
    // Init UI
    // Init App

    this.getItinerary('cheapest', 'Stockholm', 'Madrid');
  },
  getItinerary: function getItinerary(mode, departure, arrival) {
    var trips = (0, _api.trippyGet)(deals);
    trips.then(function (cities) {
      var currency = cities.currency,
          deals = cities.deals;

      var destinations = (0, _helpers.groupBy)(deals, 'departure');
      var route = new _Itinerary2.default(destinations);

      return route.findRoute(mode, departure, arrival);
    });
  },
  cheapestItinerary: function cheapestItinerary() {},
  fastestItinerary: function fastestItinerary() {}
};

trippy.init();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PriorityQueue = __webpack_require__(3);

var _PriorityQueue2 = _interopRequireDefault(_PriorityQueue);

var _Sorter = __webpack_require__(13);

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
            // const travelMode = this.mode;
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

      console.table(this.route.reverse());
      return this.route.reverse();
    }
  }]);

  return Itinerary;
}();

exports.default = Itinerary;

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file Set and export helpers
 * @author thebiltheory
 */

/** @function applyDiscount */
var applyDiscount = exports.applyDiscount = function applyDiscount(price, discount) {
  return price - price * (discount / 100);
};

/** @function minItem */
var minItem = exports.minItem = function minItem(array, key) {
  return array.reduce(function (a, b) {
    return a[key] <= b[key] ? a : b;
  }, {});
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

/** @function totalSum */
var totalSum = exports.totalSum = function totalSum(array) {
  return array.reduce(function (acc, current) {
    return acc + current;
  });
};

/***/ }),
/* 5 */,
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

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <!-- <link rel=\"stylesheet\" href=\"./css/trippy.css\"> -->\n  <title>Trippy</title>\n</head>\n<body>\n\n  <h1>trippy</h1>\n  <h3>Trip sorter</h3>\n  <h3>Trip sorter</h3>\n  <h3>Trip sorter</h3>\n  <h3>Trip sorter</h3>\n  <h3>Trip sorter</h3>\n  <h3>Trip sorter</h3>\n\n<!-- <script src=\"./js/trippy.js\" type=\"text/javascript\"></script> -->\n<script id=\"__bs_script__\">//<![CDATA[\n    document.write(\"<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.18.13'><\\/script>\".replace(\"HOST\", location.hostname));\n//]]></script>\n</body>\n</html>\n";

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = exports.sorter = undefined;

var _helpers = __webpack_require__(4);

// export const route = [];

var shortestRoute = function shortestRoute(previousSmallest, smallest) {
  return previousSmallest.filter(function (dest) {
    if (dest.arrival === smallest) {
      var cost = dest.cost,
          discount = dest.discount;
      var _dest$duration = dest.duration,
          hours = _dest$duration.h,
          minutes = _dest$duration.m;

      // console.log(hours, minutes);

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
        stop = (0, _helpers.minItem)(stops, 'duration', 'total');
        break;
      }
    default:
      {
        stop = (0, _helpers.minItem)(stops, 'cost');
      }
  }

  return stop;
};

var test = exports.test = function test(a) {
  return a;
};

/***/ })
/******/ ]);
//# sourceMappingURL=trippy.js.map