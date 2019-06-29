"use strict";

module.exports = {
  meta: {
    docs: {
      description: "A rule to disallow unused namespaces",
      category: "Best Practices",
      recommended: false,
      url:
        "https://github.com/koba04/eslint-plugin-closure-library/blob/master/docs/rules/no-unused-namespaces.md"
    },
    fixable: null,
    messages: {},
    schema: [],
    type: "suggestion"
  },

  create(context) {
    const definedNameSpace = new Map();
    const usedNameSpace = [];

    return {
      CallExpression(node) {
        const { callee, arguments: args } = node;
        if (
          callee.object &&
          callee.object.name === "goog" &&
          (callee.property && callee.property.name === "require")
        ) {
          definedNameSpace.set(args[0].value, node);
        }
      },
      MemberExpression(node) {
        // TODO: support multiple namespaces
        if (node.object && node.object.name === "goog") {
          if (node.property) {
            usedNameSpace.push(`goog.${node.property.name}`);
          }
        }
      },
      "Program:exit"() {
        console.log(usedNameSpace, definedNameSpace);
        definedNameSpace.forEach((node, namespace) => {
          if (!usedNameSpace.includes(namespace)) {
            console.log(node);
            context.report({
              node,
              message: "{{namespace}} is not used anywhere.",
              data: { namespace }
              /*
              fix(fixer) {
                return fixer.remove(node);
              }
              */
            });
          }
        });
      }
    };
  }
};
