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

const welcome = "Hello, World!";

const newString = welcome.substring(7); // last argument is optional
console.log(newString);
console.log(welcome);

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

const message = "Welcome to this JS Course";

const arr = message.split(" ");
console.log(arr);










