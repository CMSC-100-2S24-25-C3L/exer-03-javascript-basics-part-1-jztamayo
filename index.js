// Tamayo, Johannes Nikolai Wendellsohn Z.
// CMSC100 C3L 2018-68611


// ppassword match function
function match(string1, string2) {

    let hasNumber = false;
    let hasUpper = false;
    let hasLower = false;

    let digits = "123456789"

    // loops thru the the entire length of the string
    for (let i = 0; i < string1.length; i++) {
        // flag to check for number
        if (digits.includes(string1[i])) {
            hasNumber = true;
        }
        // flag to check if match
        if (string1[i] === string1[i].toLowerCase()) {
            hasLower = true;
        }
        // flag to check if upper
        if (string1[i] == string1[i].toUpperCase()) {
            hasUpper = true;
        }
    }

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
    } else {
        return true;
    }
}

// reverse password function
function reverse(string1) {
    let temp = "";
    for (let i = string1.length - 1; i > -1; i--) {
        temp = temp + string1[i]
    }
    return temp
}

// store password to object
function storePassword(name, pass1, pass2) {
    if (match(pass1, pass2)) {
        pass1 = reverse(pass1)
    }
    console.log(pass1)
    const storepass = {
        name: name,
        newpassword: pass1
    }
    console.log(storepass)
    return (storepass)
}

// test output
storePassword("John", "Pass1234", "Pass1234")
storePassword("John", "Pass123", "Pass12345")
// console.log("hello world");



