/*********************************************************************	
	SUM ALL
**********************************************************************/
// function sumAll(arr) {
//   var max = arr.reduce(function(a, b) {
//     return Math.max(a, b);
//   });
//   var min = arr.reduce(function(a, b) {
//     return Math.min(a, b);
//   });
//   var result = (max - min + 1) * (max + min)/2;
//   return result;
// }

// Use spread syntax to pass arrays to Math.min() and Math.max()
function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
  return sum;
}

sumAll([1, 4]);
