// 'use stritct';
// console.log(document.querySelector('.massage')textcontent);
// document.querySelector('.massage').textcontent = 'Correct Number:👍';

// document.querySelector('.number').textcontent = '13';
// document.querySelector('.score').textcontent = '10';
// document.querySelector('.guess').value;=13;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.check').addEventListener('click',);
// document.querySelector('.check').addEventListener(eventName, eventHanler);
// document.querySelector('.check').addEventListener('click', eventHanler);

// const x = function(){
// 	console.log(document.querySelector('.guess').value);
// }
const secretNumber = Math.trunc(Math.randon() * 20) + 1;
document.querySelector('.number').textcontent = 'secretNumber';
document.querySelector('.check').addEventListener('click', function(){
	const guess= Number(document.querySelector('.guess').value);
	console.log(typeof guess);

	// if (!guess) {
	// 	document.querySelector('.massage');.textcontent = 
	// 	'No Number Please Enter Again';
	// }
	// if (guess === 0) {
	// 	document.querySelector('.massage');.textcontent = 
	// 	'No Number Please Enter Again';
	// }
});


