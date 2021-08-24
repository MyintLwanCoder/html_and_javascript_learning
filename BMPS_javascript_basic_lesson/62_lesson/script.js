//-Array Transform to string. separated by...
//-what is the x day? Answer : index + 1
//2) Breaking up into sub-problem
//-transform arry into string 
//-transform each element to string with C
//-String niid to contatin day (index + 1)
//-Add ... between elements and start and end of string

const data1 = [17, 21 , 23];
const data2 = [12, 5, -5, 0, 4];

// console.log(`...${data1[0]}...${data1[1]}...${data1[2]}`);

const frintForceCase = function(arr){
	let str = "";
	for (let i = 0; i < arr.length; i++) {
		str += `$ {arr[i]}C`;
	}
	console.log(str);
};
printForceCase(data1);

//arr[2,3,4]
// sum = 0; 0 + 2 =2 +3 =5 + 4 = 9
