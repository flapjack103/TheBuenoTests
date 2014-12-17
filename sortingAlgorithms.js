
module.exports = {
	bubblesort: function(array) {
		var marker = array.length;
		var swaps = true;

		while(swaps === true) {
			swaps = false;
			marker--;
			for(var i = 0; i < marker; i++) {
				if(array[i+1] < array[i]) {
					var tmp = array[i+1];
					array[i+1] = array[i];
					array[i] = tmp;
					swaps = true;
				}
			}
		}
		return array;
	},

	mergesort: function(array) {

		function merge(arrayA, arrayB) {
			var arrayC = [];

			var i = 0, j = 0;

			while(i < arrayA.length && j < arrayB.length) {
				if (arrayA[i] < arrayB[j]) {
					arrayC.push(arrayA[i]);
					i++;
				}
				else {
					arrayC.push(arrayB[j]);
					j++;
				}
			}

			if(i == arrayA.length) {
				while(j < arrayB.length) {
					arrayC.push(arrayB[j]);
					j++;
				}
			}
			else if(j == arrayB.length) {
				while(i < arrayA.length) {
					arrayC.push(arrayA[i]);
					i++;
				}
			}

			return arrayC;
		}

		if(array.length <= 1)
			return array;

		var lowerHalf = array.slice(0, array.length/2);
		var upperHalf = array.slice((array.length/2), array.length);
		
		var sortedLowerHalf = this.mergesort(lowerHalf);
		var sortedUpperHalf = this.mergesort(upperHalf);

		return merge(sortedLowerHalf, sortedUpperHalf);
	},

	insertionsort: function(array) {
		var markerIndex = 0;
		var sorted = false;

		while( markerIndex < array.length ) {
			for(var i = markerIndex; i < array.length; i++) {
				if( array[markerIndex] > array[i]) {
					var tmp = array[i];
					array[i] = array[markerIndex];
					array[markerIndex] = tmp;
				}
			}
			markerIndex++;
		}

		return array;
	},

	quicksort: function(array) {

		if (array.length <= 1) {
			return array;
		}

		var left = [];
		var right = [];
		var pivot = array[0];

		  for (var i = 1; i < array.length; i++) {
		  	if (array[i] < pivot) {
		  		left.push(array[i]);
		  	} 
		  	else {
		  		right.push(array[i]);
		  	}
		  }

		  return this.quicksort(left).concat(pivot, this.quicksort(right));
		},

		heapsort: function(array) {
		// TODO
		return array;
	}
}

