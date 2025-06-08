/**DESTRUCTURING SYNTAX
 * 
 * Destructuring assignment is a special syntax in JS, introduced in ES6, that allows us to "unpack" arrays or
 * objects into a bunch of variables.
 * 
 * DESTRUCTURIN MAKES EXTRACTING DATA FROM AN ARRAY OR AN OBJECT, VERY SIMPLE AND READABLE.
 */

// const person = ["John", "Smith", 28, "male", ["Mumbai", "India"]];
// const [firstName, lastName, , gender, city] = person;  //CITY WILL BE UNDEFINED
// const [firstName, lastName, , gender, city = "London"] = person; //CITY WILL BE LONDON BUT IF THE VALUE IS PRESENT IN THE ARRAY IT WILL TAKE THAT VALUE
// const [firstName, lastName, , gender, city, country] = person; //CITY WILL HAVE AN ARRAY AND COUNTRY WILL BE UNDEFINED
// const [firstName, lastName, , gender, [city, country]] = person;
// console.log(firstName);
// console.log(lastName);
// // console.log(age);
// console.log(gender);
// console.log(city);
// console.log(country);
// console.log(person);

/**OBJECT DESTRUCTURING */

// const employee = { 
//     name: "Steve",
//     age: 28,
//     gender: "Male",
//     area: ["London", "UK"],
//     workDetails: { exp: 5, company: "Google" },
// };
//FOR OBJECT DESTRUCTURING THE VARIABLE NAME MUST BE EQUAL TO THE KEY NAME OF AN OBJECT
// const { name: firstName, workDetails, age, area, gender, department = "IT", workDetails: {exp: experience} } = employee; // USED FIRSTNAME ALIAS WHICH REFERENCE NAME
// console.log(firstName, age, area, workDetails, gender, department, experience);

// const { name, workDetails, age, area: [city, country] } = employee; // DESTRUCTURING ARRAY IN AN OBJECT
// console.log(city, country);



/**THE SPREAD OPERATOR
 * 
 * the spread operator in JS is a powerfull and versatile feature that allows you to expand iterable objects
 * (like arrays, strings and maps) into individual elements. It's used in various contexts, making your code more
 * concise and readable.
 * 
 * KEY POINTS
 * 
 * ➡️Shallow Copy: When used with objects, the spread operator creates a shallow copy. Nested objects are still
 * referenced, not deeply cloned.
 * ➡️Iterable Objects: The spread operator works with iterable objects (arrays,strings, maps, sets). Regular objects
 * are not directly iterable but work in the way shown above.
 * ➡️Readability: The spread operator often makes code more concise and easier to understand compared to older
 * methods (like concat for arrays or looping).
 */

// const originalArray = [1, 2, 3];
// console.log(...originalArray);
//USECASE: TO MAKE A COPY OF AN ARRAY
// const copyArray = [...originalArray];
// originalArray.push(4);
// console.log(originalArray);
// console.log(copyArray);

//USECASE: COMBINE TWO OR MORE ARRAYS.

// const array1 = [1, 2, 3];
// const array2 = [6, 7, 8];

// const newArray = [...array1, ...array2];
// const newArray = [0, ...array1, 4, 5, ...array2]; //ABOVE AND BELOW BOTH ARE VALID
// console.log(newArray);

//WE CAN USE SPREAD OPERATOR ON A STRING VALUE AS WELL
// console.log(..."Sydney Sweeny");
// console.log([..."Sydney Sweeny"]); //TO CREATE ARRAY FROM STRING 

//WE CAN USE SPREAD OPERATOR ON OBJECT AS WELL

// const obj1 = { a: 1, b: 2 };
// const obj2 = { ...obj1, c: 3, a:10 }; // WE CAN CHANGE THE VALUE OF EXISTING KEY
// console.log(obj2);
// console.log(...obj1); //DOES NOT WORK

/**THE REST PATTERN AND REST PARAMETER
 * 
 * THE REST PATTERN
 * The resst operator in JS allows you to collect rest of the values into an array or rest of the properties into
 * an object
 * NOTE: The rest operator syntax is exactly like the spread operator but rest operator does the opposite of 
 * spread operator.
 * 
 * ➡️ Spread Operator: Extract the elements of an array or properties of an Object into individual elements.
 * ➡️ Rest Operator: Create a new array with rest of the values in an expression.
 * 
 * The syntaxt of rest operator is same as the spread operator. To identify rest operator and spread operator, you
 * can use following method:
 * ➡️ The rest operator always comes before the assignment operator.
 * ➡️ On the other hand, the spread operator always comes after the assignment operator
 */

// const arr = [1, 2, 3];
// const newArray = [-1, 0, ...arr];
// console.log(newArray);


// const [a, b, ...rest] = [1,2,3,4,5]; //THE REMAINIGN ELEMENTS ARE ASSIGNED INTO AN ARRAY.
// console.log(a, b, rest);

// const obj = { a:1, b:2, c:3, d:4 };
// const {a,b,...obj2} = obj;

// console.log(a, b, obj2);
/********** SPREAD OPERATOR WILL ALWASY COME AT RIGHT HAND SIDE OF THE ASSIGNMENT OPERATOR **********/
/********** REST OPERATOR WILL ALWASY COME AT LEFT HAND SIDE OF THE ASSIGNMENT OPERATOR **********/

/**THE REST PARAMETER 
 * 
 * The rest parameter collects remaining arguments into an array within a function defination. This is used only
 * in function parameter lists.
 * NOTE: Rest parameter should always be the last in the parameter list.
 */

// function addNumbers(a, b,...others) {
//     let sum = a + b;
//     for(let i = 0; i < others.length; i++) {
//         sum += others[i];
//     }
//     return sum;
// }

// console.log(addNumbers(10,30));
// console.log(addNumbers(10,20,30));
// console.log(addNumbers(10,20,30,40));


/**OPTIONAL CHAINING
 * 
 * Optional Chaining(?.) is a concise way to access potentially nested object properties without causing errors if
 * an intermediate property doesn't exist. It short-circuits the property access if it encounters a null or undefined
 * value, returning undefined instead of throwing an error.
 */

// const user = {
//     name: "John",
//     age: 28,
//     address: {
//         city: "London",
//         country: "UK"
//     },
//     contact: null
// }

// console.log(user.name);
// console.log(user.gender); //undefined
// console.log(user.address.city);
// console.log(user.address.zip); //undefined


// const products = [
//     {
//         id: 1,
//         name: "LG Smart TV",
//         features: {ram:32,memory:128},
//         model: {name:"AB1982X", year: 2024},
//     },
//     {
//         id: 2,
//         name: "T-Shirt",
//         details: {size: "XL", color: "red"},
//         model: null,
//     },
//     null
// ];

// products.forEach((product) => {
//     console.log("Product Details");
//     console.log("***********************");
//     console.log("Name: ", product?.name);
//     console.log("RAM: ", product?.features?.ram);
//     console.log("Year: ", product?.model?.year);
//     console.log("Size: ", product?.details?.size);
//     console.log("");
// });

/**NULLISH COALESING OPERATOR
 * 
 * The nullish coalesing operator(??) is a logical operator in JS that returns its right-hand side operand only
 * when its left-hand side operand is null or undefined. It's a way to provide a default value when a varibale is
 * either explicitly null or undefined.
 * 
 * ➡️ It is a logical operator.
 * ➡️ Returns left hand side operand if it is not null or undefined.
 * ➡️ Else, return right hand side operand.
 */

// const a = 20;
// const b = "height not defined";

// const height = a !== null || a != undefined ? a : b;
// const height = a ?? b;
// console.log(height);


// products.forEach((product) => {
//     console.log("Product Details");
//     console.log("***********************");
//     console.log("Name: ", product?.name ?? "");
//     console.log("RAM: ", product?.features?.ram ?? "");
//     console.log("Year: ", product?.model?.year ?? "");
//     console.log("Size: ", product?.details?.size ?? "");
//     console.log("");
// });


/**LOOPING OVER OBJECT KEYS AND VALUES */

// const user = {
//     name: "John",
//     age: 28,
//     gender: "male"
// }

// const keys = Object.keys(user);
// console.log(keys);

// keys.forEach((key) => {
//     console.log(key);
// });


// const values = Object.values(user);
// console.log(values);

// values.forEach((value) => {
//     console.log(value);
// });

// const entries = Object.entries(user);
// console.log(entries);

// entries.forEach((entry) => {
//     entry.forEach((ent) => {
//         console.log(ent);
//     })
// });


/**THE FOR-OF LOOP
 * 
 * The for...of loop in JS is a modern and elegant way to iterate over iterables. This includes arrays, strings,
 * maps, sets and other iterables. It simplifies iteration compared to the traditional for loop, especially when
 * you just need the values of the iterable.
 */

const colors = ["red", "green", "blue"];
const str = "Hello World!";

const products = [
    { name: "IPhone 15", price: 1299, color: "black" },
    { name: "Galaxy A2", price: 899, color: "red" },
    { name: "Pixel 8", price: 1189, color: "white" }
];


// for(const color of colors) {
//     console.log(color);
// }

// for(const s of str) {
//     if(s === "l") {
//         continue;
//     }
//     console.log(s);
// }

// for(const product of products) {
//     console.log(product);
// }

//COUNT THE TOTAL CHARACTERS IN A STRING WITHOUT USING LENGTH PROPERTY

// function countChars(value) {
//     let counter = 0;
//     for(const char of value) {
//         counter++;
//     }
//     return counter;
// }

// console.log(countChars(str));

/**WHEN TO USE FOR...OF LOOP
 * 
 * ➡️ Use for...of when you need to iterate over the values of an iterable(arrays, strings, maps, sets) and you
 * don't need the index
 * ➡️ Use the traditional for loop when you need the index(eg. to modify the original array or access elements
 * based on their position) or when you need more fine-grained control over the iteration process.
 * ➡️ Also, if you're working with something that's not iterable, for...of won't work.
 */


/**THE FOR..IN LOOP
 * 
 * The for..in loop in JS is used to iterate over the enumerable properties of an object. It's important to understand
 * that it's designed for objects, not arrays(although it can technically be used with arrays, but it's genrally
 * not recommended).
 */


const product = { name: "IPhone 15", price: 1299, color: "black" }

//FOR IN LOOP OVER AN OBJECT
// for(const key in product) {
//     console.log(key, product[key]);
// }

// FOR IN LOOP OVER AN ARRAY
//IN FOR..IN LOOP IF APPLIED ON AN ARRAY IT GIVES INDEX NOT THE VALUES /**USE FOR..OF LOOP FOR ARRAYS */
for(const index in colors) {
    console.log(index, colors[index]);
}

for(const color of colors) {
    console.log(color);
}









