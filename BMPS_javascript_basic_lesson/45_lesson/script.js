mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
	console.log(`${mark.FullName}'s BMI (${mark.bmi}) is heighther then ${mark.fullName}'s'BMI (${john.bmi})`)
}else if (john.bmi > mark.bmi){
	cconsole.log(`${john.FullName}'s BMI (${mark.bmi}) is heighther then ${john.fullName}'s'BMI (${mark.bmi})`)
}
