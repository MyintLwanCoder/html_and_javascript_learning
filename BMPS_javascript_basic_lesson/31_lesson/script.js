'use stritct';

// let hasDriverlicense = false;
// const passTest = true;

// if (passTest)hasDriverlicense = true; 
// if (hasDriverlicense)console.log('I can drive a car');

// function logger(){
// 	console.log('My Name is BMPS learning Myanmar');
// }

// logger();
// logger();
// logger();

function fruilProcessor (upples , oranges){
	console.log('apples, oranges');
	const juice = 'juice with $[apples] apples and ${oranges} oranges🍷';
    return juice;
}

const appleJuice = fruilProcessor(5,0);
console.log(appleJuice);
console.log(fruilProcessor(5,0));

const appleOrangeJuce = fruilProcessor(2, 4);
console.log(appleOrangeJuce);
