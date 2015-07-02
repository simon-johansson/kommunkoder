# kommunkoder

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][daviddm-image]][daviddm-url]

<!-- [![Code Climate][codeclimate-image]][codeclimate-url] -->

[![Sauce Test Status][saucelabs-image]][saucelabs-url]

> Collection of all municipalities in Sweden with corresponding county and municipality codes (kommunkoder)

Data is provided by [SCB](http://www.scb.se/en_/Finding-statistics/Regional-statistics/Regional-divisions/Counties-and-municipalities/Counties-and-municipalities-in-numerical-order/) (Statistiska Centralbyrån). Lib is up-to-date as of 2015-07-03, no changes to either counties or municipalities will be made until 2016-01-01.

## Install

####Client
```sh
$ bower install kommunkoder --save
```

####Node
```sh
$ npm install kommunkoder --save
```

##Include

####Client
```html
<script src="bower_components/kommunkoder/kommunkoder.min.js"></script>
```

####Node
```js
var kommunkoder = require('kommunkoder');
```

## Usage

```js
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

## Tests

```sh
# clone this repo
$ npm install
$ npm test
```

## License

MIT © [Simon Johansson](mailto:mail@simon-johansson.com)

[npm-image]: https://badge.fury.io/js/kommunkoder.svg
[npm-url]: https://npmjs.org/package/kommunkoder
[travis-image]: https://travis-ci.org/simon-johansson/kommunkoder.svg?branch=master
[travis-url]: https://travis-ci.org/simon-johansson/kommunkoder
[coveralls-image]: https://coveralls.io/repos/simon-johansson/kommunkoder/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/r/simon-johansson/kommunkoder?branch=master
[daviddm-image]: https://david-dm.org/simon-johansson/kommunkoder.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/simon-johansson/kommunkoder
[saucelabs-image]: https://saucelabs.com/browser-matrix/kommunkoder.svg
[saucelabs-url]: https://saucelabs.com/u/kommunkoder
<!-- [codeclimate-image]: https://codeclimate.com/github/simon-johansson/kommunkoder/badges/gpa.svg -->
<!-- [codeclimate-url]: https://codeclimate.com/github/simon-johansson/kommunkoder -->
