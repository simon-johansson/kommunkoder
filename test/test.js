'use strict';
var _ = require('lodash');
var expect = require('chai').expect;
var kommunkoder = require('../');

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

describe('kommunkoder()', function () {
  it('should return all municipalities', function () {
    var result = kommunkoder();
    expect(result).to.be.an("Array");
    expect(result).to.have.length(290);
  });
});


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

describe('kommunkoder(["1231", "1233", "1256"])', function () {
  var result = kommunkoder(["1231", "1233", "1256"]);
  it('should be able to take array of codes as argument', function () {
    expect(result).to.be.an("Array");
  });
  it('should return Array with three items', function () {
    var truth = [
      {
        "code": "1231",
        "municipality": "Burlöv",
        "county": "Skåne län"
      }, {
        "code": "1233",
        "municipality": "Vellinge",
        "county": "Skåne län"
      }, {
        "code": "1256",
        "municipality": "Östra Göinge",
        "county": "Skåne län"
      }
    ];

    expect(result).to.have.length(3);
    result.forEach(function(el, i) {
      expect(_.isEqual(el, truth[i])).to.be.true;
    });
  });
});

