// When provided with a String, capitalize all vowels
// // For example:
// // Input : "Hello World!"
// // Output : "HEllO WOrld!"
// // Note: Y is not a vowel in this kata.

const inputString = 'Hello Wolrd';

const swap = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStringArray =[];
    
    [...str].forEach((char) => {
        if (vowels.includes(char)) {
            const capitalizedLetter = char.toUpperCase();
            newStringArray.push(capitalizedLetter);
        } else {
            newStringArray.push(char);
        }
    })
    return newStringArray.join('')
}

console.log(swap(inputString));
