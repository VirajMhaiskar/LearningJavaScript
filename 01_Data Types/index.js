/** let, var, const
 * There are three ways we can declare a variable.
 * var:- it is an old way to declare a varaible as it has scoping issues we don't use it anymore
 * let:- let is introduced as a ES6 feature. It has properly defined scope out of which it cannot be used.
 * const:- const is just like let. But const varibale cannot be redeclare and has to be initiated and assigned at the same time.
 */

/** DATATYPES **/

let number = 2;
let number2 = 2.6;
// both are numders in js

//string
let name = "Tony";
const middleName = `Howard`;
let lastName = 'Stark';
// strings can be defined in three ways as above

//boolean
const isStudent = false;
const isBillionaire = true;


//null
const txt = null

//undefined
let a;

// object
// key: value
const person = {
    name: "Steve",
    lastName: "Rogers",
    age: 100,
    profession: "Super Hero"
}

// objects values can be changed with dot operator
person.name = "Bucky";
person.lastName = "Barnes"

console.log(person);


// Arrays
let arr = ["Iron Man", "Batman", "Superman", "Spider-Man", "Captain America"];

console.log(arr);

