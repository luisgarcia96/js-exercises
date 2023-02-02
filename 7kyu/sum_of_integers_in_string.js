/* Your task in this kata is to implement a function that calculates the sum of the integers inside a string. 
For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", 
the sum of the integers is 3635.*/

// Note: only positive integers will be tested.

/**
 * Function to calculate the sum of the integers inside a string
 * @param {String} s Whatever string
 * @returns {Number} The sum of th integers inside the string
 */
function sumOfIntegersInString(s){

    let counter = 0;

    const isNumber = (char) => {
        return /^\d+$/.test(char);
    }

    //Check wether a character is a number or a string
    let numberToAdd = '';
    for (let idx = 0; idx < s.length; idx++) {
        if (isNumber(s[idx])) {
            numberToAdd += s[idx];
            if (isNumber(s[idx+1])) {
                continue;
            } else {
                counter += parseInt(numberToAdd);
                numberToAdd = '';
            }
        }
    }
    return counter;
  }

console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"));
console.log(sumOfIntegersInString("The Great Depression lasted from 1929 to 1939."));