"use strict";

const { RuleTester } = require("eslint");
const rule = require("../../../lib/rules/no-deprecated-apis");

new RuleTester().run("no-deprecated-apis", rule, {
  valid: [
    "var foo = goog.array.serialize(data);",
    "var foo = goog.json.hoge(data);"
  ],
  invalid: [
    {
      code: "var contents = goog.json.serialize(data);",
      output: "var contents = JSON.parse(data);",
      errors: [
        "goog.json.serialize is deprecated. Please use JSON.parse instead."
      ]
    }
  ]
});
