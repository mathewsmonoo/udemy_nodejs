var variable   = 'Not used anymore'
let variable   = 'Used syntax'
const constant = '"Unchangeable" constant'


const name = "Max";
let age = 29;
const hasHobbies = true;

age = 30;

//Function
const summarizeUser = function summarizeUser(name, age, hasHobby) {
  return (
    "Name is " + name + ", age is " + age + " and has hobbies: " + hasHobby
  );
};
console.log(summarizeUser(name, age, hasHobbies));

//Arrow Function
const summarizeUser = (name, age, hasHobby) => {
  return (
    "Name is " + name + ", age is " + age + " and has hobbies: " + hasHobby
  );
};
console.log(summarizeUser(name, age, hasHobbies));

// Arrow function with one line of return
const add = (a, b) => a + b;

// Arrow function with one line of return and one argument 
const addOne = a => a + 1;
