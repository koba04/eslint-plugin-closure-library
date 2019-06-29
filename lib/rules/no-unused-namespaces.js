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
    // const sourceCode = context.getSourceCode();
    return {};
  }
};
