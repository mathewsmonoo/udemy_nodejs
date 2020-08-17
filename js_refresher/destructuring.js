const person = {
	name: 'Mathews',
	age: 24,
	greet() {
		console.log('Hi, my name is ' + this.name);
	},
};
person.greet();

const printName = (personData) => console.log(personData.name);
printName(person);

// Destructuring only to get property NAME from person
const printMyName = ({ name }) => console.log(name);
printMyName(person);

// Destructuring object and assigning its value to other vars
const { name, age } = person;

//Destructure arrays
const hobbies = ['Sports', 'Cooking'];
console.log(hobbies);

let [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);