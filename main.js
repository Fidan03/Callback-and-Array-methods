//Task 1
// let text = ("Lorem ipsum dolor sit amet.") 
// function modifyText (text, callback) {
//     return callback(text);
// }

// function lowercase(text) {
//     return text.toLowerCase();
// }

// function splitWords (text) {
//     return text.split(' ').join(' ');
// }

// function capitalize(text) {
//     let words = text.split(' ')
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     } 
//     return words.join(' ');
// }

// function mark (text) {
//     return text = text.slice(0, -1) + "!";
// }

// console.log(modifyText(text, lowercase));
// console.log(modifyText(text, splitWords));
// console.log(modifyText(text, capitalize));
// console.log(modifyText(text, mark));






//Task 2
let num = [2, 3, 4, 5, 6, 7]
function modifyNumber(num, callback) {
    let result = [];
    for (let i = 0; i < num.length; i++) {
        result.push(callback(num[i]));
    }
    return result;
}

function multiplication(num) {
    return num * 2;
}

function division(num) {
    return num / 2;
}

function root(num) {
    let root = num / 2;
    for (let i = 0; i < 10; i++) {
        root = (root + num / root) / 2;
    }
    return root;
}

function abs (num) {
    if (num < 0) {
        return -num;
    }
    return num;
}


console.log(modifyNumber(num, multiplication));
console.log(modifyNumber(num, division));
console.log(modifyNumber(num, root));
console.log(modifyNumber(num, abs));






//Task 3
// let num = [5, 8, 9, 11, 12, 15]

// function transformArray(arr, callback) {
//     let newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArray.push(callback(arr[i]));
//     }
//     return newArray;
// } 

// function addOne (num) {
//     return num + 1 ;
// }

// function negative (num) {
//     return num * -1;
// }

// function divideToThree (num) {
//     return num % 3;
// }

// console.log(transformArray(num, addOne));
// console.log(transformArray(num, negative));
// console.log(transformArray(num, divideToThree));




//Task 4
// let array = [2, 10, 15, 3, 6, "alien", "alive"]

// function findInArray(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) {
//             return arr[i];
//         }       
//     }
//     return null;
// }

// function firstEven (num) {
//     return num % 2 === 0;
// }

// function greaterThanTen (num) {
//     return num > 10;
// }

// function firstLetterA (word) {
//     return word[0] === "a";
// }


// console.log(findInArray(array, firstEven));
// console.log(findInArray(array, greaterThanTen));
// console.log(findInArray(array, firstLetterA));




//Task 5
// let person = {
//     firstName: "Johnny",
//     lastName: "Depp",
//     age: 21,
//     mail: "johnnydepp21@gamil.com"
// };

// function processUserData (user, callback) {
//     return callback(user);
// }

// function spliting (user) {
//     return user.firstName + " " + user.lastName;
// }

// function checkAge (user) {
//     return user.age >= 18;
// }

// function replacement (user) {
//     let newMail = "";
//     let mail = user.mail;
//     let i = 0;

//     while (i < mail.length && mail[i] !== "@") {
//         newMail += "*";
//         i ++;
//     }

//     if (i < mail.length) {
//         newMail += "@";
//         i ++;
//     }

//     while (i < mail.length) {
//         newMail += mail[i];
//         i ++;
//     }
//     return newMail;
// }


// console.log(processUserData(person, spliting));
// console.log(processUserData(person, checkAge));
// console.log(processUserData(person, replacement));
