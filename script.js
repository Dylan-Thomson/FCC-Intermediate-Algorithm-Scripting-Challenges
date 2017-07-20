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
console.log("diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) = " +	diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log("diffArray([\"diorite\", \"andesite\", \"grass\", \"dirt\", \"pink wool\", \"dead shrub\"], [\"diorite\", \"andesite\", \"grass\", \"dirt\", \"dead shrub\"]) = " 
						+ diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log("diffArray([\"andesite\", \"grass\", \"dirt\", \"pink wool\", \"dead shrub\"], [\"diorite\", \"andesite\", \"grass\", \"dirt\", \"dead shrub\"]) = " 
						+ diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log("diffArray([\"andesite\", \"grass\", \"dirt\", \"dead shrub\"], [\"andesite\", \"grass\", \"dirt\", \"dead shrub\"]) = " 
						+ diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));
console.log("diffArray([1, \"calf\", 3, \"piglet\"], [1, \"calf\", 3, 4]) = " +	diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log("diffArray([], [\"snuffleupagus\", \"cookie monster\", \"elmo\"]) = " +	diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
console.log("diffArray([1, \"calf\", 3, \"piglet\"], [7, \"filly\"]) = " +	diffArray([1, "calf", 3, "piglet"], [7, "filly"]));

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
console.log("whatIsInAName([{ first: \"Romeo\", last: \"Montague\" }, { first: \"Mercutio\", last: null }, { first: \"Tybalt\", last: \"Capulet\" }], { last: \"Capulet\" }) = ");
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }).forEach(function(obj) {
	console.log(obj);
});
console.log("whatIsInAName([{ \"a\": 1 }, { \"a\": 1 }, { \"a\": 1, \"b\": 2 }], { \"a\": 1 })	= " );
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }).forEach(function(obj) {
	console.log(obj);
});
console.log("whatIsInAName([{ \"a\": 1, \"b\": 2 }, { \"a\": 1 }, { \"a\": 1, \"b\": 2, \"c\": 2 }], { \"a\": 1, \"b\": 2 }) = ");
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }).forEach(function(obj) {
	console.log(obj);
});
console.log("whatIsInAName([{ \"a\": 1, \"b\": 2 }, { \"a\": 1 }, { \"a\": 1, \"b\": 2, \"c\": 2 }], { \"a\": 1, \"c\": 2 }) = ");
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }).forEach(function(obj) {
	console.log(obj);
});
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
console.log("myReplace(\"His name is Tom\", \"Tom\", \"john\")	= " + myReplace("His name is Tom", "Tom", "john"));
console.log("myReplace(\"Let us get back to more Coding\", \"Coding\", \"algorithms\") = " + myReplace("Let us get back to more Coding", "Coding", "algorithms"));
/*********************************************************************	
	PIG LATIN
**********************************************************************/
function translatePigLatin(str) {
	var vowels = /[aeiou]/gi;
	// If word begins with vowel just concat "way"
	if(str[0].match(vowels)) {
		str += "way";
	}
	else {
		// Get index of first vowel
		var firstVowelIndex = str.indexOf(str.match(vowels)[0]);
		// Move consonants before first vowel to end, add "ay"
		str = str.substr(firstVowelIndex) + str.substr(0, firstVowelIndex) + "ay";
	}
	return str;
}

// Test translatePigLatin()
console.log("translatePigLatin(\"consonant\") = " + translatePigLatin("consonant"));
console.log("translatePigLatin(\"paragraphs\") = " + translatePigLatin("paragraphs"));
console.log("translatePigLatin(\"glove\") = " + translatePigLatin("glove"));
console.log("translatePigLatin(\"algorithm\") = " + translatePigLatin("algorithm"));
console.log("translatePigLatin(\"eight\") = " + translatePigLatin("eight"));

/*********************************************************************	
	DNA PAIRING
**********************************************************************/
function pairElement(str) {
	// Map pairs
	var pairMap = {T: "A", A: "T", G: "C", C: "G"};
	return str.split("").map(function(char) {
		return [char, pairMap[char]];
	});
}

// Test pairElement()
console.log("pairElement(\"GCG\") = "); console.log(pairElement("GCG"));
console.log("pairElement(\"ATCGA\") = "); console.log(pairElement("ATCGA"));
console.log("pairElement(\"TTGAG\") = ");	console.log(pairElement("TTGAG"));
console.log("pairElement(\"CTCTA\") = ");	console.log(pairElement("CTCTA"));


/*********************************************************************	
	MISSING LETTERS
**********************************************************************/
function fearNotLetter(str) {
	for(var i = 1; i < str.length; i++) {
		// If charcode is not 1 larger than previous char, letter is missing
		if((str[i-1].charCodeAt(0) + 1) !== str[i].charCodeAt(0)) {
			return String.fromCharCode(str[i-1].charCodeAt(0) + 1);
		}
	}
	return undefined;
}

// Test fearNotLetter()
console.log("fearNotLetter(\"abce\") = " + fearNotLetter("abce")); 
console.log("fearNotLetter(\"abcdefghjklmno\") = " + fearNotLetter("abcdefghjklmno"));
console.log("fearNotLetter(\"bcd\") = " + fearNotLetter("bcd"));
console.log("fearNotLetter(\"yz\") = " + fearNotLetter("yz"));

/*********************************************************************	
	BOO WHO
**********************************************************************/
function booWho(bool) {
	return typeof bool === 'boolean';
}

// Test booWho()
console.log("booWho(null) = " + booWho(null));
console.log("booWho(true) = " + booWho(true));
console.log("booWho(false) = " + booWho(false));
console.log("booWho([1, 2, 3]) = " + booWho([1, 2, 3]));
console.log("booWho([].slice) = " + booWho([].slice));
console.log("booWho({ \"a\": 1 }) = " + booWho({ "a": 1 }));
console.log("booWho(1) = " + booWho(1));
console.log("booWho(NaN) = " + booWho(NaN));
console.log("booWho(\"a\") = " + booWho("a"));
console.log("booWho(\"true\") = " + booWho("true"));
console.log("booWho(\"false\") = " + booWho("false"));


/*********************************************************************	
	SORTED UNION
**********************************************************************/
function uniteUnique(arr) {
	// Turn arguments into array and reduce it
	return Array.from(arguments).reduce(function(a, b) {
		// Filter out elements in b that are already in a, then concat with a
		return a.concat(b.filter(function(index) {
			return a.indexOf(index) === -1;
		}));
	});
}

// Test uniteUnique()
console.log("uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) = "); console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log("uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) = "); console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));
console.log("uniteUnique([1, 2, 3], [5, 2, 1]) = "); console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log("uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) = "); console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
