/**
 * Default function parameter allows us to initialize named parameters with default values
 * if no values or undefined is passed into the function for a given parameter.
 * 
 * The default parameter should always be the last in parameter list.
 * If no value is provided for the default parameter while calling the function, the default
 * value will be used.
 * If some value is provided for the default parameter while calling the function, the passed
 * value will be used for that parameter.
 */

const getYearsBeforeRetirement = (birthYear, retirementAge = 60) => {
    //HERE 60IS DEFAULT PARAMETER

    const currentYear = new Date().getFullYear();

    //CALCULATE AGE FROM BIRTH YEAR
    const age = currentYear - birthYear;

    //CALCULATE YEARS BEFORE RETIREMENT
    const yearsLeft = retirementAge - age;

    return yearsLeft;
}

// console.log(getYearsBeforeRetirement(1990, 70)); //---> here 70 will be used
// console.log(getYearsBeforeRetirement(1990)); //-->here default value 60 wil be used


/**ARROW FUNCTION
 * 
 * const functionName = (parameters) => { function logic }
 * 
 * 
 */

const greet = (name, timeOfDay) => {
    console.log(`Good ${timeOfDay}, ${name}`);
}

// greet("Viraj", "Morning");

//IF WE HAVE ONLY ONE LINE OF CODE IN OUR ARROW FUNCTION WE CAN OMMIT {} PARANTHESES AND RETURN KEYWORD.
//if we use parantheses {} then we have use 'return' keyword otherwise it won't work
const add = (x, y) => x + y; // it is returning (x + y)

console.log(add(20, 30));



