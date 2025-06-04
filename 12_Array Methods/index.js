/**
 * Array Map Method in JS
 * 
 * The map() method of an array can be used to transform the element s of an array by applying a callback
 * function to each element of the source array. It returns a new array with the transformed data.
 * 
 * ➡️ Takes a source on which it works
 * ➡️ Applies a function (callback) to each element of the array.
 * ➡️ Returns a new array with the transformed data.
 * ➡️ Important => It does NOT modify the original array. 
 */


// const numbers = [1,4,9];
// const names = ["John", "Sarah", " Steve"];
// const products = [
//     {id: 1, name: "Shirt", price: 20, discount: 10},
//     {id: 2, name: "Hat", price: 15, discount: 15},
//     {id: 3, name: "Pant", price: 35, discount: 10},
// ];

//3 OPTIONAL PARAMETERS IN MAP
// let transformedArray = numbers.map((element, index, arr) => {

// });
/*
let transformedArray = numbers.map((element) => {
    let square = element * element;
    return square;
});

console.log(transformedArray);*/
/*
const upperName = names.map((element, index, arr) => {
    console.log(element, index, arr);
    return element.toUpperCase();
});

console.log(upperName);*/
/*
const productDetails = products.map((prod) => {
    return {
        id: prod.id,
        name: prod.name,
        price: prod.price,
        discountedPrice: prod.price - (prod.price * prod.discount / 100),
    }
});

console.log(productDetails);*/



/**Transformation Array Methods
 * There are three transformation method in JS which can be applied on an array.
 * 
 * map()
 * filter()
 * reduce()
 */

/**Array FILTER Method
 * 
 * The filter() method in JS is a powerfull tool for creating a new array by filtering elements from an 
 * existing array based on a specified condition. It iterates over each element of the original array and
 * applies a callback function to it. It the callback function returns true for a particuler element, that 
 * element is included in the new array. Otherwise, it's excluded.
 * 
 * ➡️ Takes a source array on which it works
 * ➡️ Applies a function(callback) to each element of the array
 * ➡️ Returns a new array with the filtered elements
 * ➡️ Important => It does not modify the original array.
 * ➡️ You can chain multiple filter() calls to apply multiple filtering conditions
 * 
 */

/*
const numbers = [1,2,3,4,5,6,7,8,9];
const words = ["apple", "banana", " cherry", "date", "elederberry"];
const products = [
    {id: 1, name: "Shirt", price: 20, discount: 10},
    {id: 2, name: "Hat", price: 15, discount: 15},
    {id: 3, name: "Pant", price: 35, discount: 10},
];*/

//ALL PARAMETERS IN FILTER
// let evenNumbers = numbers.filter(function(element, index, arr) {
//     
// });
/*
let evenNumbers = numbers.filter(function(element, index, arr) {
    return element % 2 === 0;
}).filter((el) => el % 3 === 0);

console.log(evenNumbers);*/

/*
const longWords = words.filter((ele) => {
    return ele.length > 5;
});

console.log(longWords);*/
/*
const filteredProducts = products.filter((ele) => ele.price <= 20);

console.log(filteredProducts);*/

/**ARRAY REDUCE METHODS
 * 
 * The reduce() methods is a powerfull tool in JS that allows you to iterate over an array and accumulate a
 * single value. It takes a callback function as an argument and applies it to each element of the array, 
 * reducing it to single value.
 * 
 * ➡️ Takes a source array on which it works.
 * ➡️ Takes two arguments --> A callback function and an accumulator
 * ➡️ The callback function is executed for each element of the array.
 * ➡️ The returned value of the callback function becomes the new aaccumulator for the next iteration.
 * ➡️ Return a single value not an array.
 */


// const numbers = [7, 2, 10, 4, 8, 3];

/* ALL PARAMETERS OF THE REDUCE
numbers.reduce((acc, element, index, arr) => {

}, 0);*/
/*
const sum = numbers.reduce((acc, element) => {
    return acc + element;
}, 0);

console.log(sum);

const largestNumber = numbers.reduce((acc, element) => {
    // if(acc < element) {
    //     acc = element
    // } 
    // return acc;

    return Math.max(acc, element)
}); 

console.log(largestNumber);
*/

/**ARRAY FOREACH METHOD
 * 
 * The forEach() method is a powerfull tool in Js for iterating over elements of an array. It allows you to
 * execute a provided function for each element in the array.
 * 
 * ➡️ Takes a source array on which it works.
 * ➡️ Takes a callback function as the argument.
 * ➡️ The code within the callback function is executed for each element, allowing you to perform operations
 * on each element as needed
 * ➡️ Return type for forEach() is void.
 */

// const numbers = [7, 2, 10, 4, 8, 3];

// ALL PARAMENTERS OF FOREACH()
// numbers.forEach((element, index, arr) => {
    
// });

/*
let square = [];
numbers.forEach((ele, index, arr) => {
    let sqr = ele * ele;
    square.push(sqr);
});
console.log(square);


let evenNumbers = [];
numbers.forEach((ele) => {
    if(ele % 2 === 0) {
        evenNumbers.push(ele);
    }
});
console.log(evenNumbers);*/


/**SLICE METHOD (DOES NOT MODIFY THE ORIGINAL ARRAY)
 * 
 * The slice() method creates a new array by extracting a portion of an existing array. It doesn't modify
 * the original array.
 * 
 * ➡️ Takes a source array on which it works.
 * ➡️ Takes two arguments, the index from where it should extract and the number of elements it should
 * extract.
 * ➡️ Returns a new array.
 * ➡️ Does not modify the original array.
 */

// const numbers = [7, 2, 10, 4, 8, 3];

// const extracted = numbers.slice(2, 5); //both arguments are optional
// console.log(extracted);
// console.log(numbers);


/**SPLICE METHOD(DOES MODIFY THE ORIGINAL ARRAY)
 * 
 * The splice() method modifies an array by removing, replacing or adding elements. It directly manipulates
 * the original array.
 * 
 * ➡️ takes a source array on which it works.
 * ➡️ Takes two arguments, the index from where it should extract and the number of elements it should extract
 * ➡️ It does modify the original array.
 */

// console.log(numbers.splice(2,3));
// console.log(numbers);


/**JOIN METHOD
 * 
 * The join method is used to join the elements of an array into a string, using a specified separator.
 * 
 * ➡️ Takes a source array on which it works.
 * ➡️ Takes a separator character as an argument.
 * ➡️ Returns a new string value separated by the separator.
 * 
 * Parameters:
 * ➡️ separator(optional): A string to be used as a separator. if omitted, the default separator is a comma(,).
 */

// const arr = ["Hello", "World"];

// const str = arr.join();
// console.log(str);



/**REVERSE METHOD(modifies the original array) */
/*
const numbers = [7, 2, 10, 4, 8, 3];
const revArray = numbers.reverse();
console.log(revArray);
console.log(numbers);*/

/**ARRAY SORT METHOD
 * 
 * The sort() methods sort the elements of an array in place an dretunr the sorted array. By default, sort() 
 * converts the elememts to strings and sorts them in alphabetical order. This can lead to unexpected results
 * when sorting numbers.
 * 
 * ➡️ The sort() method modifies the original array directly.
 * ➡️ The sort() method returns an array by modifying the original array.
 */


// const words = ["date", "banana", "apple", "elderberry", "cherry"];
// const numbers = [7, 2, 10, 4, 8, 3];
// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 20},
// ];


// const sortedWords = words.sort();
// console.log(sortedWords);
// console.log(words);


// const sortedNumbers = numbers.sort((a,b) => {
//     return a - b;
// });
// console.log(sortedNumbers);;


// console.log(users.sort((curr, next) => {
//     if(curr.age < next.age) return -1;
//     if(curr.age > next.age) return 1;
//     return 0;
// }));


/**ARRAY FIND METHOD
 * 
 * The find() mehtod iterates over an array and returns the first matching element from the array that satisfies
 * a given condition provided in callbakc function.
 * 
 * ➡️ Takes a source on which it works
 * ➡️ Applies a function(callback) to each element of the array. From the callback function, you specify a 
 * condition which return a Boolean value.
 * ➡️ Return the first matching element from the array which satisfies the given condition. Else, it returns
 * undefined.
 * ➡️ Important:-> It does not modify the original array.
 */


// const numbers = [3, 12, 8, 130, 44];
// const users = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" },
//     { id: 3, name: "Charlie" }
// ];
//ALL PARAMETER OF FIND()
/*
const numberGreaterThanTen = numbers.find((ele, index, arr) => {
    
});*/

// const numberGreaterThanTen = numbers.find((ele) => {
//     return ele > 10;
// });
// console.log(numberGreaterThanTen);


// const userWithId2 = users.find((ele) => ele.id === 2);
// console.log(userWithId2);


/**ARRAY FINDINDEX METHOD
 * 
 * The findIndex() method iterates over an array and returns the index of first matching element from the array
 * that satisfies a given condition provided in callback function.
 * 
 * ➡️ Takes a source array on which it works.
 * ➡️ Applies a function(callback) to each element of the array. From the callback function, you specify a condition
 * which return a Boolean value.
 * ➡️ Returns the index of first matching element from the array which satisfies the given condition. Else, if returns -1.
 * ➡️ Important:-> It does not modify the original array.
 */

const numbers = [5, 12, 8, 130, 44];
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];

/* ALL PARAMETER OF FINDINDEX
const num = numbers.findIndex((element, index, arr) => {
    
});
*/

const num = numbers.findIndex((ele) => {
    return ele > 40;
});
console.log(num);

const userId = users.findIndex((ele) => ele.id === 2 );
console.log(userId);











