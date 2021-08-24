var today = new Date();
//console.log(today)
//document.getElementById("show_date").innerHTML = today;
var hourNow = today.getHours();
//console.log(hourNow);
var greeting;
console.log(greeting);

if (hourNow >18) {
     greeting = 'Good Evening';
}else if (hourNow >12) {
	greeting = 'Good Aftrenoon';
}else if (hourNow > 0) {
	greeting = 'Good Morning'
}else{
	greeting = "Welcome";
}

document.write('<h3>'+greeting+'</h3>')