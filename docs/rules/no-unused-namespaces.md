# closure-library/no-unused-namespaces
> A rule to disallow unused namespaces
automatically fix some of the problems reported by this rule.

A rule to disallow any unused namespaces.

## Rule Details

This rule aimed at disallowing unused namespaces

Examples of **incorrect** code:

```js
/*eslint closure-library/no-unused-namespaces: error */

goog.require('goog.array');
```

Examples of **correct** code:

```js
/*eslint closure-library/no-unused-namespaces: error */

goog.require('goog.array');
goog.array.forEach([1, 2, 3], function(e) {
    console.log(e);
})
```

## Options

Nothing.

## Implementation

- [Rule source](../../lib/rules/no-unused-namespaces.js)
- [Test source](../../tests/lib/rules/no-unused-namespaces.js)
