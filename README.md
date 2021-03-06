# eslint-plugin-closure-library

[![npm version](https://img.shields.io/npm/v/eslint-plugin-closure-library.svg)](https://www.npmjs.com/package/eslint-plugin-closure-library)
[![Build Status](https://dev.azure.com/koba0004/CI%20for%20GitHub%20repositories/_apis/build/status/koba04.eslint-plugin-closure-library?branchName=master)](https://dev.azure.com/koba0004/CI%20for%20GitHub%20repositories/_build/latest?definitionId=1&branchName=master)
[![Dependency Status](https://david-dm.org/koba04/eslint-plugin-closure-library.svg)](https://david-dm.org/koba04/eslint-plugin-closure-library)

A ESLint plugin for Closure Library

## Installation

Use [npm](https://www.npmjs.com/) or a compatibility tool to install.

```
$ npm install --save-dev eslint eslint-plugin-closure-library
```

### Requirements

- Node.js v8.10.0 or newer versions.
- ESLint v5.16.0 or newer versions.

## Usage

Write your config file such as `.eslintrc.yml`.

```yml
plugins:
  - closure-library
rules:
  closure-library/no-deprecated-apis: error
  closure-library/prefer-native-array-methods: error
```

or

```yml
extends: closure-library/recommended
```

See also [Configuring ESLint](https://eslint.org/docs/user-guide/configuring).

## Configs

- `closure-library/recommended` ... enables the recommended rules.

## Rules

<!--RULE_TABLE_BEGIN-->
### Best Practices

| Rule ID | Description |    |
|:--------|:------------|:--:|
| [closure-library/no-deprecated-apis](./docs/rules/no-deprecated-apis.md) | A rule to forbid use of deprecated methods. | ⭐️✒️ |
| [closure-library/prefer-native-array-methods](./docs/rules/prefer-native-array-methods.md) | Suggest using native Arary methods instead apis Closure Library provides | ⭐️✒️ |

<!--RULE_TABLE_END-->

## Semantic Versioning Policy

This plugin follows [Semantic Versioning](http://semver.org/) and [ESLint's Semantic Versioning Policy](https://github.com/eslint/eslint#semantic-versioning-policy).

## Changelog

- [CHANGELOG.md](./CHANGELOG.md)

## Contributing

Welcome your contribution!

See also [ESLint Contribution Guide](https://eslint.org/docs/developer-guide/contributing/).

### Development Tools

- `npm test` runs tests and measures coverage.
- `npm version <TYPE>` updates the package version. And it updates `lib/configs/recommended.js`, `lib/index.js`, and `README.md`'s rule table. See also [npm version CLI command](https://docs.npmjs.com/cli/version).
- `npm run add-rule <RULE_ID>` creates three files to add a new rule.
