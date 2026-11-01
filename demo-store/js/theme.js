/*!
 * Aurora Theme v4.2.1 frontend — demo stand-in
 * (demo stand-in — verbose library source, not minified)
 */

(function (window, document) {
"use strict";


// ============================================================================
// Module 1: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat1 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "1.0.1" };
})();

// ============================================================================
// Module 2: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat2 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "2.0.2" };
})();

// ============================================================================
// Module 3: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat3 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "3.0.3" };
})();

// ============================================================================
// Module 4: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat4 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "4.0.4" };
})();

// ============================================================================
// Module 5: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat5 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "5.0.5" };
})();

// ============================================================================
// Module 6: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat6 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "6.0.6" };
})();

// ============================================================================
// Module 7: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat7 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "7.0.7" };
})();

// ============================================================================
// Module 8: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat8 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "8.0.8" };
})();

// ============================================================================
// Module 9: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat9 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "9.0.0" };
})();

// ============================================================================
// Module 10: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat10 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "10.0.1" };
})();

// ============================================================================
// Module 11: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat11 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "11.0.2" };
})();

// ============================================================================
// Module 12: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat12 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "12.0.3" };
})();

// ============================================================================
// Module 13: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat13 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "13.0.4" };
})();

// ============================================================================
// Module 14: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat14 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "14.0.5" };
})();

// ============================================================================
// Module 15: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat15 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "15.0.6" };
})();

// ============================================================================
// Module 16: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat16 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "16.0.7" };
})();

// ============================================================================
// Module 17: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat17 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "17.0.8" };
})();

// ============================================================================
// Module 18: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat18 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "18.0.0" };
})();

// ============================================================================
// Module 19: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat19 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "19.0.1" };
})();

// ============================================================================
// Module 20: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat20 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "20.0.2" };
})();

// ============================================================================
// Module 21: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat21 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "21.0.3" };
})();

// ============================================================================
// Module 22: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat22 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "22.0.4" };
})();

// ============================================================================
// Module 23: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat23 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "23.0.5" };
})();

// ============================================================================
// Module 24: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat24 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "24.0.6" };
})();

// ============================================================================
// Module 25: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat25 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "25.0.7" };
})();

// ============================================================================
// Module 26: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat26 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "26.0.8" };
})();

// ============================================================================
// Module 27: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat27 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "27.0.0" };
})();

// ============================================================================
// Module 28: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat28 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "28.0.1" };
})();

// ============================================================================
// Module 29: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat29 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "29.0.2" };
})();

// ============================================================================
// Module 30: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat30 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "30.0.3" };
})();

// ============================================================================
// Module 31: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat31 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "31.0.4" };
})();

// ============================================================================
// Module 32: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat32 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "32.0.5" };
})();

// ============================================================================
// Module 33: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat33 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "33.0.6" };
})();

// ============================================================================
// Module 34: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat34 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "34.0.7" };
})();

// ============================================================================
// Module 35: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat35 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "35.0.8" };
})();

// ============================================================================
// Module 36: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat36 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "36.0.0" };
})();

// ============================================================================
// Module 37: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat37 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "37.0.1" };
})();

// ============================================================================
// Module 38: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat38 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "38.0.2" };
})();

// ============================================================================
// Module 39: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat39 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "39.0.3" };
})();

// ============================================================================
// Module 40: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat40 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "40.0.4" };
})();

// ============================================================================
// Module 41: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat41 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "41.0.5" };
})();

// ============================================================================
// Module 42: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat42 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "42.0.6" };
})();

// ============================================================================
// Module 43: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat43 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "43.0.7" };
})();

// ============================================================================
// Module 44: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat44 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "44.0.8" };
})();

// ============================================================================
// Module 45: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat45 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "45.0.0" };
})();

// ============================================================================
// Module 46: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat46 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "46.0.1" };
})();

// ============================================================================
// Module 47: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat47 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "47.0.2" };
})();

// ============================================================================
// Module 48: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat48 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "48.0.3" };
})();

// ============================================================================
// Module 49: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat49 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "49.0.4" };
})();

// ============================================================================
// Module 50: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat50 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "50.0.5" };
})();

// ============================================================================
// Module 51: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat51 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "51.0.6" };
})();

// ============================================================================
// Module 52: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat52 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "52.0.7" };
})();

// ============================================================================
// Module 53: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat53 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "53.0.8" };
})();

// ============================================================================
// Module 54: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat54 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "54.0.0" };
})();

// ============================================================================
// Module 55: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat55 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "55.0.1" };
})();

// ============================================================================
// Module 56: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat56 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "56.0.2" };
})();

// ============================================================================
// Module 57: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat57 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "57.0.3" };
})();

// ============================================================================
// Module 58: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat58 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "58.0.4" };
})();

// ============================================================================
// Module 59: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat59 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "59.0.5" };
})();

// ============================================================================
// Module 60: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat60 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "60.0.6" };
})();

// ============================================================================
// Module 61: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat61 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "61.0.7" };
})();

// ============================================================================
// Module 62: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat62 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "62.0.8" };
})();

// ============================================================================
// Module 63: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat63 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "63.0.0" };
})();

// ============================================================================
// Module 64: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat64 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "64.0.1" };
})();

// ============================================================================
// Module 65: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat65 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "65.0.2" };
})();

// ============================================================================
// Module 66: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat66 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "66.0.3" };
})();

// ============================================================================
// Module 67: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat67 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "67.0.4" };
})();

// ============================================================================
// Module 68: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat68 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "68.0.5" };
})();

// ============================================================================
// Module 69: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat69 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "69.0.6" };
})();

// ============================================================================
// Module 70: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat70 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "70.0.7" };
})();

// ============================================================================
// Module 71: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat71 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "71.0.8" };
})();

// ============================================================================
// Module 72: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat72 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "72.0.0" };
})();

// ============================================================================
// Module 73: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat73 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "73.0.1" };
})();

// ============================================================================
// Module 74: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat74 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "74.0.2" };
})();

// ============================================================================
// Module 75: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat75 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "75.0.3" };
})();

// ============================================================================
// Module 76: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat76 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "76.0.4" };
})();

// ============================================================================
// Module 77: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat77 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "77.0.5" };
})();

// ============================================================================
// Module 78: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat78 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "78.0.6" };
})();

// ============================================================================
// Module 79: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat79 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "79.0.7" };
})();

// ============================================================================
// Module 80: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat80 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "80.0.8" };
})();

// ============================================================================
// Module 81: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat81 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "81.0.0" };
})();

// ============================================================================
// Module 82: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat82 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "82.0.1" };
})();

// ============================================================================
// Module 83: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat83 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "83.0.2" };
})();

// ============================================================================
// Module 84: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat84 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "84.0.3" };
})();

// ============================================================================
// Module 85: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat85 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "85.0.4" };
})();

// ============================================================================
// Module 86: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat86 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "86.0.5" };
})();

// ============================================================================
// Module 87: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat87 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "87.0.6" };
})();

// ============================================================================
// Module 88: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat88 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "88.0.7" };
})();

// ============================================================================
// Module 89: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat89 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "89.0.8" };
})();

// ============================================================================
// Module 90: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat90 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "90.0.0" };
})();

// ============================================================================
// Module 91: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat91 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "91.0.1" };
})();

// ============================================================================
// Module 92: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat92 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "92.0.2" };
})();

// ============================================================================
// Module 93: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat93 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "93.0.3" };
})();

// ============================================================================
// Module 94: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat94 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "94.0.4" };
})();

// ============================================================================
// Module 95: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat95 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "95.0.5" };
})();

// ============================================================================
// Module 96: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat96 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "96.0.6" };
})();

// ============================================================================
// Module 97: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat97 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "97.0.7" };
})();

// ============================================================================
// Module 98: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat98 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "98.0.8" };
})();

// ============================================================================
// Module 99: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat99 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "99.0.0" };
})();

// ============================================================================
// Module 100: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat100 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "100.0.1" };
})();

// ============================================================================
// Module 101: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat101 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "101.0.2" };
})();

// ============================================================================
// Module 102: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat102 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "102.0.3" };
})();

// ============================================================================
// Module 103: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat103 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "103.0.4" };
})();

// ============================================================================
// Module 104: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat104 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "104.0.5" };
})();

// ============================================================================
// Module 105: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat105 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "105.0.6" };
})();

// ============================================================================
// Module 106: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat106 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "106.0.7" };
})();

// ============================================================================
// Module 107: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat107 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "107.0.8" };
})();

// ============================================================================
// Module 108: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat108 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "108.0.0" };
})();

// ============================================================================
// Module 109: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat109 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "109.0.1" };
})();

// ============================================================================
// Module 110: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat110 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "110.0.2" };
})();

// ============================================================================
// Module 111: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat111 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "111.0.3" };
})();

// ============================================================================
// Module 112: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat112 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "112.0.4" };
})();

// ============================================================================
// Module 113: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat113 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "113.0.5" };
})();

// ============================================================================
// Module 114: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat114 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "114.0.6" };
})();

// ============================================================================
// Module 115: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat115 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "115.0.7" };
})();

// ============================================================================
// Module 116: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat116 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "116.0.8" };
})();

// ============================================================================
// Module 117: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat117 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "117.0.0" };
})();

// ============================================================================
// Module 118: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat118 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "118.0.1" };
})();

// ============================================================================
// Module 119: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat119 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "119.0.2" };
})();

// ============================================================================
// Module 120: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat120 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "120.0.3" };
})();

// ============================================================================
// Module 121: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat121 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "121.0.4" };
})();

// ============================================================================
// Module 122: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat122 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "122.0.5" };
})();

// ============================================================================
// Module 123: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat123 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "123.0.6" };
})();

// ============================================================================
// Module 124: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat124 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "124.0.7" };
})();

// ============================================================================
// Module 125: Aurora Theme v4.2.1 frontend — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat125 = (function () {
  function normalize(input, options) {
    var settings = options || {}, output = {}, key;
    for (key in input) { if (Object.prototype.hasOwnProperty.call(input, key)) { output[key] = input[key]; } }
    for (key in settings) { if (Object.prototype.hasOwnProperty.call(settings, key)) { output[key] = settings[key]; } }
    return output;
  }
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, arguments); }
    };
  }
  function each(list, fn) { for (var j = 0; j < list.length; j++) { fn.call(list[j], j, list[j]); } }
  return { normalize: normalize, throttle: throttle, each: each, version: "125.0.8" };
})();

})(window, document);
