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

// console.log(toWeirdCase('hello world'));    // 'HeLlO WoRlD'
// console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'

// 6. hide all char except the last 4 chars
function hideNumbers(str) {
    let stars = '';
    for (let i = 0; i < str.length - 4; i++) {
        stars += '*';
    }

    const data = stars + str.slice(-4); 
    return data;
}

// console.log(hideNumbers('01033334444')); // *******4444
// console.log(hideNumbers('027778888'));   // *****8888

// 7. convert string to num
function strToInt(str) {
    return parseInt(str);
}

// console.log(strToInt('1234'));  // 1234
// console.log(strToInt('-1234')); // -1234

// 8. repeat two chars with a certain length
function waterMelon(n) {
    let data = '';
    for (let i = 0; i < n; i++) {
        data += i % 2 ? '박' : '수';
    }
    return data;
}

// console.log('n이 3인 경우: '+ waterMelon(3));
// console.log('n이 4인 경우: '+ waterMelon(4));

// 9. check whether the value is a square;

function nextSqaure(n){
    return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n)+1)**2 : 'no';
}

// console.log(nextSqaure());    // no
// console.log(nextSqaure(0));   // 1
// console.log(nextSqaure(1));   // 4
// console.log(nextSqaure(2));   // no
// console.log(nextSqaure(3));   // no
// console.log(nextSqaure(121)); // 144
// console.log(nextSqaure(165)); // no
// console.log(nextSqaure(400)); // 441

// 10 find min and max

function getMaxValueFromArray(array) {
    return array.reduce((acc, cur) => {
        return acc > cur ? acc : cur
    }, 0);
}
// console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7

function getMinValueFromArray(array) {
    return array.reduce((acc, cur) => {
        return acc < cur ? acc : cur
    },0);
}
// console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5

// 11 팰린드롬 확인하기
function checkPalindrom(str) {
    if (str.length === 1) return true;
    for (let i = 0; i < str.length - str.length/2 - 1; i++) {
        if (str[i] !== str[str.length - i - 1]) return false; 
    }
    return true;
}

// console.log(checkPalindrom('dad')); // true
// console.log(checkPalindrom('mom')); // true
// console.log(checkPalindrom('palindrom')); // false
// console.log(checkPalindrom('s')); // true

// 12. remove duplication
function uniq(array) {
    return [...new Set(array)];
}

// console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]

// 13 check any duplicate number in the array
function isNotOverlapArray(array) {
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(i + 1) === -1) return false; 
    }
    const newArray = [...new Set(array)];
    if (array.length !== newArray.length) return false;
    return true;
}

// console.log(isNotOverlapArray([4, 1, 3, 2])); // true
// console.log(isNotOverlapArray([4, 1, 3]));    // false

// 14. return the duplicaed value
function findDuplicated(array) {
    return array.filter((v, i, arr) => arr.indexOf(v) !== i );
}

// console.log(findDuplicated([1, 2, 3, 4, 1, 2, 3])); // [ 1, 2, 3 ]

// 15 직사각형이 되는 나머지 좌표 구하기
function getRestCoordinate(array) {
    //find the duplicated num from each position and remove those from the array
    const duplicatedFirstPoint = array.flat().filter((_,i,arr) => !(i % 2)).filter((v, i, arr) => arr.indexOf(v) !== i);

    const duplicatedSecondPoint = array.flat().filter((_,i,arr) => (i % 2)).filter((v, i, arr) => arr.indexOf(v) !== i);
    
    const duplicatedNums = [...duplicatedSecondPoint, ...duplicatedFirstPoint];

    return array.flat().filter(v => !duplicatedNums.includes(v));
}

// console.log(getRestCoordinate([[1, 4], [3, 4], [3, 10]])); // [1, 10]
// console.log(getRestCoordinate([[3, 2], [2, 5], [3, 5]])); // [2 2];

// 16 sum of dividers 

function sumDivisor(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) sum += i; 
    }
    return sum;
}

// console.log(sumDivisor(12)); // 28

// 17 find num of prime
function numberOfPrime(n) {
    let array = [];
    for (let i = 2; i <= n; i++) {
        //check if there is a num that can divide the num
        let isPrime = true;

        for(let j = 2; j <= n; j++) {
            if(j === i) break;
            if(Number.isInteger(i / j)) {
                isPrime = false; 
                break;
            };
        }

        if (isPrime) array.push(i);
    }

    return array.length
}

// console.log(numberOfPrime(10)); // 4

function fibonacci(n) {
    let value1 = 0;
    let value2 = 1;
    let array = [0, 1];

    let i = 0;
    while(i < n) {
        let newValue = value2 + value1;
        array.push(newValue);
        value1 = value2;
        value2 = newValue;

        i++;
    }
    return array[n-1] + array[n-2]
}

// console.log(fibonacci(2)); // 1
// console.log(fibonacci(3)); // 2
// console.log(fibonacci(4)); // 3
// console.log(fibonacci(5)); // 5
// console.log(fibonacci(6)); // 8
// 파보나치 수

// 19 add up each pos of num
function digitSum(n) {
    if(n > 10000000) return false;

    return String(n).split('').reduce((acc, cur) => {
        return parseInt(acc) + parseInt(cur);
    }, 0);
}

// console.log(digitSum(123));  // 6
// console.log(digitSum(987));  // 24
// console.log(digitSum(100000001));  // false

// 20 하샤드 수

function isHarshad(n){
    const divider = String(n).split('').reduce((acc, cur) => {
        return parseInt(acc) + parseInt(cur);
    }, 0);
    
    return Number.isInteger(n / divider);
}

// console.log(isHarshad(10)); // true
// console.log(isHarshad(12)); // true
// console.log(isHarshad(18)); // true
// console.log(isHarshad(11)); // false
// console.log(isHarshad(13)); // false

// 21 create an array with two parameters
function generateRange(from, to) {
    const res = [];
  
    for (let i = from; i <= to; i++) {
        res.push(i);
    }
    return res;
  }
  
//   console.log(generateRange(10, 15)); // [ 10, 11, 12, 13, 14, 15 ]

// 22 add all nums between two parameters
function adder(x, y){
    if (x === y) return x;
    if (x > y) {
        let temp = x;
        x = y;
        y = temp;
    }

    const res = [];
  
    for (let i = x; i <= y; i++) {
        res.push(i);
    }
    return res.reduce((acc, cur) => {
        return parseInt(acc) + parseInt(cur);
    }, 0);
}

// console.log(adder(3, 5)); // 12
// console.log(adder(3, 3)); // 3
// console.log(adder(3, 1)); // 6
// console.log(adder(3, 0)); // 6
// console.log(adder(-1, 3)); // 5

// 23 find the max value calculated by two elements
function adjacentElementsProduct(arr) {
    return arr.reduce((acc, cur, i, arr) => {
        const mutipleByPreviousValue = cur * parseInt(`${i !== 0 ? arr[i-1] : 0}`);
        console.log(acc);
        return acc > mutipleByPreviousValue ? acc : mutipleByPreviousValue;
    }, 0)
}

// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21

// 24 return an array with values in specific conditions
// condition: value is greater than 3 and even
function getArray(arr) {
    return arr.filter(v => v%2 === 0 && v > 3)
}

// console.log(getArray([1, 2, 3, 4, 5, 6])); // [ 4, 6 ]

// 25 find the average value
function average(array){
    const sum = array.reduce((acc, cur) => {
        return acc + cur;
    }, 0)
    
    return sum / array.length;
}

// console.log(average([5, 3, 4])); // 4

// 26 shortest length btw two values
function findMinDistance(array){
    
    const pos = array.reduce((acc, cur, i ,arr) => {
        acc.push(cur - (i === 0 ? 0 : arr[i - 1]));
        return acc;
    }, [])
    pos.shift();

    // shortest length
    const minValue =  Math.min(...pos);

    let res = pos.reduce((acc, cur, i) => {
        if (cur === minValue) acc.push([array[i], array[i+1]])
        return acc;
    },[])
    return res;
}

// 1차원 점의 배열
var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]


// 27 special sorting
function specialSort(array) {
    let newArray = array.slice();
    newArray.sort((a, b) => a - b);
    
    negativeValueArray = newArray.filter(v => v < 0);
    negativeValueArray.sort((a, b) => b - a);
    console.log(negativeValueArray);
    newArray.splice(0, negativeValueArray.length, ...negativeValueArray);
    return newArray;
}

const testArray = [-1, 1, 3, -2, 2, 0];

// console.log(testArray); // [ -1, 1, 3, -2, 2, 0 ]
// console.log(specialSort(testArray)); // [ -1, -2, 0, 1, 2, 3 ]


// 28 find the specific month
function getDayName(a, b){
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    const targetDate = new Date(year, a, b);
    let targetDay = '';

    switch (parseInt(targetDate.getDay())) {
        case 0 : targetDay = 'SUN'
            break;
        case 1 : targetDay = 'MON' 
            break;
        case 2 : targetDay = 'TUE' 
            break;
        case 3 : targetDay = 'WED' 
            break;
        case 4 : targetDay = 'THU'
            break;
        case 5 : targetDay = 'FRI' 
            break;
        case 6 : targetDay = 'SAT' 
            break;
        case 7 : targetDay = 'SUN' 
            break;
        default:
            break;
    }

    return targetDay;
}

// console.log(getDayName(5, 24)); // TUE
// console.log(getDayName(1, 4)); // Mon


// 29 get the weekly schedule

function getCurrentWeek() {
    let startDate = new Date();
    const res = [];

    let dayCode = 0;
    switch (startDate.toString().substring(0,3)) {
        case 'Sun' : dayCode = 1
            break;
        case 'Mon' : dayCode = 2
            break;
        case 'Tue' : dayCode = 3
            break;
        case 'Wed' : dayCode = 4
            break;
        case 'Thu' : dayCode = 5
            break;
        case 'Fri' : dayCode = 6
            break;
        case 'Sat' : dayCode = 7
            break;
        case 'Sun' : dayCode = 8
            break;
        default:
            break;
    }
    
    const dayTime = (1 * 24 * 60 * 60 * 1000)
    let dateformat = startDate.getTime() - (dayTime * dayCode);
    startDate.setTime(dateformat);

    console.log(startDate.getFullYear());

    for (let i = 0; i < 7; i++) {
        dateformat = startDate.getTime() + dayTime;
        startDate.setTime(dateformat);

        //create the date string
        const strCurrentDate = `${startDate.getFullYear()}-${startDate.getMonth()+1}-${startDate.getDate()}`;

        //store it in the array
        res.push(strCurrentDate);
        
    }
    // console.log(strCurrentDate);
    return res;
}

// console.log(getCurrentWeek());
/*
오늘이 2020-04-21인 경우,
[
  '2020-04-19',
  '2020-04-20',
  '2020-04-21',
  '2020-04-22',
  '2020-04-23',
  '2020-04-24',
  '2020-04-25'
]
*/