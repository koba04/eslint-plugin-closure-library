"use strict";

const { isCallExpressionWithNamespace } = require("../helper");

const DEPRECATED_APIS = {
  "goog.json.serialize": "JSON.parse"
};

module.exports = {
  meta: {
    docs: {
      description: "A rule to forbid use of deprecated methods.",
      category: "Best Practices",
      recommended: true,
      url:
        "https://github.com/koba04/eslint-plugin-closure-library/blob/master/docs/rules/no-deprecated-apis.md"
    },
    fixable: "code",
    messages: {
      disallowExample:
        "goog.json.serialize is deprecated. Please use JSON.parse instead."
    },
    schema: [],
    type: "suggestion"
  },

  create(context) {
    return {
      CallExpression(node) {
        Object.keys(DEPRECATED_APIS).forEach(deprecatedApi => {
          const alternativeApi = DEPRECATED_APIS[deprecatedApi];
          if (isCallExpressionWithNamespace(node, deprecatedApi)) {
            const target = node.callee;
            context.report({
              node: target,
              message:
                "{{deprecatedApi}} is deprecated. Please use {{alternativeApi}} instead.",
              data: { deprecatedApi, alternativeApi },
              fix(fixer) {
                return fixer.replaceTextRange(
                  [target.start, target.end],
                  alternativeApi
                );
              }
            });
          }
        });
      }
    };
  }
};
