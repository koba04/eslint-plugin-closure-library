# closure-library/no-deprecated-methods
> A rule to forbid use of deprecated methods.
> - ⭐️ This rule is included in `plugin:closure-library/recommended` preset.

A rule to forbid use of deprecated methods.

## Rule Details

This rule aimed at disallowing use of deprecated methods.

Examples of **incorrect** code:

```js
/*eslint closure-library/no-deprecated-methods: error */

var contents = goog.json.serialize(data);
```

Examples of **correct** code:

```js
/*eslint closure-library/no-deprecated-methods: error */

var contents = JSON.parse(data);
var foo = 1;
```

## Options

Nothing.

## Implementation

- [Rule source](../../lib/rules/closure-library/no-deprecated-methods.js)
- [Test source](../../tests/lib/rules/closure-library/no-deprecated-methods.js)
