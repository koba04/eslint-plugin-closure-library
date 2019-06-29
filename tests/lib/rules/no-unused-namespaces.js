"use strict";

const { RuleTester } = require("eslint");
const rule = require("../../../lib/rules/no-unused-namespaces");

new RuleTester().run("no-unused-namespaces", rule, {
  valid: [
    `
    goog.require('goog.array');
    goog.array.forEach([1, 2, 3], e => {
      console.log(e);
    });
    `,
    "[1,2,3].forEach(e => console.log(e));"
  ],
  invalid: [
    {
      code: `
      goog.require('goog.array');
      [1,2,3].forEach(e => console.log(e));
      `,
      output: "[1,2,3].forEach(e => console.log(e));",
      errors: ["goog.array is an unused namespace."]
    }
  ]
});
