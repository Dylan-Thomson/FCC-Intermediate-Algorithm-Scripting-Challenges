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

/*********************************************************************	
	DIFF TWO ARRAYS
**********************************************************************/
function diffArray(arr1, arr2) {
	// Merge arrays, filter merged array by removing items that appear in both arrays
  return arr1.concat(arr2).filter(function(item) {
  	if(!arr1.includes(item) || !arr2.includes(item)) {
  		return item;
  	}
  });
}
console.log("diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) = " +  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log("diffArray([\"diorite\", \"andesite\", \"grass\", \"dirt\", \"pink wool\", \"dead shrub\"], [\"diorite\", \"andesite\", \"grass\", \"dirt\", \"dead shrub\"]) = " 
						+  diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log("diffArray([\"andesite\", \"grass\", \"dirt\", \"pink wool\", \"dead shrub\"], [\"diorite\", \"andesite\", \"grass\", \"dirt\", \"dead shrub\"]) = " 
						+  diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log("diffArray([\"andesite\", \"grass\", \"dirt\", \"dead shrub\"], [\"andesite\", \"grass\", \"dirt\", \"dead shrub\"]) = " 
						+  diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));
console.log("diffArray([1, \"calf\", 3, \"piglet\"], [1, \"calf\", 3, 4]) = " +  diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log("diffArray([], [\"snuffleupagus\", \"cookie monster\", \"elmo\"]) = " +  diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
console.log("diffArray([1, \"calf\", 3, \"piglet\"], [7, \"filly\"]) = " +  diffArray([1, "calf", 3, "piglet"], [7, "filly"]));

