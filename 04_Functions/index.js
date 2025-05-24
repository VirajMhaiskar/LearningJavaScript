/**FUNCTIONS
 * a function which is created by user is called user defined functions
 * JS defined functions are the functions are pre-built functions in JS.
 */


//Defined a function
function greetings(name) {
    const msg = `Good Morning ${name}, Welcome back!`
    console.log(msg);
}

//calling a function
// greetings("Tony");
// greetings(); //undefined


// functions can also return values
function addition(num1, num2) {
    return num1 + num2;
}

// Calling a function
const add = addition(20, 50);
// console.log(add);
// console.log(addition(10, 20));

// A function can have multiple return statement but it can only returns once
function checkEligibility(age) {
    if(age >= 18) {
        return true;
    } else {
        return false;
    }
}

// console.log(checkEligibility(24));



function allowVoting(age) {
    if(checkEligibility(age)) {
        return "Please cast your vote"; 
    } else {
        return; //a return statement cannot retrun anything as well.
    }
}

// console.log(allowVoting(16)); // undefined


/**FUNCTION EXPRESSION
 * In function expression we assign a value of a function to a variable
 * In JS a function is nothing but a special type of value.
 */


const greeting = function(name, timeOfDay) {
    console.log(`Good ${timeOfDay} ${name}. Welcome Back!!`);
};
// greeting();

//we can pass the value of one function to another variable
const x = greeting;
// console.log(x);

// greeting("Tony", "Morning");

//adding parameters
const multiplication = function(num1, num2) {
    return num1 * num2;
};

// console.log(multiplication(5, 9));

/** A FUNCTION WHICH IS CREATED USING FUCTION DECLARATION CAN BE CALLED EVEN BEFORE IT IS DECLARED.
 * BUT A FUCNTION WHICH IS CREATED USING FUNCTION EXPRESSION CANNOT BE CALLED BEFORE IT IS DECLARED.
*/

//WE CAN CALL FUNCTION DECLARATION EVEN BEFORE IT IS DECLARED
// console.log(division1(10, 2));

//function declaration
function division1(num1, num2) {
    return num1 / num2;
}

// console.log(division2(20, 2)); //---> This will throw an error

//function expression
const division2 = function(num1, num2) {
    return num1 / num2;
};
// console.log(division2(20, 2));


/**CALLBACK AND ANONYMOUS FUNCTION
 * WHEN WE PASS A FUNCTION AS A PARAMETER VALUE THAT IS KNOWN AS CALLBACK FUNCTION.
 * SO A CALLBACK FUNCTION IS THAT FUNCTION WHICH IS CALLED BY ANOTHER FUNCTION.
 * 
 * A FUNCTION WHICH DOES NOT HAVE A NAME IS CALLED ANONYMOUS FUNCTION
 */

/**WE USE CALLBACK FUNCTION WHENEVER WE WANT TO EXECUTE A CODE AFTER SOME EVENT HAS HAPPENED */

// function first() {
//     setTimeout(function() {
//         console.log("First function called!");
//     }, 1000);
// }

// function second() {
//     console.log("Second function is called");
// }

// first();
// second();


function doHomework(subject, callback) {
    console.log(`Started working on my ${subject} homework`);
    callback();
}

function homeworkFinished() {
    console.log("Finished my Homework!!");
    
}

// doHomework("Physics", homeworkFinished); //----> we passed a function as a parameter

/**JS IS AN EVENT DRIVEN PROGRAMMING LANGUAGE MOST OF THINGS
 * HAPPEN IN JS IS BASED ON SOME EVENTS.
 */


/**ANONYMOUS FUNCTION */
// A FUNCTION WHICH DON'T HAVE A NAME
doHomework("Physics", function() {
    console.log("Finished my Homework!!");
});





























