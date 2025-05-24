/**LOOPS IN JS
 * 
 * A LOOP IN JS ALLOWS US TO EXECUTE A PIECE OF CODE MULTIPLE TIMES AS LONG AS A GIVEN
 * CONDITION SATISFIES.
 * 
 * THREE TYPES
 * 
 * while statment
 * do-while statment
 * for ladder
 * 
 * all works excatly the same with some difference
 */

// let i = 10;

// while (i >= 1) { // i's value must change to stop the loop here
//     console.log("Value of i is: " + i--);
// }

// if the condition is not passed the loop will not run

// const user = ["Steve", "Tony", "Bruce", "Natasha"]
// let index = 0;
// while(index < user.length) {
//     console.log(user[index]);
//     index++;
// }

// do while loops

let j = 10;
const user = ["Steve", "Tony", "Bruce", "Natasha"]

// do while loop will run at least once even if condition doesn't met

// do {
//     console.log("Value of j is: " + j++);
// } while(j < 10);

// for loops

// for(let x = 1; x <= 10; x++) {
//     console.log("Value of x is: " + x);
// }

// THIS IS HOW WE CAN ALSO USE A FOR LOOP
// let i = 1;
// for(;i <= 10;) {
//     console.log(i);
//     i++;
// }


//initialization is only done when conditiona dn increment and decrement will happen again and agian
// for (let i = 0; i < user.length; i++) {
//     console.log(user[i]);
// }

/**BREAK AND CONTINUE
 * 
 * break:- used to break out of a loop explicitly
 * continue:- Skip an iteration
 */

// let x = 1;
// while(x <= 10) {
//     if(x === 5) {
//         break; // BREKA OUT OF A LOOP
//     }
//     console.log(x);
//     x++;
// }

for(let i = 0; i < 10; i++) {
    if(i % 2 == 0) {
        continue;
    }
    console.log(i);
}



