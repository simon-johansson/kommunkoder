'use strict';

var isUndefined = require('lodash/lang/isUndefined');
var isArray =     require('lodash/lang/isArray');
var isNumber =    require('lodash/lang/isNumber');
var isString =    require('lodash/lang/isString');

var filter =      require('lodash/collection/filter');
var first =       require('lodash/array/first');

var data = require('./data');

function iterateOverQuery(querryArray) {
  return querryArray.map(function(el) {
    return get(el);
  });
}

function stringifyQuery(queryNumber) {
  return queryNumber.toString();
}

function objectifyQuery(queryString) {
  var query = queryString.length <= 3 ? '0' + queryString : queryString;
  return {code: query};
}

function get (query) {
  if (isUndefined(query)) {
    return data;
  } if (isArray(query)) {
    return iterateOverQuery(query);
  } if (isNumber(query)) {
    query = stringifyQuery(query);
  } if (isString(query)) {
    query = objectifyQuery(query);
  }
  return first(filter(data, query));
}

module.exports = get;
