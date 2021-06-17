// naive solution
const search = (arr, val) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			return i;
		}
	}
	return -1;
};

//refactored
const searchRefactored = (arr, val) => {
	let min = 0;
	let max = arr.length - 1;

	while (min <= max) {
		let mid = Math.floor((min + max) / 2);
		let curr = arr[mid];

		if (arr[mid] < val) {
			min = mid + 1;
		} else if (arr[mid] > val) {
			max = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
};

console.log(search([1,2,3,4,5,6], 4))
console.log(searchRefactored([1,2,3,4,5,6], 4))

