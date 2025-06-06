/**SUBSTRING AND SUBSTR STRING METHODS
 * 
 * The substring() method creates a new array by extracting a portion of an existing string. It doesn't
 * modify the original string value.
 * 
 * ➡️ Takes a source string on which it works.
 * ➡️ Takes two arguments, the start index and end index.
 * ➡️ Returns a new String.
 * ➡️ Does not modify the original string.
 * 
 * 
 * SUBSTR METHOD
 * The substr() method creates a new string by extracting a portion of an exsting string. It doesn't modify
 * the original string value.
 * 
 * ➡️ Takes a source string on which it works.
 * ➡️ Takes two arguments, the start index from where it should extract and the number of characters it
 * should extract.
 * ➡️ Returns a new string.
 * ➡️ Does not modify the original string.
 */

// const welcome = "Hello, World!";

// const newString = welcome.substring(7); // last argument is optional
// console.log(newString);
// console.log(welcome);

//const subStr = welcome.substr(7, 3); // Depricated
//console.log(subStr);


/**SPLIT METHOD
 * 
 * The split() method is used to split a string into an array of substring based on a specified separator.
 * 
 * ➡️ Takes a source string on which it works.
 * ➡️ Takes a separator character as an argument.
 * ➡️ Returnss a new array with string elements.
 * 
 * Parameters:->
 * ➡️ separator(optional):- A string or regular expression that specifies the separator. It omitted, the entire
 * string is treated as a single element.
 * ➡️ limit(optional):- A number specifying the maximum number of splits.
 */

// const message = "Welcome to this JS Course";

// const arr = message.split(" ");
// console.log(arr);


/**TOUPPERCASE METHOD ON STRING
 * 
 * The toUpperCase() method creates and returns a new string that is the uppercase version of the original string.
 * The original string remains unchanged.
 */

// const str = "hello world";
// const mixedCase = "MiXeD CaSe";

// const upperStr = str.toUpperCase();
// console.log(upperStr);
// console.log(mixedCase.toUpperCase());


/**TOLOWERCASE METHOD
 * 
 * The toLowerCase() method works inthe opposite way. It creates and returns a new string that is the lowercase
 * version of the original string. Again, the original string is not modified.
 */

// console.log(upperStr.toLowerCase());
// console.log(mixedCase.toLowerCase());


/** USECASE 1: Format name with first character in uppercase and all other characters in lowercase */

// const formatName = ((name) => {
//     const firstChar = name.substring(0, 1);
//     const restChars = name.substring(1);
//     return firstChar.toUpperCase() + restChars.toLowerCase();
// })
// console.log(formatName("viraj"));

/** USECASE 2: Compare two string values */

// const userEmail = "Something@gmail.com";
// const emailInDB = "something@gmail.com"
// console.log(userEmail.toLowerCase() === emailInDB.toLowerCase());

/**ES2022 AT METHOD IN JS
 * 
 * The at() method in JS is a relatively new addition (ES2022) to arrays and strings that provides a concise way
 * to access elements at a specific index, including negative indices. It's defigned to simplify accessing elements
 * from the end of an array or string.
 */

// const myString = "hello";
// console.log(myString.at(-4));
// console.log(myString);

/**USECASE 1:-> Format name with first character in uppercase */

// const formatName = ((name) => {
//     const firstChar = name.at(0);
//     const restChars = name.substring(1);
//     return firstChar.toUpperCase() + restChars.toLowerCase();
// })
// console.log(formatName("viraj"));

/**INDEXOF METHOD
 * 
 * The indexOf() method returns the first index at which a given element can be found in the string or array,
 * or -1 if it is not present.
 */

// const str = "Hello from JS! Hello, world!";
// console.log(str.indexOf("hello"));
// console.log(str.indexOf("J"));

// console.log(str.lastIndexOf("o"));

// console.log(str.indexOf("H", 6));
// console.log(str.lastIndexOf("f", 7));


/**SLICE METHOD ON STRING
 * 
 * We can also use slice() method on strings in JS. String are primitive values, but when you call a method like
 * slice() on them, JS temporarily converts them to String objects to perform the operation.
 */

// const newStr = str.slice(11, 20);
// console.log(newStr);

/**SLICE VS SUBSTRING METHOD
 * 
 * both slice() and subString() can be used to extract parts of a string, but they have some key differences:
 * 
 * Handling Negative Indices: 
 * ➡️ slice(): Accepts negtaive indices. Negative indices count from the end of the string.
 * ➡️ substring(): Does not handle negative indices correctly. It treats negative indices as 0.
 * 
 * Handling of startIndex greater than endIndex: 
 * ➡️ slice(): Returns an empty string is startIndex is greater than endIndex.
 * ➡️ substring(): Swaps the startindex and endIndex if startIndex is greater than endIndex. It effectively treats
 * the smaller index as the start and the larger idnex as the end.
 */


/**TRIM METHODS IN JS
 * 
 * There are three methods in JS which can be used to trim(remvoe) spaces from start or end of a string. Those are:
 * ➡️ trimStart(): Removes white spaces from the start of the string.
 * ➡️ trimEnd(): Removes whitespaces from the end of the string.
 * ➡️ trim(): Removes white spaces from both start and end of the string.
 */


// const fullName = "   John Snow    ";
// const trimStart = fullName.trimStart();
// const trimEnd = fullName.trimEnd();
// const allTrim = fullName.trim();
// console.log(fullName);
// console.log(trimStart);
// console.log(trimEnd);
// console.log(allTrim);


/**REPLACE METHOD IN JS
 * 
 * The replace() method in JS is a powerfull tool for manupulating string. It allows you to find specific patterns
 * within a string and replace them with new content.
 * 
 * The replace() searches a string for a specified value (which can be a string or a regular expression) and returns
 * a new string where the first (or all, if using a regular expression with the global flag) occurrences of the 
 * matched pattern are replaced with a specified replacement value. The original string remains unchanged.
 */


// const message = "Hello World!";
// const text = "This is a test. This is another test.";
// const greeting = "Hello there!";
// const numericString = "H1B2C3D4E5"

//only the first occurrence will be replaced
// const str1 = message.replace("World", "Javascript");
// console.log(str1);
// console.log(message);


// const str2 = text.replace(/test/g, "experiment");

//WE CAN ALSO USE REPLACEALL METHOD TO REPLACE ALL OCCURRENCES
// const str2 = text.replaceAll("test", "experiment");
// console.log(str2);
// console.log(text);

// const str3 = greeting.replace(/hello/i, "Hi");
// console.log(str3);

//we can pass callback function as well

// const doubledNumbers = numericString.replace(/\d+/g, (match) => {
//     const num = parseInt(match);
//     return num * 2;
// });
// console.log(numericString);
// console.log(doubledNumbers);


/**INCLUDES, STRATSWITH AND ENDSWITH METHOD
 * 
 * The includes(), startsWiht() and endsWith() are string methods in JS that provide conveniednt ways to check if a
 * string contains a specific substring or if it starts or ends with a particuler string. They are generally simpler
 * and more readable than using regular expression for these specific purposes.
 * 
 * ➡️ All these three methods returns a Boolean values i.e. true or false.
 */


/**INCLUDES METHOD OF STRING
 * 
 * The includes() method determines whether a string contains a specified substring. It returns true if the 
 * substring is found, and false otherwise.
 * 
 * The includes() method takes two parameters:
 * ➡️ searchString: the substing to search for.
 * ➡️ position(optional): The index at which to begin the search. If omitted, the search starts at the beginning
 * of the string
 */

const str = "Hello World";
const products = [
    { id: 1, name: "Smart Watch", price: 129 },
    { id: 2, name: "Analog Watch", price: 29 },
    { id: 3, name: "Smart TV", price: 1399 },
];

// const isIncluded = str.includes(" "); //CASE SENSITIVE
// console.log(isIncluded);

// const isIncluded = str.startsWith(" ") //CASE SENSITIVE
// console.log(isIncluded);

// const isIncluded = str.endsWith("World") //CASE SENSITIVE
// console.log(isIncluded);

//USECASE: EMAIL IS VALID OR NOT

const validateEmail = ((email) => {
    let isValid = false;
    if(!email.startsWith("@")) {
        isValid = true;
    }
    if(!email.endsWith(".com")) {
        isValid = false;
    }
    if(!email.includes("@")) {
        isValid = false;
    }
    return isValid
});

// console.log(validateEmail("example@gmail.com"));


//USE CASE: FILTER PRODUCT BY NAME

const filterProduct = ((searchString) => {
    return products.filter((p) => p.name.toLocaleLowerCase().includes(searchString));
})

console.log(filterProduct("watch"));


/**HOW ARE STRING METHODS CALLED?
 * 
 * The strings are primitive values in JS. Primitive types are immutable and don't have methods int eh traditional
 * obejct-oriented sense. So, how can we call methods like toUpperCase(), slice() or indexOf() on a string literal
 * or a string varibale?
 * 
 * The answer lies in JS's automatice type coercionand the concept of "wrapper objects".
 * 
 * ➡️ AUTOMATICE BOXING(or WRAPPING): When you try to call a mehtod on a primitive value (like a string, number or boolean),
 * JS automatically converts that primitive value into a temporary object. This is called "boxing" or "wrapping".
 * For strings, it creates a temporary String object.
 * 
 * ➡️ String Obejct: This temporary string object is an object wrapper around the primitive string value. It's this
 * String object that has the methods like toUpperCase(), slice() etc.
 * 
 * ➡️ Method Call: The method call is called on this temporary String object.
 * 
 * ➡️ Automatice Unboxing: After the method call completes, JS automaticallu converts the String object back to a 
 * primitive string value(this is called "unboxing"). The results of the method(which is usually another primitive
 * string) is then returned.
 * 
 * ➡️ Garbage Collection: The temporary String obect is then discarded (garbage collected).
 * 
 * In simpler terms: JS "wraps" the primitive string in an object just long enough to execute the method, and then
 * "unwraps" it to give you the desired result. 
 */










