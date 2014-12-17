var assert = require('assert'),
sort = require('../sortingAlgorithms');

describe('Sorting Algorithms', function() {

    for(func in sort) {
        describe('#'+func, function() {
            it('should sort for array with complete reverse order', function() {
              assert.deepEqual([1,2,3,4,5], sort[func]([5,4,3,2,1]));
            });
            it('should sort for an array with length 1', function() {
              assert.deepEqual([1], sort[func]([1]));
            });
            it('should sort for an array with multiple equal values', function() {
              assert.deepEqual([3,3,3,5,5,7,7,7], sort[func]([7,3,7,5,3,3,5,7]));
            });
            it('should return an empty array if given an empty array', function() {
                assert.deepEqual([], sort[func]([]));
            });
        });
    }
});