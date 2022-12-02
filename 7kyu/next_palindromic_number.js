// There were and still are many problem in CW about palindrome numbers and palindrome strings. We suposse that you know which kind of numbers they are. If not, you may search about them using your favourite search engine.

// In this kata you will be given a positive integer, val and you have to create the function next_pal()(nextPal Javascript) that will output the smallest palindrome number higher than val.

// Let's see:

// For Javascript
// nextPal(11) == 22
// nextPal(188) == 191
// nextPal(191) == 202
// nextPal(2541) == 2552

// You will be receiving values higher than 10, all valid.


function nextPal(val) {
    let newVal = val+1;
    while (!isPalindrome(newVal)) {
        newVal +=1;
    }
    return newVal;
}

function isPalindrome(num) {
    str = num.toString();

    let len = str.length;
    let mid = Math.floor(len/2);

    for ( let i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(nextPal(2541));