/** The "arguments" parameter
 * 
 * Every regular function receives a parameter by default called as "arguments" parameters.
 * This parameter stores all the arguments passed to a function inside an array.
 * 
 * 
 */


/**
 * 
 * arguments object will only be available for regular function and function expression.
 */

const addition = function() {
    console.log(arguments);
    let sum = 0;
    for(args of arguments) {
        sum += args;
    }
    return sum;
}
// console.log(addition(10, 20, 30, 40));


/**Value type vs Reference type
 * 
 * A variable can either store a value directly or it can store reference to a memory address
 * where the value is actually stored. Based on that, we can also classify data as value type and Reference type.
 * 
 * Value type:- When a type stores a value assigned to it, it is called as value type. All
 * primitive data types in JS are value types.
 * 
 * Reference type:- When a type does not store a value directly, but is stores the memory address(reference)
 * of the value where it is actually stored, it is called as reference type. Every value except primitive types
 * are reference type in JS.
 * 
 * WHEN WE CREATE A VARIABLE IN JS, THE VALUE ASSIGNED TO THAT VARIABLE IS STORED SOMEWHERE IN THE
 * MEMORY. THE MEMORY CAN BE CLASSIFIED INTO TWO TYPES -STACK MEMORY AND HEAP MEMORY.
 * 
 * Value type:- The values of value type/primitive type are stored and executed in stack memory.
 * 
 * Reference type: The values of reference type like objects, functions, arrays etc are stored
 * and executed in heap memory.
 * 
 * NOTE:- When we create a variable or a function, we give a name to that variable. That name 
 * is called as an identifier. An identifier always stores value from stack memory.
 */

let x = 30;
let y = x;

// console.log(x, y);

// As values are stored in variable x and not reference it doesn't reflect 
// on y unless we explicitly do it.
x = 100;
// console.log(x, y);

y = x; // explicitly changing the value of y.
// console.log(x, y);


//Reference Type
const obj1 = {
    name: "Tony",
    age: 28
};

const obj2 = obj1;
// console.log(obj1, obj2);

obj2.age = 30; // as objects are referenced type the change in value will reflect in all variables.
// console.log(obj1, obj2);

/**VALUE TYPE AND REFERENCE TYPE IN PRACTICE */

let a = 30;
let b = 30;
// console.log(a === b); //true SAME VALUE

let obj3 = {age: 30};
let obj4 = {age: 30};
// console.log(obj3 === obj4); //false(Reference will be compared) DIFFERENT REFERENCE

let obj5 = obj2;
// console.log(obj5 === obj2); //true(Reference will be compared) SAME REFERENCE

/**Pass by Value AND Pass by Reference
 * 
 * 
 */

let flight = "BNB289";

let person = {
    name: "Tony",
    passport: 1234321
}

function checkIn(flightNum, passanger) {
    flightNum = "BNB999";
    passanger.name = "Mr. " + passanger.name;

    if(passanger.passport === 1234321) {
        console.log(`Hello ${passanger.name}, you are checked for flight ${flightNum}`);
    } else {
        console.log("Invalid Passport");
    }
}


checkIn(flight, person);
console.log(flight);
console.log(person);
























