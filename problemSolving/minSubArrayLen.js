// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer...This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function.  If there isn't one, return 0 instead.  Examples:
//minSubarrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
//minSubarrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
function minSubArrayLen(arr, num) {
	let i = 0;
	let j = 0;
	let sum = 0;
	let count = Infinity;

	while (i < arr.length) {
		if (sum < num && j < arr.length) {
			sum += arr[j];
			j++;
		} else if (sum >= num) {
			count = Math.min(count, j - i);
			sum -= arr[i];
			i++;
		} else {
			break;
		}
	}
	return count === Infinity ? 0 : count;
}
