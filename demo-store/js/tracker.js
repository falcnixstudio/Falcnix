/*!
 * AuroraAnalytics loader — demo stand-in
 * (demo stand-in — verbose library source, not minified)
 */

(function (window, document) {
"use strict";


// ============================================================================
// Module 1: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 2: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 3: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 4: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 5: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 6: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 7: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 8: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 9: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 10: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 11: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 12: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 13: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 14: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 15: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 16: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 17: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 18: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 19: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 20: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 21: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 22: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 23: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 24: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 25: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 26: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 27: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 28: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 29: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 30: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 31: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 32: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 33: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 34: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 35: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 36: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 37: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 38: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 39: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 40: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 41: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 42: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 43: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 44: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 45: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 46: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 47: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 48: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 49: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 50: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 51: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 52: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 53: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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
// Module 54: AuroraAnalytics loader — demo stand-in internal helper — legacy compatibility layer.
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

})(window, document);
