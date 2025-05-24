/**Conditional Statement 
 * if
 * if else
 * if else ladder
 * switch
*/

/**If statement
 * if(condition) {
 *  //if block code
 * }
 */

/**Condition can be anything which returns either true or false */


// let x = 10;
// if(x <= 10) {
//     console.log("hello World!!"); // will be executed
// }

// x = 20;
// if(x <= 10) {
//     console.log("inside if block") //will not be executed
// }

// console.log("This code will always be executed"); //no condition for this code

/**EXAMPLE */

let age = 21;

// if (age >= 18) {
//     console.log("You are eligible to vote!!!");
// }


/**If else statement
 * if(condition) {
 *  //if block code
 * } else {
 *  //else block code
 * }
 */


// if(age >= 18) {
//     console.log("You are eligible to vote!!"); // if true
// } else {
//     console.log("You are not eligible to vote!!"); // if false
// }


/**if else ladder
 * if(condition) {
 *  //if code
 * } else if(condition) {
 *  //else if code
 * } else {
 *  //else block code
 * }
 */

let marks = 85;

// if(marks >= 90) {
//     console.log("A");
// } else if(marks >= 80 && marks <= 90) {
//     console.log("B");
// } else {
//     console.log("C");
// }


/**Ternary operator
 * use ternary operator to replace if else code
 * (condition) ? (true statement) : (false statement)
 */

//fun fact :- every operator returns a value in JS;

// age >= 18 ? console.log("You can vote!!") : console.log("You can't vote!!");

const voting = age >= 18 ? "You can Vote!!" : "You cannot vote!!!"
// console.log(voting);


/**Switch statement 
 * switch(value) {
 *  case 1:
 *      //statement
 *      //break
 *  default:
 *      //statement
 * }
*/


let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Webnesday");
        break;
    case 4: 
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6: 
        console.log("Saturday");
        break;
    case 7:
        console.log("Sanday");
        break;
    default:
        console.log("Enter Valid Day!!");
}


switch(day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Today is weekday");
        break;
    case 6:
    case 7:
        console.log("Today is weekend");
        break;
    default:
        console.log("Enter valid day");
}









