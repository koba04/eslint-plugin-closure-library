"use strict";

const isCallExpressionWithNamespace = (node, source) => {
  const namespaces = source.split(".");
  let name;
  let current = node.callee;

  while ((name = namespaces.pop())) {
    if (current.property && current.property.name !== name) {
      return false;
    }
    current = current.object;
  }
  return true;
};

module.exports = {
  meta: {
    docs: {
      description: "A rule to forbid use of deprecated methods.",
      category: "Best Practices",
      recommended: true,
      url:
        "https://github.com/koba04/eslint-plugin-closure-library/blob/master/docs/rules/no-deprecated-methods.md"
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
        if (isCallExpressionWithNamespace(node, "goog.json.serialize")) {
          // console.log(node);

          context.report({
            node: node.callee,
            message:
              "goog.json.serialize is deprecated. Please use JSON.parse instead.",
            fix(fixer) {
              return fixer.replaceTextRange(
                [node.callee.start, node.callee.end],
                "JSON.parse"
              );
            }
          });
        }
      }
    };
  }
};
