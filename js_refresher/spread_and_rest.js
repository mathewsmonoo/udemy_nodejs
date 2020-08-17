// Spread and REST operators

const person = {
	name: 'Mathews',
	age: 24,
	greet() {
		console.log('Hi, i am ' + this.name);
	},
};

const hobbies = ['Sports', 'Cooking'];

// Transform array, return new array
hobbies.push('Programming');

// Copy an array
const copiedArray = hobbies.slice();
console.log(copiedArray);

// Only creates a array with the older array as its first element
const copiedArrayA = [hobbies];
console.log(copiedArrayA);

// Spread operator. Takes array and pull out all elements or properties and put
const copiedArrayB = [...hobbies];
console.log(copiedArrayB);

// Spread operator to copy object
const copiedPerson = { ...person };
console.log(copiedPerson);

// Rest operator
const toArray = (...args) => args;