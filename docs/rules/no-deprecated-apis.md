# closure-library/no-deprecated-apis
> A rule to forbid use of deprecated methods.
> - ⭐️ This rule is included in `plugin:closure-library/recommended` preset.
> - ✒️ The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

A rule to forbid use of deprecated methods.

## Rule Details

This rule aimed at disallowing use of deprecated methods.

Examples of **incorrect** code:

```js
/*eslint closure-library/no-deprecated-apis: error */

var contents = goog.json.serialize(data);
```

Examples of **correct** code:

```js
/*eslint closure-library/no-deprecated-apis: error */

var contents = JSON.parse(data);
var foo = 1;
```

## Options

Nothing.

## Implementation

- [Rule source](../../lib/rules/no-deprecated-apis.js)
- [Test source](../../tests/lib/rules/no-deprecated-apis.js)
