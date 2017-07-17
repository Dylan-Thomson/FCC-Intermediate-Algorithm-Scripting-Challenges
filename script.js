/*********************************************************************	
	SUM ALL
**********************************************************************/
function sumAll(arr) {
	const min = Math.min(...arr);
	const max = Math.max(...arr);
	return (((max - min + 1) * (min + max)) / (2));
}

console.log("sumAll([1, 4]) = " + sumAll([1, 4]));
console.log("sumAll([4, 1]) = " + sumAll([4, 1]));
console.log("sumAll([5, 10]) = " + sumAll([5, 10]));
console.log("sumAll([10, 5]) = " + sumAll([10, 5]));
