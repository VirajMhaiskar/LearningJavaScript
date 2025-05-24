/**
 * Operands are what operators are applied to. For eg. '2 + 5' here 2 and 5 are operands
 * and + is an operator
 */

let x = 5;
x = -x; // Unary operator operates on single operand
// console.log(x);


//let a = 20 + x; // binary operator
// console.log(a);

// ternary operator have 3 operands

/** MATH OPERAOTR
 * +, -, *, /, %, **
 */

let y = 10;
let z = 2;

// console.log(y + z);  //12
// console.log(y - z);  //8
// console.log(y * z);  //20
// console.log(y / z);  //5
// console.log(y % z);  //0
// console.log(y ** z); //100

/**OPERATOR PRECEDANCE
 * + and - have same precedance
 * * and /  have same precedance
 * * and / have higher precendace than + and -
 * if two operator with same precedance is used the operation will be done from left to right.
 */

// console.log(10 + 2 / 3 * 4 - 10);

// A STRING USED WITH MATHEMATICAL OPERATOR WILL CONVERT EVERYTHING INTO STRING

// console.log("10" + 5);       // 105
// console.log(true + "hello"); //truehello

/** +  will convert a number to string if one of them is string
 * but -, * and / will convert a string into a NaN
 * but if a string can be converted into a number it will be converted into a number
 * booleans value will be converted into 0 and 1;
 */

// console.log(2 * "Hello"); //NaN
// console.log(2 * "23");    //46
// console.log(2 - "21");    //-19
// console.log(2 + true);    //3
// console.log(2 - false);   //2


/**ASSIGNMENT OPERATOR 
 * = operator is called assignment operator
*/


let a = 10;
let b;
// console.log(b = 20);

let c = 200 * (100 - (a = b + 10));

a = b = c = 100;

//short hand notations

let sum = 10
sum += 5;
//sum = sum + 5;


/**INCREMENT AND DECREMENT OPERATOR */

let counter = 10;

// counter++; //postincrement
// ++counter; //preincrement
// console.log(counter);

// counter--;
// --counter;

// console.log(counter);


/**INCREMENT AND DECREMENT OPERATOR CANNOT BE USED ON VALUES 
 * THEY CAN BE ONLY USED ON VARIABLES
 */
// let score = ++100;
// console.log(score);

/**DEFFERENCE BETWEEN POST AND PRE  
 * pre increment first increment the variable and then assign it.
 * post increment first assign the value and then increment the variable.
*/


/**typeof is a unary operator which returns the type of an operator or value */

// console.log(typeof("Hello"));


/**COMPARISON OPERATOR
 * ==, ===, !=, !==, >, <, >=, <=
 */

let mark1 = 20;
let mark2 = 30;

// console.log(mark1 > mark2);
// console.log(mark1 < mark2);
// console.log(mark1 >= mark2);
// console.log(mark1 <= mark2);

// comparison operator will always return a boolean value

let mark3 = mark1 > mark2
// console.log(mark3); // false

// comparison value will chnage non numeric value to numeric value if the comparison has one number

// console.log("20" > 10); //true
// console.log("Hello" > 10); //false "Hello" is NaN

/**
 * == and != will only check the value and not the datatype 
 * === will !== check both the value and datatype
 */

// console.log(10 == "10"); //true
// console.log(10 === "10"); //false

// console.log(10 != "10"); //false
// console.log(10 !== "10"); //true

/**
 * equality operator and greater than equal operator works differently
 */

// console.log(null == 0); //This operator works such that both null and undefined are equal to each other but not to any other value //false
// console.log(null >= 0); //This operator convert null into 0 //true


/**LOGICAL OPERATOR 
 * &&, ||, !
*/

let m = true;
let n = false;
let o = true;

// OR - ||

console.log(n || m);

/**TRUTHY AND FALSY
 * false, undefined, null, Empty String '', NaN, 0 are falsy values
 * any other value other that above 6 values are truthy values
 */





