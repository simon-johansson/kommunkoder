'use strict';

var _ = require('lodash');
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
  if (_.isUndefined(query)) {
    return data;
  } if (_.isArray(query)) {
    return iterateOverQuery(query);
  } if (_.isNumber(query)) {
    query = stringifyQuery(query);
  } if (_.isString(query)) {
    query = objectifyQuery(query);
  }
  return _.filter(data, query)[0];
}

module.exports = get;
