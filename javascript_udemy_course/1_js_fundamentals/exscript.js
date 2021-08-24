console.log('Ext: Hillo world');

// Indentifire

// userLastName
// pageNavigation
// devphase
// test123

// Reserved Keywords

// case-sensitivity

// color               	COLOR
// instanceof              instanceOf

// stantement

semicolon();

console.log('Hello'); 
console.log('world');
console.log('Work fine');
[1, 2].forEach( console.log )

// Comments

// This is a single-line comment

// This is a block or  multi-line comment that can have multiple lines

// "use strict"--> On the top
// 'use stritct';
// this code the works the morden way
// ... 

// variables

'use stritct';

var ename;
ename = 'sumith';
console.log(ename);

var job = 'Manager';

var ename= 'king';
age = 50,
job = 'President';
ename = 9999;

var dept;
console.log(dept);

console.log(sal);

function sayGreeting(){
	//local variable
	var message = 'Hello';
	console.log(maessage);
}
say Greeting();
console.log(message);

// global variabal
var message = 'wilcome';
function sayGreeting(){
// 	//local variable
	var message = 'Hello';
	console.log(message);
}

sayGreeting();
console.log(message)

'use stritct';

var message = 'wilcome';
function sayGreeting(){
   	//local variable
	var message = 'Hello';
	console.log(message);
}

sayGreeting();
console.log(message)


console.log(ename);
var ename;
ename = 'smith';

var ename
console.log(ename);
ename = 'smith';

var sal 2000, age = 40;
{
	let temp = sal;
	sal = age;
	age = temp;
}
console.log(temp);

const DESIGNATION = 'Manager'
DESIGNATION = 'Salesman';
console.log(DESIGNATION);

// data types

var dept = 30;
dept = false;
dept= "Sales";

// number

var num = 100;
'use stritct';
var biNum = 0b11111111;
console.log(biNum);

var octNum = 0o50;
console.log(octNum);

var hexNum = 0xDE;
console.log(hexNum);

var num1 = 123,45;
var num2 = .5;
console.log(num2);

var num3 = 200.00;
console.log(num3);

var billion = 7.23e-6;
console.log(billion);

console.log(Number.MAX_VALUE + Number.MAX_VALUE);
console.log(Number.MAX_VALUE - Number.MAX_VALUE);

console.log('not a number'/5);

console.log(NaN/2);
console.log(NaN == NaN);

// string

console.log('sale\ 's' + '\t + "Department")

var name = 'smith';
console.log(`welcom,${name}`);

var str = 'String: ';
str = str + 'Immutability';
console.log(str);

// boolean

var isEnameValidated = true;
var isAgeValidated = false;

var isGreater = 50 > 10;
console.log(isGreater);

console.log(Boolean('Hello'));  	//true 
console.log(Boolean('')); 		//false

console.log(Boolean(500));      //true 
console.log(Boolean(Infinity));     //true 
console.log(Boolean(0));	 //false
console.log(Boolean(NaN));   //false

console.log(Boolean({century: 100}));    //true 
console.log(Boolean(null));     //false
console.log(Boolean(undefined));  //false


// null

var job = null;
if (job != null){
	//executethe logi
};

// undefined

var ename;
console.log(ename);


// symbol
var sym1 = symbol();
console.log(symbol() == symbol());

var sym2 symbol('event.save');
console.log(sym2.toString());

const CLICK = symbol('click');

// object

var dept = new object();

var empt = {};

var empt = {
	firstName : 'smith',
	lastName : 'Weber'
};

var contact = {
	firstName : 'jack',
	lastName: 'Roy',
	email : 'abc@gmail.com',
	phone : '(444) -555-6666',
	address:{
		city : 'Oakland',
		state: 'CA',
		country: 'USA'
	}
}

console.log(contact.firstName);
console.log(contact.lastName);
console.log(contact.address.country);

console.log(contact['phone']);
console.log(contact['email']);

var client = new Object();
client.company = 'Apple Inc.';
console.log(client.company);


// typeof operator

console.log( typeof 0);
console.log( typeof "Welcome");
console.log( typeof  true);
console.log( typeof null);
console.log( typeof undefined);

instanceof operator
var str = new String("Tesing");
var dt = new Date();

console.log(str instanceof String);    //true
console.log(dt instanceof Date);       //true

// premitive vs. Reference

var	x = 50;
var y = x;
y = 100;

console.log(x);
console.log(y);

var p = {dept: 'R&D'};
var q = p;
q.dept = 'Sales';

console.log(p.dept);
console.log(q.dept);

//Broswer specific function

// alret('This is a warning Message');

var job = prompt('What is  your role?', 'Manager');
alert('you are ${job}!!!');

var isSalesman = prompt ('Are you salesman?');
var isSalesman = prompt ('Are you salesman?', '');
alert(`you are ${isSalesman}!!!`);

var isManger = confirm('Are you Manager?');
alert(isManger);


// Number

var numberObj = new Number(50);
console.log(numberObj.valueOf());

var count = 45;
console.log(count.toString());
console.log(count.toString(2));

console.log((225).toString(16) );
console.log( parseInt('100px'));
console.log( parseFloat('12.5$'));

console.log(Math.floor(15.8));
console.log(Math.ceil(15.8));
console.log(Math.round(15.8));
console.log(Math.trunc(15.8));
console.log(Math.random());

console.log(Math.max(7,-10,0));
console.log(Math.min(7,-10,0));
console.log(Math.pow(2,10));

toFixed()
var numObj = 56.78;

console.log(numObj.toFixed());
console.log(numObj.toFixed(1));
console.log(numObj.toFixed(4));

toExponential()
var x = 70, y = 789000;
console.log(x.toExponential());
console.log(y.toExponential());

toPrecision()
console.log(z.toPrecision());  //1.456
console.log(z.toPrecision(2)); //1.5
console.log(z.toPrecision);

// string

var str = new string('Test');

console.log(str.length);
console.log(str.valueOf());
console.log(str.toString());

var ename = 'smith';
console.log(ename.toLowerCase());      //smith
console.log(ename.toUppererCase());     //SMITH

console.log(str[0]);   //T
console.log(str.charAt());

var s1 = "Paul";
var s2 = "Miller";
var s3 = s1.concat(s2);
console.log(s3);
console.log(s1);

var s4 = s1 + s2;
console.log(s4);

substr(startIndex, length)

var str = "Chrome Broswer";
console.log(str.substr(0,8));   //Chrome B
console.log(str.substr(8,4));   //rows

substring(startIndex, endIndex)
var str = "Chrome Broswer";
console.log(str.substr(2,13));   //rome Browse

string.IndexOf (substring, fromIndex);  

var str = "Chrome Broswer";
console.log(str.indexOf('ro',1));   //2
console.log(str.indexOf('ro'));   //2
console.log(str.indexOf('Google'));   //-1

var str = "Chrome Broswer";
console.log(str.lastIndexOf('ro'));   //2
console.log(str.lastIndexOf('ro'));   //2
console.log(str.lastIndexOf('or'));   //-1

var greet = 'Hello';
console.log(greet.trim());

firstStr.localeCompare(secondStr);
console.log('x'.localeCompare('Y'));    //-1
console.log('Y'.localeCompare('Y'));    //0
console.log('z'.localeCompare('Y'));    //1

var str = 'USE Chrome Broswer';
var regexp = str.match(/[SE]/ig);
console.log(regexp);

var str = 'USE Chrome Browser';
var pos = str.search(/se/);   //15
console.log(pos);

str.replace(substr, newSubstr)

var url = 'abc.com/bird=fly';
var newUrl = url.replace(/bird/g. 'pigeon');

console.log(newUrl);
console.log(url);

// boolean vs. Boolean

var test = Boolean('Hello');
console.log(test);
console.log(typeof(test));   //boolean

var testVal = new Boolean(false);
console.log(testVal.valueOf());
console.log(testVal.toString());

var mu = true;
var sigma = new Boolean(false);

sigma.primitiveValue = sigma.valueOf();
console.log(sigma.primitiveValue);

// mu.name = 'premitive';    //typeError

console.log(mu.name);        // Undefined

console.log(typeof mu);      //boolean
console.log(typeof sigma);   //object

console.log(mu instanceof Boolean);    // false
console.log(sigma instanceof Boolean);  // true

var falseObj = new Boolean(false);

if (falseObjf) {
	console.log('Strange part of the Boolean object');
}