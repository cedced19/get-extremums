var assert = require('assert');
var getExtremums = require('../') 

var testArray = [
    { temperature: 23.6, humidity: 17 },
    { temperature: 15, humidity: 18 },
    { temperature: 20, humidity: 19 },
    { temperature: 18, humidity: 15 },
];

describe('Test the function on a property', function () {
    var extremums = getExtremums(testArray, 'temperature');
    it('should return the object with temperature of 15 as the lowest', function () {
        assert.equal(extremums.lowest.temperature, 15);
    });
    it('should return the object with temperature 23.6 as the highest', function () {
        assert.equal(extremums.highest.temperature, 23.6);
    });
});

describe('Test the function on another property', function () {
    var extremums = getExtremums(testArray, 'humidity');
    it('should return the object with humidity of 15 as the lowest', function () {
        assert.equal(extremums.lowest.humidity, 15);
    });
    it('should return the object with humidity 19 as the highest', function () {
        assert.equal(extremums.highest.humidity, 19);
    });
});