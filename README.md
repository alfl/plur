# plur [![version][npm-version]][npm-url] [![License][npm-license]][license-url]

> A plurivalent logic engine inspired by ["Beyond true and false"](https://aeon.co/essays/the-logic-of-buddhist-philosophy-goes-beyond-simple-truth).

[![Build Status][travis-image]][travis-url]
[![Downloads][npm-downloads]][npm-url]
[![Code Climate][codeclimate-quality]][codeclimate-url]
[![Coverage Status][codeclimate-coverage]][codeclimate-url]
[![Dependencies][david-image]][david-url]

## Install

Not yet published to npm. Placeholder.

```bash
npm install --production --save plur
```

## Run Tests

```bash
jasmine
```

## Usage

Other versions coming. For now use require. The unit tests full exercise the library.

```javascript
  // TODO: Use your own path until this is on npm.
  var plur = require('plur')

  var True      = plur.True();
  var False     = plur.False();
  var Paradox   = plur.Paradox();
  var Empty     = plur.Empty();
  var Ineffable = plur.Ineffable();

  console.log(...True.iter());                  // true
  console.log(...False.iter());                 // false
  console.log(...Paradox.iter());               // true false
  console.log(...Empty.iter());                 //
  console.log(...Ineffable.iter());             // NaN

  // Test equality with "is". TODO: Better chaining. Currently this
  // leads to unfortunate constructions such as "True.not().is(False)".
  console.log(Paradox.is(Paradox));             // true
  console.log(Paradox.not().is(Paradox));       // false

  // Boolean operations work the same.
  console.log(...True.and(False).iter());       // false
  console.log(...True.or (False).iter());       // true
  console.log(...True.not().iter());            // false
  // See unit tests for complete truth table.

  // Paradox is "both true and false".
  // Empty is "neither true nor false".
  console.log(...Paradox.or (Empty).iter());    // true false
  console.log(...Paradox.and(Empty).iter());    //
  // See unit tests for complete truth table.

  // Ineffable is "none of the above", "inapplicable".
  console.log(...Ineffable.and(True).iter());   // NaN
  console.log(...Ineffable.or(Paradox).iter()); // NaN
  console.log(...Ineffable.and(Empty).iter());  // NaN
  // See unit tests for complete truth table.

```

----
> :copyright: [](alfl.guru) &nbsp;&middot;&nbsp;
> License: [MIT](LICENSE) &nbsp;&middot;&nbsp;
> Github: [@alfl](https://github.com/alfl) &nbsp;&middot;&nbsp;
> Twitter: [@alfl](https://twitter.com/alfl)

[license-url]: https://opensource.org/licenses/MIT

[travis-url]: https://travis-ci.org/alfl/plur
[travis-image]: https://img.shields.io/travis/alfl/plur.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/plur
[npm-license]: https://img.shields.io/npm/l/plur.svg?style=flat-square
[npm-version]: https://img.shields.io/npm/v/plur.svg?style=flat-square
[npm-downloads]: https://img.shields.io/npm/dm/plur.svg?style=flat-square

[codeclimate-url]: https://codeclimate.com/github/alfl/plur
[codeclimate-quality]: https://img.shields.io/codeclimate/github/alfl/plur.svg?style=flat-square
[codeclimate-coverage]: https://img.shields.io/codeclimate/coverage/github/alfl/plur.svg?style=flat-square

[david-url]: https://david-dm.org/alfl/plur
[david-image]: https://img.shields.io/david/alfl/plur.svg?style=flat-square
