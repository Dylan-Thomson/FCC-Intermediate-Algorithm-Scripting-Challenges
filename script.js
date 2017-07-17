/*********************************************************************	
	SUM ALL
**********************************************************************/
// Use spread syntax to pass arrays to Math.min() and Math.max() 
// function sumAll(arr) {
//     var sum = 0;
//     for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
//         sum += i;
//     }
//   return sum;
// }

// Use spread syntax to get min/max, and arithmetic progression to solve sum
function sumAll(arr) {
	const min = Math.min(...arr);
	const max = Math.max(...arr);
	return (((max - min + 1) * (min + max)) / (2));
}

sumAll([1, 4]);
