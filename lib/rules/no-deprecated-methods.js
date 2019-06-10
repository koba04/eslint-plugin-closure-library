"use strict";

module.exports = {
    meta: {
        docs: {
            description: "A rule to forbid use of deprecated methods.",
            category: "Best Practices",
            recommended: true,
            url: "https://github.com/koba04/eslint-plugin-closure-library/blob/master/docs/rules/no-deprecated-methods.md"
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
