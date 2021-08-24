const calcTip = function(bill){
	bill >= 50 && bill <-300 ? bill * 0.15 : bill * 0.2;
}

const bills =[ 22. 295, 440, 37, 105, 10, 1100, 86, 52];
const tip =[];
const total = [];

for (let i = 0; i <bills.length; i++){
	const tip = calclip(bills[i]);
	tip.push(tip);
	total.push(tip + bills[i]);
}

// console.log(bills, tip, total);

const calcAVeage = function(orr){
	let sum =0;
	for (let i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	return sum / arr.length;
}
console.log(calcAVeage(bills));
console.log(calcAVeage(tips));
console.log(calcAVeage(total));