/*********************************************************************	
	SUM ALL NUMBERS IN A RANGE
**********************************************************************/
function sumAll(arr) {
	const min = Math.min(...arr);
	const max = Math.max(...arr);
	// Arithmetic Progression sum formula
	return (((max - min + 1) * (min + max)) / (2));
}

// Test sumAll Output
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

// Test diffArray Output
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

/*********************************************************************	
	ROMAN NUMERAL CONVERTER
**********************************************************************/
function convertToRoman(num) {
	var romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
	var arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	var result = [];

	for(var i = 0; i < arabicNumerals.length; i++) {
		while(num >= arabicNumerals[i]) {
			num -= arabicNumerals[i];
			result += romanNumerals[i];
		}
	}

	return result;
}

// Test convertToRoman Output
console.log("convertToRoman(2) = " + convertToRoman(2));
console.log("convertToRoman(3) = " + convertToRoman(3));
console.log("convertToRoman(4) = " + convertToRoman(4));
console.log("convertToRoman(5) = " + convertToRoman(5));
console.log("convertToRoman(9) = " + convertToRoman(9));
console.log("convertToRoman(12) = " + convertToRoman(12));
console.log("convertToRoman(16) = " + convertToRoman(16));
console.log("convertToRoman(29) = " + convertToRoman(29));
console.log("convertToRoman(44) = " + convertToRoman(44));
console.log("convertToRoman(45) = " + convertToRoman(45));
console.log("convertToRoman(83) = " + convertToRoman(83));
console.log("convertToRoman(97) = " + convertToRoman(97));
console.log("convertToRoman(99) = " + convertToRoman(99));
console.log("convertToRoman(500) = " + convertToRoman(500));
console.log("convertToRoman(501) = " + convertToRoman(501));
console.log("convertToRoman(649) = " + convertToRoman(649));
console.log("convertToRoman(798) = " + convertToRoman(798));
console.log("convertToRoman(891) = " + convertToRoman(891));
console.log("convertToRoman(1000) = " + convertToRoman(1000));
console.log("convertToRoman(1004) = " + convertToRoman(1004));
console.log("convertToRoman(1006) = " + convertToRoman(1006));
console.log("convertToRoman(1023) = " + convertToRoman(1023));
console.log("convertToRoman(2014) = " + convertToRoman(2014));
console.log("convertToRoman(3999) = " + convertToRoman(3999));

/*********************************************************************	
	WHEREFORE ART THOU
**********************************************************************/
// Look through an array of objects (collection)
// Return array of all objects that have matching property/value pairs (source)
function whatIsInAName(collection, source) {
  return collection.filter(function(obj) {
  	for(var prop in source) {
  		if(!obj.hasOwnProperty(prop) || obj[prop] !== source[prop]) {
  			return false;
  		}
  	}
  	return true;
  });
}

// Test whatIsInAName()
//console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));


/*********************************************************************	
	SEARCH AND REPLACE
**********************************************************************/
function myReplace(str, before, after) {
	// Capitalize after if before is capitalized
	var index = str.indexOf(before);
	if(str[index] === str[index].toUpperCase()) {
		after = after.charAt(0).toUpperCase() + after.slice(1);
	}
	// Replace before with after
	str = str.replace(before, after);
	return str;
}

// Test myReplace()
console.log("myReplace(\"A quick brown fox jumped over the lazy dog\", \"jumped\", \"leaped\") = " + myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log("myReplace(\"Let us go to the store\", \"store\", \"mall\") = " + myReplace("Let us go to the store", "store", "mall"));
console.log("myReplace(\"He is Sleeping on the couch\", \"Sleeping\", \"sitting\") = " + myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log("myReplace(\"This has a spellngi error\", \"spellngi\", \"spelling\") = " + myReplace("This has a spellngi error", "spellngi", "spelling"));
console.log("myReplace(\"His name is Tom\", \"Tom\", \"john\")  = " + myReplace("His name is Tom", "Tom", "john"));
console.log("myReplace(\"Let us get back to more Coding\", \"Coding\", \"algorithms\") = " + myReplace("Let us get back to more Coding", "Coding", "algorithms"));
