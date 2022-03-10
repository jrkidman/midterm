// Please include the correct number of parameters in each function!
// Make sure every function returns something
// You can console.log() the functions with test input to test your functions in the space provided
// Read each question carefully
// Good luck!

/*
Write a function called sumOfOdds that takes in 2 numbers as parameters and sums the odd numbers between them.
This function is inclusive so please include your two parameters in your calculation.
After summing the numbers, return the sum.
You can assume that the 2nd number passed in will always be greater than the first and that the two numbers will not be the same
Note: This problem should account for negative number input
*/

function sumOfOdds(num1, num2) {
    let x = num1;
    let sum = 0;
    while (x <= num2) {
        if ((x % 2 === 1) ||
            x % 2 === -1) {
            sum += x;
        }
        x++;
    }
    return sum;
}

/* console.logs to test */
console.log("sumOfOdds");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(sumOfOdds(13, 31));
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function arraySubtract that takes in 2 arrays of numbers and subtracts the item in each index at array 1 with its respective item in each index at array 2.
The result of each calculation should be placed in a new array and that array should be returned when the calculations are complete.
For exmaple arraySubtract([7,9],[2,6]) should return [5,3]
You can assume the arrays that are being input are of the same length
*/

function arraySubtract(arr1, arr2) {
    // arr1[i] - arr2[i]
    // put result in a new array
    // return the new array
    let subtractedArray = [];
    for (let i = 0; i < arr1.length; i++) {
        subtractedArray.push(arr1[i] - arr2[i]);
    }
    return subtractedArray;
}

/* console.logs to test */
console.log("arraySubtract");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(arraySubtract([7, 9], [2, 6]));
console.log(arraySubtract([13, 32, -1], [2, 17, 41]));
console.log("\n////////////////////////////////////////////////////////////////////////////\n");

/*
Write a function that takes in 3 parameters in this order: 1 array, 1 string, and then another string.
Add the first string to the beginning of the array
Add the second string to the end of the array
Return the modified array
*/
function surroundArray(arr, str1, str2) {
    arr.unshift(str1);
    arr.push(str2);
    return arr;

}

/* console.logs to test */
console.log("surroundArray");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(surroundArray(["mango1", "mango2", "mango3"], "mango4", "mango5"));
console.log(surroundArray([1, 2, 3], 4, 5));
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function longestString that takes in an array of strings as a parameter and returns the longest string in the array.
If there is nothing in the array, return an empty string ('')
You can assume that no two strings will have the same length in the array
*/
function longestString(arrStrings) {
    //get length of each string in the array
    let longString = "";

    for (let i = 0; i < arrStrings.length; i++) {
        if (arrStrings[i].length > longString.length) {
            longString = arrStrings[i];
        }
    }
    return longString;
}


/* console.logs to test */
console.log("longestString");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(longestString(["mocha", "macchiato", "latte", "cafe bonbon"]));
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function sToR that replaces every 's' character in the string with an 'r' AND every 'r' character in the string with an 's'
If the letter in the original string is uppercase the letter in the output string should be as well
Do NOT use replaceAll or similar string methods.  If you are unsure what that means, ask before you use a string method!  (toUpperCase() and toLowerCase() should be all you need if anything)
*/
function sToR(str) {
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "r" &&
            str[i] !== "s" &&
            str[i] !== "R" &&
            str[i] !== "S") {
            newStr += str[i];
        }
        else if (str[i] === "r") {
            newStr += "s";
        }
        else if (str[i] === "s") {
            newStr += "r";
        }
        else if (str[i] === "R") {
            newStr += "S";
        }
        else if (str[i] === "S") {
            newStr += "R";
        }
    }
    return newStr;
}

/* console.logs to test */
console.log("sToR");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(sToR("The best things in life are free, but you can give them to the biRdS and beeS."))
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function divisibleBy4And7 that takes in a number and returns true if it is divisble by both 4 and 7.
If it is not, return false.
*/
function divisibleBy4And7(num) {
    if (num % 4 === 0 &&
        num % 7 === 0) {
        return true;
    }
    return false;
}

/* console.logs to test */
console.log("divisibleBy4And7");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(divisibleBy4And7(4));
console.log(divisibleBy4And7(7));
console.log(divisibleBy4And7(28));
console.log(divisibleBy4And7(56));
console.log(divisibleBy4And7(84));
console.log(divisibleBy4And7(112));
console.log(divisibleBy4And7(-84));

console.log("\n////////////////////////////////////////////////////////////////////////////\n");

/*
Write a function exclamationAndQuestion that takes in a string
return true if the string contains both an exclamation point (!) AND a question mark (?)
Return false if otherwise
*/
function exclamationAndQuestion(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "!" || str[i] === "?") {
            return true
        }
    }
    return false;

}

/* console.logs to test */
console.log("exclamationAndQuestion");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(exclamationAndQuestion("This ! is an exclamation point and this ? is a question mark."));
console.log(exclamationAndQuestion("This sentence does not have an exclamation point or a question mark."));
console.log(exclamationAndQuestion("????!!!!"));
console.log(exclamationAndQuestion("My name is Jill."));
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function called countAB that takes in a single string and returns an array of length two.  The first item in the array should be the count of every A character in the array.  The 2nd item should be the count of every B character in the array.  
No need to add the count of A and B together.  Again, we want an array with the separate counts of each
Your function should account for both cases (upper and lower) of each letter.
*/
function countAB(str) {
    let countA = "";
    let countB = "";
    let newArr = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" ||
            str[i] === "A") {
            countA += str[i];
        }
        if (str[i] === "b" ||
            str[i] === "B") {
            countB += str[i];
        }
    }
    newArr.push(countA.length);
    newArr.push(countB.length);
    return newArr;
}

/* console.logs to test */
console.log("countAB");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(countAB("ABCabcABCabcABCabc"));
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called addStringIfLastS() that takes in two parameters.  First, an array of strings and second a single string.  
Go through each string in the array.  If the string ends in the letter 's' (either case), append your string input to that string in the array.
Finally, return your modified array.
Example: addStringIfLastS(['test', 'testing', 'testings'], 'TEST') => ['test', 'testing', 'testingsTEST']
*/

function addStringIfLastS(arrStr, str) {
    for (let i = 0; i < arrStr.length; i++) {

        if (arrStr[i][arrStr[i].length - 1] === "s") {
            arrStr[i] += str;
        }
        if (arrStr[i][arrStr[i].length - 1] === "S") {
            arrStr[i] += str;
        }
    }
    return arrStr;
}

/* console.logs to test */
console.log("addStringIfLastS");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(addStringIfLastS(['test', 'testing', 'testings'], 'TEST'));
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called twoSmallest that takes in a single array of numbers as a parameter and returns the smallest two numbers in the following array format where the smallest number always comes before the 2nd smallest number (ie, the bigger number should come second): 
[smallestNumber, secondSmallestNumber]
If the array is shorter than length 2, return undefined to the user
You can assume that every number in the array will be unique
*/

function twoSmallest(arr) {
    let smallest = arr[0];
    let secondSmallest = smallest + 1;


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > smallest &&
            arr[i] < secondSmallest) {
            secondSmallest = arr[i];
        }
    }
    if (arr.length < 2){
        return undefined;
    }

    let twoSmallestArr = [smallest, secondSmallest];
    return twoSmallestArr;
}

/* console.logs to test */
console.log("twoSmallest");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log([9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(twoSmallest([9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log("");
console.log([33, 41, 26, 2, 4, 17]);
console.log(twoSmallest([33, 41, 26, 2, 4, 17]));
console.log("");
console.log([46, 91, 22, 67, 61, 102, 78]);
console.log(twoSmallest([46, 91, 22, 67, 61, 102, 78]));
console.log("");
console.log(twoSmallest([1]));

console.log("\n////////////////////////////////////////////////////////////////////////////\n");

