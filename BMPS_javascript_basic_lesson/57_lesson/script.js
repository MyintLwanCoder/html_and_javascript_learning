//Remember, we"re gonna use strict mode in all script now!
"use stritct";

//1) understanding the problem
//-whant is Timperature amplitrde? Answer : dufferent between highest and lowest temp 
//-How to copute max and min temperature?
//-what's a sensor error? And what do do?

//2)Breaking up into sub-problems
//-How to ignore errors?
//-find max value in temp arry 
//-find min value in temp arry
//-subtrct min form max(amplitude)and returm it.

const calcTAmplitude = function(temps){
	let max = temps[0];
	let min = temps[0];
	for (let i = 0; i <temps.length; i++){
		const curTemp = temps[i];
		if (typeof curTemp !== "number") continue;
		  if (curTemp > max) max = curTemp;
          if (curTemp < min) min = curTemp;
		 
		 }
		 console.log(max,min);
};
const amplitude =  calcTAmplitude([5, 12, 9],[7, 15, 9, 21, 3]);
console.log(amplitude);