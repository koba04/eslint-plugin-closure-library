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
  "every"
];

module.exports = {
  meta: {
    docs: {
      description:
        "Suggest using native Arary methods instead apis Closure Library provides",
      category: "Best Practices",
      recommended: true,
      url: ""
    },

    fixable: "code",
    messages: {},
    schema: [],
    type: "suggestion"
  },

  create(context) {
    return {
      CallExpression(node) {
        NATIVE_APIS.forEach(nativeApi => {
          const deprecatedApi = "goog.array." + nativeApi;
          if (isCallExpressionWithNamespace(node, deprecatedApi)) {
            const target = node.callee;
            context.report({
              node: target,
              message:
                "use Array.prototype.{{nativeApi}} instead of {{deprecatedApi}}.",
              data: { nativeApi, deprecatedApi },
              fix(fixer) {
                const sourceCode = context.getSourceCode();
                const [list] = node.arguments;
                return [
                  fixer.replaceText(
                    node.callee,
                    sourceCode.getText(list) +
                      "." +
                      nativeApi.replace(/.*\./, "")
                  ),
                  fixer.removeRange([
                    node.arguments[0].start,
                    node.arguments[0].end + 2
                  ])
                ];
              }
            });
          }
        });
      }
    };
  }
};
