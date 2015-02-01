'use strict';
// Sorting algorithm tests
var assert = require('assert'),
sort = require('../lib/sortingAlgorithms');

describe('Sorting Algorithms', function() {

    var funcs = ['bubblesort', 'mergesort', 'insertionsort', 'quicksort'];

    for(var i = 0; i < funcs.length; i++) {
        describe('#', function() {
            var num = i;
            it('should sort for array with complete reverse order', function() {
                (function() {
                    var type = funcs[num];
                    assert.deepEqual([1,2,3,4,5], sort[type]([5,4,3,2,1]));
              }());
            });
            it('should sort for an array with length 1', function() {
                (function() {
                  var type = funcs[num];
                  assert.deepEqual([1], sort[type]([1]));
                }());
            });
            it('should sort for an array with multiple equal values', function() {
              (function() {
                var type = funcs[num];
                assert.deepEqual([3,3,3,5,5,7,7,7], sort[type]([7,3,7,5,3,3,5,7]));
              }());
            });
            it('should return an empty array if given an empty array', function() {
              (function() {
                var type = funcs[num];
                assert.deepEqual([], sort[type]([]));
              }());
            });
        });
    }
});