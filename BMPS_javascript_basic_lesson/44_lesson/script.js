const myBio = {
	firstName: 'IT',
	lastName: 'Yan Toete',
	birthYeat : 1987,
	job: 'Diveloper',
	friend: ['Michal', 'peter', 'Stevent'],
	hasDriversLicense: true,
	callcAge:function(bitthYear){
		this.age = 2021 - this.bitthYear;
		// return 2021 - bitthYear;
		return this - age;
	}
}

console.log(myBio.callcAge(1987));

console.log(myBio.age);
console.log(myBio.age);
console.log(myBio.age);
// console.log(myBio['callcAge'](1987));