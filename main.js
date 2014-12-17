var sortingAlgorithms = require('./sortingAlgorithms');

var unsortedArray = [38,27,43,3,9,82,10];
console.log('Unsorted', unsortedArray);

for(func in sortingAlgorithms) {
	// reset our array in case of sorting in place
	unsortedArray = [38,27,43,3,9,82,10];
	console.log(func);
	console.log(sortingAlgorithms[func](unsortedArray));
}