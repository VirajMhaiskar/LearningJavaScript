/**JS IS A OBJECT ORIENTED PROGRAMMING LANGUAGE
 * ANY VALUE WHICH DOES NOT BELONG TO (Number, BigInt, String, Boolean, Undefined, Null, Symbole) THIS 7 DATATYPES IS BASICALLY AN OBJECT IN JS
 * A FUNCITON AN ARRAY ARE BASICALLY AN OBJECT IN JS
 */

/**Object literal syntax */

/**OBJECT AND PROPERTIES */

// ONE WAY TO CREATE AN OBJECT

// let user = new Object();
// user.name = "John";
// user.age = 28;

// USING OBJECT LITERAL

let user = {
    name: "John",
    age: 28,
    "full name": "John F. Kennady" // ---> To use spaces in object as a variable we can use string.
}; 

//{} = new Object();
/**BEHIND THE SCENE
 * let user = new Object();
 * user.name = "John";
 * user.age = 28
 */


// TO ACCESS THE VALUES IN OBJECT WE CAN USE DOT OPERATOR OR SQUARE BRACKET

// console.log(user);
// console.log(user.name);
// console.log(user["age"]); ///---> remember to use string as an input.
// console.log(user["full name"]); // ----> WE CANNOT USE DOT OPERATOR IN THIS CASE

//TO ADD MORE VALUE

user.gender = "Male";
// console.log(user);

// WE CAN ALSO CHANEG VALUES
user.age = 30;
// console.log(user);

//DELETE PROPERTIES

delete user["full name"];
console.log(user);

/**OBJECT IS BASICALLY A KEY VALUE PAIR */

// assigning a function in object
// when a function is stored in a variable in an object it is called as a method
/** WHEN A PROPERTY STORES A FUNCTION IT IS CALLED AS A METHOD, BUT WHEN A PROPERTY STYRES A 
 * PRIMITIVE VALUE IT IS CALLED AS A PROPERTY
 */
let user1 = {
    name: "Tony",
    yearOfBirth: 1989,
    isMarries: true,
    calculateAge: function() {
        return 2025 - this.yearOfBirth; //THIS KEYWORD POINTS TO THE CURRENT OBJECT
    } // Here calculateAge is a method
}

console.log(user1.calculateAge());













