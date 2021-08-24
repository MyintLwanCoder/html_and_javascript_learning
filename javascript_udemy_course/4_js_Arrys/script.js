'use strict';

// array

var colors = new Array();

var depts = [];

// var fruits = ['Apple', 'Banana', 'Mango'];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[3] = 'Coconut';
fruits[1] = 'Guava';

console.log(fruits.length);     // 4
console.log(fruits);

console.log(typeof fruits);     // object
console.log(Array.isArray(fruits));     // true

console.log(fruits.toString());
console.log(fruits.valueOf());

console.log(fruits.join(' $ '));
console.log(fruits.join(' - '));

var mixArr = [ {ename: 'Smith'}, 
             false,
             function() {console.log('Hello')},
             'Apple' ];

console.log(mixArr[0].ename);   // Smith
mixArr[2]();                    // Hello

var cubes = [
    [1, 2, 3],
    [4, 5, 6]
];

for (var i = 0; i < cubes.length; i++) {
    var cube = cubes[i];
    for (var j = 0; j < cube.length; j++) {
        console.log('cube[' + i + '][' + j + ']  = ' + cube[j]);
    }
}

// Stack

var stack = [];

stack.push(1);
console.log(stack);     // [1]

stack.push(2);
console.log(stack);     // [1,2]

stack.push(3);
console.log(stack);     // [1,2,3]

console.log(stack.pop());
console.log(stack);     // [1,2]

console.log(stack.pop());
console.log(stack);     // [1]

console.log(stack.pop());
console.log(stack);     // []

console.log(stack.pop());       // undefined

function reverse(str) {
    var stack = [];
    for (var i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    
    var reverseStr = '';
    while (stack.length > 0) {
        reverseStr = reverseStr + stack.pop();
    }
    
    console.log(reverseStr);
}

reverse('JavaScript');

// Queue

var num = '5678';
var queue = [];

// Insertion
for (var i = 0; i < num.length; i++) {
    console.log(num[i]);
    queue.unshift(num[i]);
}
console.log(queue);

//Removal
while (queue.length > 1);{
   queue.shift();
}
console.log(queue);
console.log(queue);

// Shallow copy
var teamA = [5, 6, 7, 8];
var teamB = [];

teamB = teamA;

teamA[0] = 10;
teamA[1] = 20;  // teamA = [10, 20, 7, 8];
console.log( 'teamA: ' + teamA);
console.log( 'teamB: ' + teamB);

// Deep copy
var teamA = [5, 6, 7, 8];
var teamB = new Array(teamA.length);

for (var i = 0; i < teamB.length; i++) {
    teamB[i] = teamA[i];
}

teamA[0] = 30;
teamA[1] = 40;  // teamA = [30, 40, 7, 8];
console.log( 'teamA: ' + teamA);
console.log( 'teamB: ' + teamB);

// spilce()

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May',                    'Jun'];
var deleteMonths = months.splice(0, 4);

console.log(months);    // [May, Jun]
console.log(deleteMonths);  // [Jan, Feb, Mar, Apr]

var months = ['Jul', 'Aug', 'Nov', 'Dec'];
months.splice(2, 0, 'Sep', 'Oct');

console.log(months);    // [Jul, Aug, Sep, Oct, Nov,                                Dec];

var depts = ['R&D', 'Sales', 'IT'];
depts.splice(1, 1, 'HR', 'Finance');

console.log(depts);     // [R&D, HR, Finance, IT];

// arr.slice(start, stop);

var depts = [10, 20, 30, 40, 50];
var newDepts = depts.slice();

console.log('depts: ' + depts); // [10, 20, 30, 40, 50];
console.log('newDepts: ' + newDepts); // [10, 20, 30, 40, 50];

var depts = [10, 20, 30, 40, 50];
var newDepts = depts.slice(0, 3);

console.log('depts: ' + depts); // [10, 20, 30, 40, 50]
console.log('newDepts: ' + newDepts);   // [10, 20, 30]

function convertToArray() {
    return Array.prototype.slice.call(arguments);
}

var consversion = convertToArray('X', 'Y', 'Z');
console.log(consversion);   // [X, Y, Z]

var tag = document.querySelectorAll('h1');
var tagArray = Array.prototype.slice.call(tag);

// var tagArray = [].slice.call(document.querySelectorAll('h1'));

console.log(tag);   // NodeList [h1]
console.log(tagArray);  // [h1]

// indexOf()
// arr.indexOf(searchElement, fromIndex);

var depts = [40, 30, 20, 40, 20];

console.log(depts.indexOf(30));     // 1
console.log(depts.indexOf(40));     // 0
console.log(depts.indexOf(20));     // 2
console.log(depts.indexOf(50));     // -1

console.log(depts.indexOf(40, -5)); // 5 + (-5) = 0 ==> 0
console.log(depts.indexOf(30, -2)); // 5 + (-2) = 3 ==> -1

function locateAll(element, arr) {
    var results = [];
    var idx = arr.indexOf(element);
    
    while (idx != -1) {
        results.push(idx);
        idx = arr.indexOf(element, idx + 1);
    }
    
    return results;
}

var depts = [40, 30, 20, 40, 20];
console.log(locateAll(20, depts));  // [2, 4]

// lastIndexOf()
// arr.lastIndexOf(searchElement, fromIndex);

var depts = [40, 30, 20, 40, 20];

console.log(depts.lastIndexOf(40)); // 3
console.log(depts.lastIndexOf(30)); // 1
console.log(depts.lastIndexOf(20)); // 4
console.log(depts.lastIndexOf(50)); // -1

// find()
var gadgets = [
    {name: 'Apple', quantity: 3},
    {name: 'Nokia', quantity: 0},
    {name: 'Mi', quantity: 7}
];

function isMi(mobile) {
    return mobile.name === 'Mi';
}

var result = gadgets.find(isMi);
// var result = gadgets.find(mobile => mobile.name === 'Mi');
console.log(result);   // {name: 'Mi', quantity: 7}

// findIndex()
var gadgets = [
    {name: 'Apple', quantity: 3},
    {name: 'Nokia', quantity: 0},
    {name: 'Mi', quantity: 7}
];

function isMi(mobile) {
    return mobile.name === 'Mi';
}

var result = gadgets.findIndex(isMi);
// var result = gadgets.findIndex(mobile => mobile.name === 'Mi');
console.log(result);    // 2

// filter()
var languages = ['java', 'oracle', 'javascript', 'kotlin', 'hibernate'];

function desiredLanguage(language) {
    return language.length > 6;
}

var result = languages.filter(desiredLanguage);
console.log(result);

var gadgets = [
    {name: 'Apple', quantity: 3},
    {name: 'Nokia', quantity: 0},
    {name: 'Mi', quantity: 7}
];

function isNotMi(mobile) {
    return mobile.name !== 'Mi';
}

var result = gadgets.filter(isNotMi);
console.log(result);    // [{name: 'Apple', quantity: 3}, {name: 'Nokia', quantity: 0}]

// concat()

var alpha = ['a', 'b'];
var num1 = [1, 2];
var num2 = [3, 4];

var alphaNumeric = alpha.concat(num1, num2, 5, [6, 7]);
console.log(alphaNumeric);  // [a, b, 1, 2, 3, 4, 5, 6, 7]

var arr = [5];
var arrayLikeObj = {
    length: 2,
    0: "Hello",
    1: "World"
};
console.log(arr.concat(arrayLikeObj));

var arr = [5];
var arrayLikeObj = {
    [Symbol.isConcatSpreadable]: true,
    length: 2,
    0: "Hello",
    1: "World"
};
console.log(arr.concat(arrayLikeObj));  // [5, "Hello", "World"]

// reverse()
var array1 = [3, 4, 5, 6, 7];
var reversed = array1.reverse();

console.log(array1);
console.log(reversed);   // [7, 6, 5, 4, 3]

// map()

var arr = [1, 4, 9, 16];
var result = [];
var mutiply = 0;

for (var i = 0; i < arr.length; i++) {
    mutiply = arr[i] * arr[i];
    result.push(mutiply);
}

console.log(result);    // [1, 16, 81, 256]

var arr = [1, 4, 9, 16];

function square(num) {
    return num * num;
}

var result = arr.map(square);
// var result = arr.map(num => num * num);

console.log(result);    // [1, 16, 81, 256]*/

var keyValueArray = [
    {key: 5, value: 100},
    {key: 6, value: 200},
    {key: 7, value: 300}
];

function formatObj(obj) {
    var resultObj = {};
    resultObj[obj.key] = obj.value;
    return resultObj;
}

var reformattedArray = keyValueArray.map(formatObj);
console.log(reformattedArray);  // [{5: 100}, {6: 200}, {7: 300}]

// forEach()

var grades = ['a', 'b', 'c'];

for (var i = 0;i < grades.length; i++) {
    console.log(grades[i]);
}

var grades = ['a', 'b', 'c'];

grades.forEach(function(element) {
    console.log(element);
});

var grades = ['a', 'b', 'c'];

grades.forEach(process);

function process(element) {
    console.log(element);
}

// sort()

function compare(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;    
    }
    return 0;
}

function compareNumbers(a, b) {
    return a - b;
}

var depts = ['Sales', 'IT', 'R&D', 'Management'];
depts.sort();
console.log(depts); // ['IT', 'Management', 'R&D', 'Sales']

var deptNumbers = [100, 30, 20, 60];

deptNumbers.sort(function(a, b) {
    return a - b;
});
console.log('Asc: ' + deptNumbers); // Asc: 20, 30, 60, 100

deptNumbers.sort(function(a, b) {
    return b - a;
});
console.log('Desc: ' + deptNumbers);    // Desc: 100, 60, 30 , 20

var emp = [
    {ename: 'Bush', salary: 95000},
    {ename: 'King', salary: 37000},
    {ename: 'Arun', salary: 45000},
    {ename: 'Tony', salary: 80000},
    {ename: 'Jack', salary: 30000}
];

emp.sort(function(a, b) {
    return a.salary - b.salary;
});
console.log('*** Salary Based ***');
display(emp);

emp.sort(function(a, b) {
    var enameA = a.ename.toUpperCase();
    var enameB = b.ename.toUpperCase();
    
    if (enameA < enameB) {
        return -1;
    }
    if (enameA > enameB) {
        return 1;
    }
    return 0;
});
console.log('*** Ename Based ***');
display(emp);

function display(emp) {
    emp.forEach(function (e) {
        console.log('ename: ' + e.ename + ', salary: ' + e.salary);
    });
}

// reduce() and reduceRight()

var numbers = [1, 2, 3, 4, 5];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);       // 15

var numbers = [1, 2, 3, 4, 5];

var sum = numbers.reduce(function(previous, current) {
    return previous + current;
});

console.log(sum);       // 15

var shoppingCart = [
    {name: 'Mobile', qty: 1, price: 500},
    {name: 'Power Bank', qty: 1, price: 100},
    {name: 'SD Card', qty: 2, price: 50}
];

var total = shoppingCart.reduce(function(previous, current) {
    return previous + (current.qty * current.price);
}, 0);
