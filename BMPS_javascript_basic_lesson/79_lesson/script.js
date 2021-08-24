'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnOpenModal = document.querySelector('.show-modal');
// console.log(btnOpenModal);
for (let i = 0; i < btnOpenModal.length; i++) {
	// console.log(btnOpenModal[i].textcontent);
	btnOpenModal[i].addEventListener('click', function(){
		console.log('Button click');
	});
}
