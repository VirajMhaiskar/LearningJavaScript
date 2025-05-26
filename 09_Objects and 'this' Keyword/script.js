/**The "this" keyword
 * 
 * The "this" keyword is a special type of variable which stores the value of the current
 * object. The value of "this" keyword is not static and it changes based on 
 * where we are using it.
 * 
 */


/**
 * this keyword does not point to the object we are creating it instead it points to 
 * the object we are using it.
 */

const person = {
    name: "Tony",
    birthYear: 1990,
    calculateAge: function() {
        return 2025 - this.birthYear; // this points to the current context.
    }
}

const user = {
    name: "Natasha",
    birthYear: 2000,
    gender: "Female"
}
user.calculateAge = person.calculateAge;

let age = person.calculateAge(); //35
let age1 = user.calculateAge(); //25
console.log(age);
console.log(age1);

/**
 * When we use "this" keyword inside a method of an object, the "this" keyword will point 
 * to the object on which that method is called.
 * 
 * NOTE:- The "this" keyword inside a method of an object does not point to the object inside
 * which that method is defined. It points to the object on which that method is called.
 * 
 */


/**
 * When we use "this" keyword i global scope, it points to global object. In case of 
 * browser the global object is the window object.
 * 
 * When we use "this" keyword inside a global regular function, the "this" keyword will 
 * always point to the global object i.e. window object.
 * 
 * But if we are using strict mode, the "this" keyword will be undefined.
 * 
 * When we use "this" keyword inside an event handler function, the "this" keyword points to
 * the DOM object on which we are adding the event handler function.
 * 
 * Arrow function does not get its own this so it uses it's parent this keyword.
 */

/** tl;dr
 * 
 * Global Scope:- The "this" keyword points to the global object. For browsers, the global
 * object is window object.
 * 
 * Regular Function:- In regular function call, the "this" keyword always point to the global
 * object, or its value is undefined in strict mode.
 * 
 * Method call:- When we use "this" variable inside a method, it points to the object on which
 * the method is called.
 * 
 * Arrow function:- Arrow function does not get its own "this" keyword. It uses the "this"
 * keyword its parent scope.
 * 
 * Event handler:- For event handler functions, the "this" keyword points to the DOM elements
 * on which the event handler function is attached.
 */


/** Arrow Function and this
 * 
 * 
 */

var firstName = "Viraj";

/**Here is person1 we don't define a scope we use {} as a syntax that's why
 * this has a global scope in arrow function.
 */


let person1 = {
    firstName: "Tony",
    birthYear: 1990,
    calculateAge: function() {
        console.log(this);
        return 2025 - this.birthYear
    },
    greetUser: () => {
        console.log("Good Morning " + this.firstName);
    }
}

let age2 = person.calculateAge();
console.log(age2);
person1.greetUser();


/**Now when to use arrow function */

const person2 = {
    firstName: "Thor",
    birthYear: 1990,
    calculateAge: function() {
        const greet = () => { // HERE WE HAVE DEFINED THE SCOPE INSIDE A FUNCTION THAT'S WHY WE CAN USE ARROW FUNCTION HERE AS IT'S PARENT IS PERSON2
            console.log(`Good Morining ${this.firstName}`);
        }
        greet();
        return 2025 - this.birthYear;
    }
}

let age3 = person2.calculateAge();
console.log(age3);


