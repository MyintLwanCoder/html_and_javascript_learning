const secretNumber = Math.trunc(Math.randon() * 20) +  1;
document.querySelector('.number').textcontent =secretNumber;
let score = 20;
document.querySelector('.check').addEventListener('click', function(){
	const guess= Number(document.querySelector('.guess').value);
	console.log(typeof guess);

	if (!guess) {{
		document.querySelector('.massage').textcontent = 
		'No Number Please Enter Again';
	    } else if(guess === secretNumber){
		 document.querySelector('.massage').textcontent = 'Correct Number:👍';

	    } else if (score > 0) {
		document.querySelector('.massage').textcontent = 'Too low :';
		score--;
		document.querySelector('.score').textcontent = score;
	}
	} else if (score > 0) {
		document.querySelector('.massage').textcontent = 'Too low :';
		score--;
		document.querySelector('.score').textcontent = score;
	}
}