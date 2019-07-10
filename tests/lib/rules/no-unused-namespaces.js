"use strict";

const { RuleTester } = require("eslint");
const rule = require("../../../lib/rules/no-unused-namespaces");

new RuleTester().run("no-unused-namespaces", rule, {
  valid: [
    `
    goog.require('goog.array');
    goog.array.forEach([1, 2, 3], function(e) {
      console.log(e);
    });
    `,
    "[1,2,3].forEach(function(e) { console.log(e) });",
    `
    goog.require('goog.array');
    cb(goog.array.forEach)
    `,
    `
    goog.require('goog.array');
    var forEach = goog.array.forEach;
    `,
    `
    goog.require('goog.array');
    var garray = goog.array;
    `
  ],
  invalid: [
    {
      code: `
      goog.require('goog.array');
      [1,2,3].forEach(function(e) { console.log(e) });
      `,
      // output: "[1,2,3].forEach(function(e) => { console.log(e) });",
      errors: ["goog.array is not used anywhere."]
    }
  ]
});
