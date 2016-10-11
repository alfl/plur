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

Other versions coming, for now just require. See tests.

```js
/*
 * Node 6
 * Built using `babel-preset-es2015-node6`
 */
//const plur = require('plur/lib/node6')

/*
 * Node 5
 * Built using `babel-preset-es2015-node5`
 */
//const plur = require('plur/lib/node5')

/*
 * Node 4
 * Built using `babel-preset-es2015-node4`
 */
//const plur = require('plur/lib/node4')

/*
 * Node >=0.10 <=0.12
 * Built using `babel-preset-es2015`
 * Note: 
 *   - additional package is required: `babel-runtime`
 *   - npm install --production --save babel-runtime
 */

//
// JUST USE THIS:
//

var plur = require('plur')
```

## API

### plur()

```js
// See unit tests. This is wrong.
//import plur from 'plur'
//
//plur()
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
