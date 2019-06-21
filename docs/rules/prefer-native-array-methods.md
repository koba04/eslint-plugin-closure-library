# closure-library/prefer-native-array-methods
> Suggest using native Arary methods instead apis Closure Library provides
> - ✒️ The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

A rule to prefer native array methods instead of methods Closure Library provides.

## Rule Details

This rule prefers to use native array methods if it can be used.
This rule supports `--fix` option, the rule fixes incorrect code by using `Array.prototype.xxx.call(list, ...)` style, which is to support ArrayLike objects.

Currently, the target methods are the below.

- every
- filter
- forEach
- indexOf
- lastIndexOf
- map
- reduce
- reduceRight
- some

Examples of **incorrect** code:

```js
/*eslint closure-library/prefer-native-array-methods: error */

var list = [1, 2, 3];
goog.array.forEach(list, function(n) {
    console.log(n);
});
```

Examples of **correct** code:

```js
/*eslint closure-library/no-deprecated-apis: error */

var list = [1, 2, 3];
list.forEach(list, function(n) {
    console.log(n);
});

// If you iterate ArrayLike methods, you can do like the following
var listLike = {
    0: 'a',
    1: 'b',
    2: 'c'
    length: 3
};
Array.prototype.forEach.call(listLike, function(v) {
    console.log(v)
});
```

## Options

Nothing.

## Implementation

- [Rule source](../../lib/rules/prefer-native-array-methods.js)
- [Test source](../../tests/lib/rules/prefer-native-array-methods.js)
