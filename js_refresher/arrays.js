// For JS, neither length or types of array's elements are fixed.
const hobbies = ['Sports', 'Cooking'];
let first 	  = hobbies[0];
let last 	  = hobbies[hobbies.length - 1];
console.log(`First: ${first}\tLast: ${last}`);

for (let hobby of hobbies) {
	console.log(hobby);
}

// Transform array, return new array
console.log(hobbies.map((hobby) => 'Hobby: ' + hobby));
console.log(hobbies);
