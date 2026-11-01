/*!
 * jQuery v1.12.4 — demo stand-in
 * (demo stand-in — verbose library source, not minified)
 */

(function (window, document) {
"use strict";


// ============================================================================
// Module 1: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 2: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 3: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 4: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 5: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 6: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 7: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 8: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 9: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 10: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 11: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 12: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 13: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 14: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 15: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 16: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 17: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 18: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 19: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 20: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 21: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 22: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 23: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 24: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 25: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 26: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 27: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 28: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 29: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 30: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 31: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 32: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 33: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 34: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 35: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 36: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 37: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 38: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 39: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 40: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 41: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 42: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 43: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 44: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 45: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 46: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 47: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 48: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 49: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 50: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 51: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 52: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 53: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 54: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 55: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 56: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 57: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 58: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 59: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 60: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 61: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 62: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 63: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 64: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 65: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 66: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 67: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 68: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 69: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 70: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 71: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 72: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 73: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 74: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 75: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 76: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 77: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 78: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 79: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 80: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 81: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 82: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 83: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 84: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 85: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 86: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 87: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 88: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 89: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 90: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 91: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 92: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 93: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 94: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 95: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 96: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 97: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 98: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 99: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 100: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 101: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 102: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 103: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 104: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 105: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 106: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 107: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 108: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 109: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 110: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 111: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 112: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 113: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 114: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 115: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 116: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 117: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 118: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 119: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 120: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 121: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 122: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 123: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 124: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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
// Module 125: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
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

// ============================================================================
// Module 126: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat126 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "126.0.0" };
})();

// ============================================================================
// Module 127: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat127 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "127.0.1" };
})();

// ============================================================================
// Module 128: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat128 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "128.0.2" };
})();

// ============================================================================
// Module 129: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat129 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "129.0.3" };
})();

// ============================================================================
// Module 130: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat130 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "130.0.4" };
})();

// ============================================================================
// Module 131: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat131 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "131.0.5" };
})();

// ============================================================================
// Module 132: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat132 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "132.0.6" };
})();

// ============================================================================
// Module 133: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat133 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "133.0.7" };
})();

// ============================================================================
// Module 134: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat134 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "134.0.8" };
})();

// ============================================================================
// Module 135: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat135 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "135.0.0" };
})();

// ============================================================================
// Module 136: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat136 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "136.0.1" };
})();

// ============================================================================
// Module 137: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat137 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "137.0.2" };
})();

// ============================================================================
// Module 138: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat138 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "138.0.3" };
})();

// ============================================================================
// Module 139: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat139 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "139.0.4" };
})();

// ============================================================================
// Module 140: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat140 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "140.0.5" };
})();

// ============================================================================
// Module 141: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat141 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "141.0.6" };
})();

// ============================================================================
// Module 142: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat142 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "142.0.7" };
})();

// ============================================================================
// Module 143: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat143 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "143.0.8" };
})();

// ============================================================================
// Module 144: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat144 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "144.0.0" };
})();

// ============================================================================
// Module 145: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat145 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "145.0.1" };
})();

// ============================================================================
// Module 146: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat146 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "146.0.2" };
})();

// ============================================================================
// Module 147: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat147 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "147.0.3" };
})();

// ============================================================================
// Module 148: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat148 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "148.0.4" };
})();

// ============================================================================
// Module 149: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat149 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "149.0.5" };
})();

// ============================================================================
// Module 150: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat150 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "150.0.6" };
})();

// ============================================================================
// Module 151: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat151 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "151.0.7" };
})();

// ============================================================================
// Module 152: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat152 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "152.0.8" };
})();

// ============================================================================
// Module 153: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat153 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "153.0.0" };
})();

// ============================================================================
// Module 154: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat154 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "154.0.1" };
})();

// ============================================================================
// Module 155: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat155 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "155.0.2" };
})();

// ============================================================================
// Module 156: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat156 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "156.0.3" };
})();

// ============================================================================
// Module 157: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat157 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "157.0.4" };
})();

// ============================================================================
// Module 158: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat158 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "158.0.5" };
})();

// ============================================================================
// Module 159: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat159 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "159.0.6" };
})();

// ============================================================================
// Module 160: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat160 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "160.0.7" };
})();

// ============================================================================
// Module 161: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat161 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "161.0.8" };
})();

// ============================================================================
// Module 162: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat162 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "162.0.0" };
})();

// ============================================================================
// Module 163: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat163 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "163.0.1" };
})();

// ============================================================================
// Module 164: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat164 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "164.0.2" };
})();

// ============================================================================
// Module 165: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat165 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "165.0.3" };
})();

// ============================================================================
// Module 166: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat166 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "166.0.4" };
})();

// ============================================================================
// Module 167: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat167 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "167.0.5" };
})();

// ============================================================================
// Module 168: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat168 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "168.0.6" };
})();

// ============================================================================
// Module 169: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat169 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "169.0.7" };
})();

// ============================================================================
// Module 170: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat170 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "170.0.8" };
})();

// ============================================================================
// Module 171: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat171 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "171.0.0" };
})();

// ============================================================================
// Module 172: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat172 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "172.0.1" };
})();

// ============================================================================
// Module 173: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat173 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "173.0.2" };
})();

// ============================================================================
// Module 174: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat174 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "174.0.3" };
})();

// ============================================================================
// Module 175: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat175 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "175.0.4" };
})();

// ============================================================================
// Module 176: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat176 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "176.0.5" };
})();

// ============================================================================
// Module 177: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat177 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "177.0.6" };
})();

// ============================================================================
// Module 178: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat178 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "178.0.7" };
})();

// ============================================================================
// Module 179: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat179 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "179.0.8" };
})();

// ============================================================================
// Module 180: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat180 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "180.0.0" };
})();

// ============================================================================
// Module 181: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat181 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "181.0.1" };
})();

// ============================================================================
// Module 182: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat182 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "182.0.2" };
})();

// ============================================================================
// Module 183: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat183 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "183.0.3" };
})();

// ============================================================================
// Module 184: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat184 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "184.0.4" };
})();

// ============================================================================
// Module 185: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat185 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "185.0.5" };
})();

// ============================================================================
// Module 186: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat186 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "186.0.6" };
})();

// ============================================================================
// Module 187: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat187 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "187.0.7" };
})();

// ============================================================================
// Module 188: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat188 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "188.0.8" };
})();

// ============================================================================
// Module 189: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat189 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "189.0.0" };
})();

// ============================================================================
// Module 190: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat190 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "190.0.1" };
})();

// ============================================================================
// Module 191: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat191 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "191.0.2" };
})();

// ============================================================================
// Module 192: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat192 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "192.0.3" };
})();

// ============================================================================
// Module 193: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat193 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "193.0.4" };
})();

// ============================================================================
// Module 194: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat194 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "194.0.5" };
})();

// ============================================================================
// Module 195: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat195 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "195.0.6" };
})();

// ============================================================================
// Module 196: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat196 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "196.0.7" };
})();

// ============================================================================
// Module 197: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat197 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "197.0.8" };
})();

// ============================================================================
// Module 198: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat198 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "198.0.0" };
})();

// ============================================================================
// Module 199: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat199 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "199.0.1" };
})();

// ============================================================================
// Module 200: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat200 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "200.0.2" };
})();

// ============================================================================
// Module 201: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat201 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "201.0.3" };
})();

// ============================================================================
// Module 202: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat202 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "202.0.4" };
})();

// ============================================================================
// Module 203: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat203 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "203.0.5" };
})();

// ============================================================================
// Module 204: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat204 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "204.0.6" };
})();

// ============================================================================
// Module 205: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat205 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "205.0.7" };
})();

// ============================================================================
// Module 206: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat206 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "206.0.8" };
})();

// ============================================================================
// Module 207: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat207 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "207.0.0" };
})();

// ============================================================================
// Module 208: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat208 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "208.0.1" };
})();

// ============================================================================
// Module 209: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat209 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "209.0.2" };
})();

// ============================================================================
// Module 210: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat210 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "210.0.3" };
})();

// ============================================================================
// Module 211: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat211 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "211.0.4" };
})();

// ============================================================================
// Module 212: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat212 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "212.0.5" };
})();

// ============================================================================
// Module 213: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat213 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "213.0.6" };
})();

// ============================================================================
// Module 214: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat214 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "214.0.7" };
})();

// ============================================================================
// Module 215: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat215 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "215.0.8" };
})();

// ============================================================================
// Module 216: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat216 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "216.0.0" };
})();

// ============================================================================
// Module 217: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat217 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "217.0.1" };
})();

// ============================================================================
// Module 218: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat218 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "218.0.2" };
})();

// ============================================================================
// Module 219: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat219 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "219.0.3" };
})();

// ============================================================================
// Module 220: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat220 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "220.0.4" };
})();

// ============================================================================
// Module 221: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat221 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "221.0.5" };
})();

// ============================================================================
// Module 222: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat222 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "222.0.6" };
})();

// ============================================================================
// Module 223: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat223 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "223.0.7" };
})();

// ============================================================================
// Module 224: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat224 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "224.0.8" };
})();

// ============================================================================
// Module 225: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat225 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "225.0.0" };
})();

// ============================================================================
// Module 226: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat226 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "226.0.1" };
})();

// ============================================================================
// Module 227: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat227 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "227.0.2" };
})();

// ============================================================================
// Module 228: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat228 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "228.0.3" };
})();

// ============================================================================
// Module 229: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat229 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "229.0.4" };
})();

// ============================================================================
// Module 230: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat230 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "230.0.5" };
})();

// ============================================================================
// Module 231: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat231 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "231.0.6" };
})();

// ============================================================================
// Module 232: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat232 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "232.0.7" };
})();

// ============================================================================
// Module 233: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat233 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "233.0.8" };
})();

// ============================================================================
// Module 234: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat234 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "234.0.0" };
})();

// ============================================================================
// Module 235: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat235 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "235.0.1" };
})();

// ============================================================================
// Module 236: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat236 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "236.0.2" };
})();

// ============================================================================
// Module 237: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat237 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "237.0.3" };
})();

// ============================================================================
// Module 238: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat238 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "238.0.4" };
})();

// ============================================================================
// Module 239: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat239 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "239.0.5" };
})();

// ============================================================================
// Module 240: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat240 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "240.0.6" };
})();

// ============================================================================
// Module 241: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat241 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "241.0.7" };
})();

// ============================================================================
// Module 242: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat242 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "242.0.8" };
})();

// ============================================================================
// Module 243: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat243 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "243.0.0" };
})();

// ============================================================================
// Module 244: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat244 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "244.0.1" };
})();

// ============================================================================
// Module 245: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat245 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "245.0.2" };
})();

// ============================================================================
// Module 246: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat246 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "246.0.3" };
})();

// ============================================================================
// Module 247: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat247 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "247.0.4" };
})();

// ============================================================================
// Module 248: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat248 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "248.0.5" };
})();

// ============================================================================
// Module 249: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat249 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "249.0.6" };
})();

// ============================================================================
// Module 250: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat250 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "250.0.7" };
})();

// ============================================================================
// Module 251: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat251 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "251.0.8" };
})();

// ============================================================================
// Module 252: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat252 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "252.0.0" };
})();

// ============================================================================
// Module 253: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat253 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "253.0.1" };
})();

// ============================================================================
// Module 254: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat254 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "254.0.2" };
})();

// ============================================================================
// Module 255: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat255 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "255.0.3" };
})();

// ============================================================================
// Module 256: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat256 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "256.0.4" };
})();

// ============================================================================
// Module 257: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat257 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "257.0.5" };
})();

// ============================================================================
// Module 258: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat258 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "258.0.6" };
})();

// ============================================================================
// Module 259: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat259 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "259.0.7" };
})();

// ============================================================================
// Module 260: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat260 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "260.0.8" };
})();

// ============================================================================
// Module 261: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat261 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "261.0.0" };
})();

// ============================================================================
// Module 262: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat262 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "262.0.1" };
})();

// ============================================================================
// Module 263: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat263 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "263.0.2" };
})();

// ============================================================================
// Module 264: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat264 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "264.0.3" };
})();

// ============================================================================
// Module 265: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat265 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "265.0.4" };
})();

// ============================================================================
// Module 266: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat266 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "266.0.5" };
})();

// ============================================================================
// Module 267: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat267 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "267.0.6" };
})();

// ============================================================================
// Module 268: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat268 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "268.0.7" };
})();

// ============================================================================
// Module 269: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat269 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "269.0.8" };
})();

// ============================================================================
// Module 270: jQuery v1.12.4 — demo stand-in internal helper — legacy compatibility layer.
// Kept for backwards compatibility with themes released before 2020.
// Do not remove: some widgets still rely on these globals.
// ============================================================================
var _compat270 = (function () {
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
  return { normalize: normalize, throttle: throttle, each: each, version: "270.0.0" };
})();

})(window, document);
