'use strict';

function calcPrimeFactors(num) {
	var factors = {};
	
	// Number of 2's in num
    while (num % 2 === 0) {
    	if(factors[2])
        	factors[2] = factors[2] + 1;
        else
        	factors[2] = 1;
        num = num/2;
    }
 
    // odd numbers only
    for (var i = 3; i <= Math.sqrt(num); i = i+2) {
        // While i divides num, add i and divide num
        while(num % i === 0) {
        	if(factors[i])
            	factors[i] = factors[i] + 1;
            else
            	factors[i] = 1;
            num = num/i;
        }
    }
 
    // if num is > 2, num must be prime
    if (num > 2)
        factors[num] = 1;

    return factors;
}

module.exports = {

	// Brute force way (INEFFICIENT)
	smallestMultipleBF : function(maxDivisor) {
		var num = 1
		var isDivisible;

		while(1) {
			isDivisible = true;
			for(var i = 1; i < maxDivisor; i++) {
				if(num % i != 0) {
					isDivisible = false;
					break;
				}
			}

			if(isDivisible)
				return num;

			num++;
		}
		return 0;
	},

	// Smart way using prime factors
	smallestMultiple : function(maxDivisor) {
		var factorDict = {};
		var factors = [];
		var num;

		for(var i = 1; i < maxDivisor; i++) {
			factors = calcPrimeFactors(i);
			for(num in factors) {
				if(factors.hasOwnProperty(num)) {
					if(!factorDict.hasOwnProperty(num) || factors[num] > factorDict[num]) {
						factorDict[num] = factors[num];
					}
				}
			}
		}

		var result = 1;
		for(num in factorDict) {
			if(factorDict.hasOwnProperty(num))
				for(var i = 0; i < factorDict[num]; i++)
					result *= num;
		}
		return result;
	},

	// based on kadane alogrithm
	maxSubArray : function(arr) {
		var maxHere = arr[0];
		var currMax = arr[0];
		var startIndex, stopIndex = 0;

		if(arr.length === 0) return 0;

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
		// uncomment to print indices of max sub array
		//console.log(startIndex + '-' + stopIndex);
		return currMax;
	}
}