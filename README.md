# plur [![version][npm-version]][npm-url] [![License][npm-license]][license-url]

> A plurivalent logic engine inspired by ["Beyond true and false"](https://aeon.co/essays/the-logic-of-buddhist-philosophy-goes-beyond-simple-truth).

[![Build Status][travis-image]][travis-url]
[![Downloads][npm-downloads]][npm-url]
[![Code Climate][codeclimate-quality]][codeclimate-url]
[![Coverage Status][codeclimate-coverage]][codeclimate-url]
[![Dependencies][david-image]][david-url]

## Install

```bash
npm install --production --save plur
```

## Usage

Other versions coming, for now use require. See tests.

```
var plur = require('plur')
```

## Usage

```javascript
    var True = plur.True();
    var False = plur.False();
    var Paradox = plur.Paradox();
    var Empty = plur.Empty();
    var Cipher = plur.Cipher();
    var Ineffable = plur.Ineffable();

    expect(True.and(True).value.size).toBe(1);
    expect(True.and(True).value.has(true)).toBe(true);

    expect(True.and(False).value.size).toBe(1);
    expect(True.and(False).value.has(false)).toBe(true);
    expect(False.and(True).value.size).toBe(1);
    expect(False.and(True).value.has(false)).toBe(true);

    expect(True.and(Paradox).value.size).toBe(2);
    expect(True.and(Paradox).value.has(true)).toBe(true);
    expect(True.and(Paradox).value.has(false)).toBe(true);
    expect(Paradox.and(True).value.size).toBe(2);
    expect(Paradox.and(True).value.has(true)).toBe(true);
    expect(Paradox.and(True).value.has(false)).toBe(true);

    expect(True.and(Empty).value.size).toBe(0);
    expect(Empty.and(True).value.size).toBe(0);
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
