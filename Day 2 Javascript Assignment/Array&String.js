console.log("Arrays and Strings");

//Strings methods

let str1="I am a web developer and a web designer.";
console.log(str1);

//From a particular Index position to Specified index position the slicing is done in the string
console.log("The text sliced from 30 to 39 is "+str1.slice(30,39));
console.log("The text sliced from 7 to 10 is "+str1.slice(7,10));

//To replace a single character with other character
console.log("The character g is replaced with z"+str1.replace('g','z'));
console.log("The character i is replaced with f"+str1.replace('g','f'));

//To extract a substring from the main string
console.log("the sub string of the main string is given as :"+str1.substring(10,30));

//To print or repeat the string n number of times
console.log(str1.repeat(3));

//To find the index position of a charcter
console.log("The character v is at position "+ str1.indexOf("v"));
console.log("The character g is at position "+ str1.indexOf("g"));
console.log("The character i is at position "+ str1.indexOf("i"));

//To find whether the string starts with the specified character or not
console.log("Does the string starts with I ?"+ str1.startsWith("I"));
console.log("Does the string starts with d"+str1.startsWith("d"));

//TO find whether the string ends with the specified character or not
console.log("Does the string ends with r ?"+str1.endsWith("r"))
console.log("Does the string ends with . ?"+str1.endsWith("."))

//To find the last index of a character
console.log("The last index of e in the string is "+str1.lastIndexOf("e"));
console.log("The last index of a in the string is "+str1.lastIndexOf("a"));

//Change the string to lower case
console.log(str1.toLowerCase());
//Change the string to upper case
console.log(str1.toUpperCase());

//To find the character at the position as specified
console.log("The character at the position 5 is "+str1[5]);


//Array Methods


let arr1= [1,2,3,["Hi","How Are You ?","Good",[true,false],564.876],"That's great",["Meet up soon","sure"],"Bye"];
let arr2=[7,8,9];
console.log(arr1);

//To check whether the specified array is a array or not
console.log(Array.isArray(arr1));

//To display the array value at specified index position
console.log(arr1[3]);

//To concatinate the 2nd array into 1st array
console.log(arr1.concat(arr2));

//Appending an element in the start of the array
arr2.unshift("dancing");
console.log(arr2);

//Appending an element in end of the array
arr2.push("singing");
console.log(arr2);

//Removing an element from the start of the array
arr1.shift(1);
console.log(arr1);

//Removing an element from the end of the array
console.log(arr1.pop());

//To reverse the array
console.log(arr1.reverse());