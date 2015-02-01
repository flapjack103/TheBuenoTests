'use strict';
// Number operations tests
var assert = require('assert'),
numOps = require('../lib/numberOps');

describe('Number Operations', function() {
	describe('#smallestMultiple', function() {
 		it('should find the smallest number divisible by all numbers up to 10', function() {
          assert.equal(2520, numOps.smallestMultiple(10));
    });
    it('should find the smallest number divisible by all numbers up to 10', function() {
          assert.equal(232792560, numOps.smallestMultiple(20));
    });
    it('should return 1 for numbers up to 1 ', function() {
          assert.equal(1, numOps.smallestMultiple(1));
    });
	});
  describe('#maxSubArray', function() {
    it('should return 15 for [1,2,3,4,5]', function() {
          assert.equal(15, numOps.maxSubArray([1,2,3,4,5]));
    });
    it('should return 9 for [1,2,-3,4,5]', function() {
          assert.equal(9, numOps.maxSubArray([1,2,-3,4,5]));
    });
    it('should return -2 for [-2,-3,-4]', function() {
          assert.equal(-2, numOps.maxSubArray([-2,-3,-4]));
    });
     it('should return 0 for empty array', function() {
          assert.equal(0, numOps.maxSubArray([]));
    });
  });
});