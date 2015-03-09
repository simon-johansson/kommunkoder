# kommunkoder

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Code Climate][codeclimate-image]][codeclimate-url] [![Dependency Status][daviddm-image]][daviddm-url]

> Collection of all municipalities in Sweden with corresponding county and municipality codes (kommunkoder)

Data is provided by [SCB](http://www.scb.se/en_/Finding-statistics/Regional-statistics/Regional-divisions/Counties-and-municipalities/Counties-and-municipalities-in-numerical-order/) (Statistiska Centralbyrån). Latest update to data used in lib was done **2015-03-15**.

## Install

```sh
$ npm install --save kommunkoder
```

## Usage

```js
var kommunkoder = require('kommunkoder');

kommunkoder();
// → [ Array of all municipalities ]

kommunkoder(1440);
// → { code: '1440', municipality: 'Ale', county: 'Västra Götalands län' }

kommunkoder({municipality: "Falkenberg"});
// → { code: "1382", municipality: "Falkenberg", county: "Hallands län" }

kommunkoder({county: "Stockholms län"});
// → [ Array of all municipalities in specified county ]

// pass an array of searches to get an array of multiple results
kommunkoder(["1231", "1233", {municipality: "Skövde"}]);
// → [{ code: '1231', municipality: 'Burlöv', county: 'Skåne län' },
//    { code: '1233', municipality: 'Vellinge', county: 'Skåne län' },
//    { code: '1496', municipality: 'Skövde', county: 'Västra Götalands län' }]

// 'undefined' is retunred if no match is found
kommunkoder(666);
// → undefined
```

```sh
# creates a browser.js
$ npm install
$ npm run browser
```

## Tests

```sh
$ npm install
$ npm test
```

## License

MIT © [Simon Johansson]()

[npm-image]: https://badge.fury.io/js/kommunkoder.svg
[npm-url]: https://npmjs.org/package/kommunkoder
[travis-image]: https://travis-ci.org/simon-johansson/kommunkoder.svg?branch=master
[travis-url]: https://travis-ci.org/simon-johansson/kommunkoder
[coveralls-image]: https://coveralls.io/repos/simon-johansson/kommunkoder/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/r/simon-johansson/kommunkoder?branch=master
[codeclimate-image]: https://codeclimate.com/github/simon-johansson/kommunkoder/badges/gpa.svg
[codeclimate-url]: https://codeclimate.com/github/simon-johansson/kommunkoder
[daviddm-image]: https://david-dm.org/simon-johansson/kommunkoder.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/simon-johansson/kommunkoder
