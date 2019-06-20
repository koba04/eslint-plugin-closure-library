"use strict";

const { RuleTester } = require("eslint");
const rule = require("../../../lib/rules/prefer-native-array-methods");

new RuleTester().run("prefer-native-apis", rule, {
  valid: ["goog.array.xxx(list)", "list.forEach(function(el){ el })"],
  invalid: [
    {
      code: "goog.array.forEach(list, function(el) { return el })",
      output: "Array.prototype.forEach.call(list, function(el) { return el })",
      errors: ["use Array.prototype.forEach instead of goog.array.forEach."]
    },
    {
      code: "goog.array.forEach(this.foo, function(el) { return el })",
      output:
        "Array.prototype.forEach.call(this.foo, function(el) { return el })",
      errors: ["use Array.prototype.forEach instead of goog.array.forEach."]
    },
    {
      code: "goog.array.forEach(this.foo, function(el) { return el }, ctx)",
      output:
        "Array.prototype.forEach.call(this.foo, function(el) { return el }, ctx)",
      errors: ["use Array.prototype.forEach instead of goog.array.forEach."]
    },
    {
      code: "goog.array.map(list, function(el) { return el })",
      output: "Array.prototype.map.call(list, function(el) { return el })",
      errors: ["use Array.prototype.map instead of goog.array.map."]
    },
    {
      code: "goog.array.some(list, function(el) { return el })",
      output: "Array.prototype.some.call(list, function(el) { return el })",
      errors: ["use Array.prototype.some instead of goog.array.some."]
    },
    {
      code:
        "goog.array.forEach(/** @type {Array} */(list), function(el) { return el })",
      output:
        "Array.prototype.forEach.call(/** @type {Array} */(list), function(el) { return el })",
      errors: ["use Array.prototype.forEach instead of goog.array.forEach."]
    }
  ]
});
