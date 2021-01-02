// 1. Odd and Even 
// if 
function evenOrOdd(num) {
    if(num % 2) return 'Odd';
    return 'Even'
}

// console.log(evenOrOdd(2)); // Even
// console.log(evenOrOdd(3)); // Odd
// console.log(evenOrOdd(1000)); // Even

// Ternary operator
function evenOrOdd(num) {
    return num % 2 ? 'Odd' : 'Even';
}

// 2. count '8' from 1 ~ 10,000 
function getCount8 () {
    const num = 10000;
    let count = 0;
    for (let i = 0; i < num; i++) {
        for (let j = String(i).length; j > 0; j--) {
            if(String(i).charAt(j - 1) === '8') count++;
        }
    }
    return count;
}

// console.log(getCount8()); // 4000

// 3. handling chars
function alphaString46(s = '') {
    return (s.length < 4 || s.length > 7 || isNaN(s + '') || s === '') ? false : true;
}

// console.log(alphaString46('1234')); // true
// console.log(alphaString46('9014')); // true
// console.log(alphaString46('723'));  // false
// console.log(alphaString46('a234')); // false
// console.log(alphaString46(''));     // false
// console.log(alphaString46());       // false

//

// 4. count 'p' and 'y' from the parameter
function numPY(s = '') {
    let countP = 0;
    let countY = 0;

    let array = s.split('');
    array.forEach(v => {
        v === 'p' || v === 'P' ? countP++ : v === 'y' || v === 'Y' ? countY++ : ''
    })
    console.log(countP, countY);
    return countY === countP ? true : false;
}

// console.log(numPY('pPoooyY')); // true
// console.log(numPY('Pyy'));     // false
// console.log(numPY('ab'));      // true
// console.log(numPY(''));        // true
// console.log(numPY());          // true

// 5. create a weird text
function toWeirdCase(s) {
    let data = s.split('');
    let start = 0;
    for (let i = 0; i < data.length; i++) {
        if (!(start++ % 2)) data[i] = data[i].toUpperCase();      
        if (data[i] === ' ') start = 0; 
    }
    return data.join(' ');
}

console.log(toWeirdCase('hello world'));    // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'