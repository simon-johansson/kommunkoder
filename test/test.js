'use strict';
var expect = require('chai').expect;
var kommunkoder = require('../');

describe('kommunkoder()', function () {
  it('should return all municipalities', function () {
    var result = kommunkoder();
    expect(result).to.be.an("Array");
    expect(result).to.have.length(290);
  });
});

function suite (result) {
  it('should return object with keys "code", "municipality" & "county"', function () {
    expect(result).to.include.keys("code", "municipality", "county");
  });
  it('should return object containing {code : "1440"}', function () {
    expect(result.code).to.eql('1440');
  });
  it('should return object containing {municipality: "Ale"}', function () {
    expect(result.municipality).to.eql('Ale');
  });
  it('should return object containing {county: "Västra Götalands län"}', function () {
    expect(result.county).to.eql('Västra Götalands län');
  });
}

describe('kommunkoder(1140)', function () {
  var result = kommunkoder(1440);
  it('should be able to take Number as argument', function () {
    expect(result).to.be.an("Object");
  });
  suite(result);
});

describe('kommunkoder("1140")', function () {
  var result = kommunkoder("1440");
  it('should be able to take String as argument', function () {
    expect(result).to.be.an("Object");
  });
  suite(result);
});

describe('kommunkoder({municipality: "Ale"})', function () {
  var result = kommunkoder({municipality: "Ale"});
  it('should be able to take Object as argument', function () {
    expect(result).to.be.an("Object");
  });
  suite(result);
});

describe('kommunkoder(885)', function () {
  var result = kommunkoder(885);
  it('should be able to take three digit Number as argument', function () {
    expect(result).to.be.an("Object");
    expect(result.code).to.eql('0885');
    expect(result.municipality).to.eql('Borgholm');
  });
});
