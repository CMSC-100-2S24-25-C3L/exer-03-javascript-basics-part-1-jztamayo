// Tamayo, Johannes Nikolai Wendellsohn Z.
// CMSC100 C3L 2018-68611


// ppassword match function
function match(string1, string2) {
    // declare boolean flags
    let hasNumber = false;
    let hasUpper = false;
    let hasLower = false;
    // array of digits to be compare with
    let digits = "123456789"

    // loops thru the the entire length of the string
    for (let i = 0; i < string1.length; i++) {
        // checks if current char is in our digits array
        if (digits.includes(string1[i])) {
            hasNumber = true;
        }
        // checks if current char is lowercase by comparing it to itself
        if (string1[i] === string1[i].toLowerCase()) {
            hasLower = true;
        }
        // checks if current char is uppercase by comparing it to itself
        if (string1[i] == string1[i].toUpperCase()) {
            hasUpper = true;
        }
    }
    // check flag values
    console.log(hasLower);
    console.log(hasUpper);
    console.log(hasNumber);
    // check if length is 8
    if (string1.length < 8 || string2.length < 8) {
        return false;
        // string has no number
    } else if (!hasNumber) {
        return false;
        // string has no upper
    } else if (!hasUpper) {
        return false;
        // string has no lower
    } else if (!hasLower) {
        return false;
        // strings do not match
    } else if (string1 !== string2) {
        return false;
        // strings fulfill all our requirements
    } else {
        return true;
    }
}

// reverse password function
function reverse(string1) {
    // temp string for our reversed output
    let temp = "";
    // loop starts at the end of the string
    for (let i = string1.length - 1; i > -1; i--) {
        // concatenates letter from the back of the string to our temp string
        temp = temp + string1[i];
    }
    return temp;
}

// store password to object
function storePassword(name, pass1, pass2) {
    // checks if passwords are valid
    if (match(pass1, pass2)) {
        // updates string 1 as newpassword
        pass1 = reverse(pass1);
    }
    // test to see if pass 1 got reversed
    console.log(pass1)
    // obj to store name and passowrd
    const storepass = {
        name: name,
        // if match, the password will be updated, if not it will display the first given 
        newpassword: pass1
    }
    // check to see if return value is correct
    console.log(storepass);
    return (storepass);
}

// test output
let result1 = storePassword("John", "Pass1234", "Pass1234");
let result2 = storePassword("John", "Pass123", "Pass12345");

console.log("here are the values");
console.log(result1);
console.log(result2);
// console.log("hello world");



