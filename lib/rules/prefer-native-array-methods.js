"use strict";

const { isCallExpressionWithNamespace } = require("../helper");

const NATIVE_APIS = [
  "indexOf",
  "lastIndexOf",
  "forEach",
  "filter",
  "map",
  "reduce",
  "reduceRight",
  "some",
  "every",
  "concat",
  ["join", "concat"]
];

module.exports = {
  meta: {
    docs: {
      description:
        "Suggest using native Arary methods instead apis Closure Library provides",
      category: "Best Practices",
      recommended: true,
      url:
        "https://github.com/koba04/eslint-plugin-closure-library/blob/master/docs/rules/prefer-native-array-methods.md"
    },

    fixable: "code",
    messages: {
      disallowExample:
        "use Array.prototype.forEach instead of goog.array.forEach."
    },
    schema: [],
    type: "suggestion"
  },

  create(context) {
    return {
      CallExpression(node) {
        NATIVE_APIS.forEach(nativeApi => {
          const arrayMethod = Array.isArray(nativeApi)
            ? nativeApi[1]
            : nativeApi;
          const deprecatedApi =
            "goog.array." +
            (Array.isArray(nativeApi) ? nativeApi[0] : nativeApi);
          if (isCallExpressionWithNamespace(node, deprecatedApi)) {
            const target = node.callee;
            context.report({
              node: target,
              message:
                "use Array.prototype.{{arrayMethod}} instead of {{deprecatedApi}}.",
              data: { arrayMethod, deprecatedApi },
              fix(fixer) {
                return [
                  fixer.replaceText(
                    node.callee,
                    "Array.prototype." + arrayMethod + ".call"
                  )
                ];
              }
            });
          }
        });
      }
    };
  }
};
