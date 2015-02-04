'use strict';

// Recursive solution for permutations
function perm(prefix, str) {
	if(str.length == 0)
		console.log(prefix);
	for(var i = 0 ; i < str.length; i++) {
		perm(prefix + str[i], str.slice(0,i) + str.slice(i+1,str.length));
	}
}

module.exports = {
	findAllPermutations : function(str) {
		return perm('', str);
	},
	reverseInPlace : function(str) {
		var strArray = Array.prototype.slice.call(str);
		var strLen = strArray.length - 1;
		var strOut = '';

		for(var i = 0; i <= strLen/2; i++) {
			var tmp = strArray[i];
			strArray[i] = strArray[strLen-i];
			strArray[strLen-i] = tmp;
		}

		strArray.forEach(function(char) {
			strOut += char;
		})
		return strOut;
	},
	
	removeDups : function(str) {
		var strLen = str.length;
		var seen = {};
		var strOut = '';

		for(var i=0; i < strLen; i++) {
			if(!seen[str[i]]) {
				strOut += str[i];
				seen[str[i]] = true;
			}
		}

		return strOut;
	},

	isPalindrome : function(str) {
		var len = str.length;
		for(var i = 0; i < (len/2); i++) {
			if(str[i] != str[(len-1) - i]) {
				return false;
			}
		}
		return true;
	},

	longestPalindrome : function(str) {
	//TODO
	},

	removeChar : function(str, char) {
		var len = str.length;

		if(len === 0)
			return str;

		for(var i = 0; i < len; i++) {
			if(str[i] === char) {
				str = str.slice(0, i) + str.slice(i+1, len);
				i--; //check the new character at this index
			}
		}
		return str;
	}
}