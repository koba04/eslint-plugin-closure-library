"use strict";

module.exports = {
    meta: {
        docs: {
            description: "An example rule.",
            category: "Stylistic Issues",
            recommended: true,
            url: "https://github.com/mysticatea/eslint-plugin-template/blob/master/docs/rules/example-rule.md"
        },
        fixable: "code",
        messages: {
            disallowExample: "goog.json.serialize is deprecated. Please use JSON.parse instead."
        },
        schema: [],
        type: "suggestion"
    },

    create(context) {
        return {
            MemberExpression(node) {
                if (!node.object || !node.object.object) {
                    return;
                }
                if (node.object.object.name !== "goog") {
                    return;
                }
                if (node.object.property.name !== "json") {
                    return;
                }
                if (node.property.name !== "serialize") {
                    return;
                }

                // console.log(node);
                context.report({
                    node,
                    message: "goog.json.serialize is deprecated. Please use JSON.parse instead.",
                    fix(fixer) {
                        return fixer.replaceTextRange([node.start, node.end], "JSON.parse");
                    }
                });
            }
        };
    }
};
