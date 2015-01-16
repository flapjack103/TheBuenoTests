function StringOps() {
// Stub
}

StringOps.prototype.reverseInPlace = function(str) {
	var strArray = Array.prototype.slice.call(str);
	var strLen = strArray.length - 1;

	for(var i = 0; i <= strLen/2; i++) {
		var tmp = strArray[i];
		strArray[i] = strArray[strLen-i];
		strArray[strLen-i] = tmp;
	}

	return strArray;
}

StringOps.prototype.removeDups = function(str) {
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
}

/*def max_subarray(A):
    max_ending_here = max_so_far = A[0]
    for x in A[1:]:
        max_ending_here = max(x, max_ending_here + x)
        max_so_far = max(max_so_far, max_ending_here)
    return max_so_far
*/
// based on kadane alogrithm
StringOps.prototype.maxSubArray = function(arr) {
	var maxHere = arr[0];
	var currMax = arr[0];
	var startIndex, stopIndex = 0;
	for(var i=1; i < arr.length; i++) {
		maxHere = Math.max(arr[i], maxHere + arr[i]);
		if(maxHere == arr[i]) {
			startIndex = i;
		}
		currMax = Math.max(currMax, maxHere);
		if(currMax == maxHere) {
			stopIndex = i;
		}
	}
	console.log(startIndex + '-' + stopIndex);
	return currMax;
}


module.exports = StringOps;