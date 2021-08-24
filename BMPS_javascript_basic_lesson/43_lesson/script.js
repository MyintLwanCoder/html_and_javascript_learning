const myBio = {
	firstName: 'IT',
	lastName: 'Yan Toete',
	age: 2021 - 1987,
	job: 'Developer',
	friend: ['Michal', 'peter', 'Stevent']
}

myBio.location = 'Myanmar';
myBio['facebook'] = '@ITyan Tote';
myBio.subject = ['Javascript', 'Web  Design', 'React js'];

console.log(myBio);

console.log('${myBio.firstName} ${myBio.lastName} open ${myBio.subject.lenght}3 subjects and intesting subject is Javascript');


// const interstIn = prompt('what do you want to know about My Bio?Choose between firstName,lastName,age,job,friend');
// if (myBio[interstIn]) {
// 	console.log(myBio.interstIn);
// }else{
// 	console.log('Wrong request ${interIn} is not property chose bitwiin.firstName,lastName,age,job,friend')
// }


// const nameKey = 'Name';
// console.log(myBio);
// console.log(myBio.lastName);
// console.log(myBio.first + nameKey);

// console.log(myBio['last' + nameKey]);
// console.log(myBio['first' + nameKey]);