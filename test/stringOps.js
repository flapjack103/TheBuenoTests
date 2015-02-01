'use strict';
// String operations tests
var assert = require('assert'),
strOps = require('../lib/stringOps');

describe('String Operations', function() {
	describe('#reverseInPlace', function() {
 		it('should reverse the basic string "cat" ', function() {
          assert.equal('tac', strOps.reverseInPlace('cat'));
    });
    it('should return empty string for empty input string', function() {
          assert.equal('', strOps.reverseInPlace(''));
    });
	});
  describe('#removeChar', function() {
    it('should remove all a\'s from "the fat cat ate a rat" ', function() {
          assert.equal('the ft ct te  rt', strOps.removeChar('the fat cat ate a rat', 'a'));
    });
    it('should return empty string for empty input string', function() {
          assert.equal('', strOps.removeChar('', 'a'));
    });
    it('should remove nothing from original string if no char is passed in', function() {
          assert.equal('hello world', strOps.removeChar('hello world', ''));
    });
  });
   describe('#removeDups', function() {
    it('should remove duplicates from "good food"', function() {
          assert.equal('god f', strOps.removeDups('good food'));
    });
    it('should return single character for input string "aaaa"', function() {
          assert.equal('a', strOps.removeDups('aaaa'));
    });
  });
   describe('#isPalindrome', function() {
    it('should return true for "tacocat"', function() {
          assert.equal(true, strOps.isPalindrome('tacocat'));
    });
    it('should return false for "tacocats"', function() {
          assert.equal(false, strOps.isPalindrome('tacocats'));
    });
    it('should return true for empty string', function() {
          assert.equal(true, strOps.isPalindrome(''));
    });
  });
});