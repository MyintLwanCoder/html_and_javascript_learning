let dice = Math.random()*6;
// console.log(dice);

while (dice ! == 6){
	console.log('You Rooled a ${dice}');
	dice = Math.trunc(Math.random() * 6) +1;

	if (dice ===6)console.log('loop is about to end....');
}