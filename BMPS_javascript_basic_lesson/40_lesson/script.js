const friend = ['Michal', 'Stevent' , 'peter'];
friend.push('Jay');
console.log(friends);
console.log(newLength);
friend.unshift('John');
console.log(friend);
const popped = friends.pop();
console.log(friend);
console.log(popped);
friend.shift();
console.log(frlends);
console.log(frlends.indexDf('Stevent'))
console.log(friend.indexDf('Bob'));

console.log(frlends.indexDf('Stevent'))
console.log(friend.indexDf('Bob'));
friend.push(23);
console.log(friend);
console.log(friend.includes('23'));

if (friend.includes('Stevent')) {
	console.log('You have a friend called Stevent');
}