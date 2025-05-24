/**ARRAYS IN JS 
 * 
 * IN JS, AN ARRAY IS USED TO CREATE A COLLECTION/LIST.
 * IT CAN BE USED TO CREATE A LIST OF SIMPLE TYPES LIKE STRING OR A LIST OF COMPLEX TYPES LIKE OBJECTS.
 * 
 * AN ARRAYIS A SPECIAL TYPE OF OBJECT IN JS, WHICH HAS ITS OWN METHODS AND PROPERTIES.
 * 
*/


let student = ["John", 28, "male", 123456, true]; //in background new Array()

//all the values in array can be accessed by its index which starts from 0

const name = student[0]; // accessing array element
student[3] = 456789; //manipulating array element

/**JS ARRAYS ARE DYNAMIC IN SIZE WE CAN ADD N NUMBER OF ELEMENTS IN ARRAY IN JS */

//USING NEW ARRAY() SYNTAX

// let user = new Array(); // creates an empty array
// console.log(user);

let user = new Array("admin", "readme", "It");
// console.log(user);

/**new Array() SYNTAX HAS A BUG IN IT WHEN WE CREATE AN ARRAY USING THIS SYNTAX
 * AND GIVE ONLY ONE NUMERIC VALUE IT TAKES IT AS A SIZE OF AN ARRAY AND NOT AN ELEMENT
 */

// let numbers = new Array(10);
// console.log(numbers); //---> says that <10 empty items>


/**ARRAYS METHODS AND PROPERTIES */

// let names = ["Clint", "Tony", "Steve", "Natasha"];

//length --> retursn size of an array
// console.log(names.length); // in background length doesn't calculate the length of an array it just add 1 into the highest number of index.

// let arr = [];
// arr[50] = 20;
// console.log(arr[50]);
// console.log(arr.length);

let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

numbers.length = 2; // length also truncated the array 
// console.log(numbers);
// after it is truncated it's values cannot be brought back


let names = ["Clint", "Tony", "Steve", "Natasha"];

//push ---> it inserts the element at the end of the array
names.push("Scott");
// console.log(names);

// pop ---> it is used to remove the element fromt he end of an array. It also returns that value

let oneName = names.pop();
// console.log(oneName);
// console.log(names);

//unshift ---> used to insert the element at the start of the array

names.unshift("Bruce");
// console.log(names);


//shift ---> it is used to remove the element from the start of an array and also return it.

let firstName = names.shift();
// console.log(firstName);
// console.log(names);

// we can push and unshift multiple element at the same time

// names.push("Bruce", "Bucky", "Nick");
// console.log(names);

// names.unshift("Loki", "Thor", "Steven");
// console.log(names);

// indexOf ---> return the index of an element in the array else -1

console.log(names.indexOf("Steve")); //2
console.log(names.indexOf("T'Challa")); // -1












