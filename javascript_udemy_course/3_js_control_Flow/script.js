 'use strict';

// switch

switch (x) {
    case 'value1':  // if (x === 'value1')
        ...
        [break];
    case 'value2':
        ...
        [break];
    default:
        ...
        [break];
}

var grade = 'B';

switch (grade) {
    case 'A':
        console.log('Excellent');
        break;
    case 'B':
        console.log('Well Done');
        break;
    case 'C':
        console.log('Just Passed');
        break;
    default:
        console.log('Better Try Again');
}

var animal = 'Tiger';

switch (animal) {
    case 'Lion':
    case 'Tiger':
    case 'Fox':
        console.log('Wild Animals.');
        break;
    case 'Sheep':
    case 'Dog':
    default:
        console.log('Domestic Animals');
}

// while & do...while statement

while (condition) {
    // loop body
}

var count = 0;
var total = 0;

console.log('Count: Total:');

while (count < 3) {
    count++;
    total += count;     // total = total + count;
    console.log(count + '\t\t' + total);
}

// Count   Total
// 1       1
// 2       3
// 3       6

do {
    // loop body
} while (condition);

var count = 0;

do {
    count += 1;     // count = count + 1;
    console.log(count);
} while (count < 5);

// for loop

for (begin; condition; step) {
    // loop body
}

for (var count = 0; count < 3; count++) {
    console.log('Value: ' + count);
}

for (;;) {
    // repeats without limits
}

// break, continue & labeled statement

for (var count = 1; count < 10; count++) {
    if (count % 5 == 0) {
        break;
    }
    console.log('Value: ' + count);
}

for (var count = 1; count < 10; count++) {
    if (count % 2 == 0) {
        continue;
    }
    console.log('Value: ' + count);
}

console.log('Count:' + '\t' + 'Num');

// markLoop:

for (var count = 0; count < 3; count++) {
    for (var num = 0; num < 5; num++) {
        if (num == 1) {
            continue markLoop;
        }
        console.log(count + '\t\t' + num);
        if (num == 2) {
            break markLoop;
        }
    }
}
 console.log('Completed !!!');