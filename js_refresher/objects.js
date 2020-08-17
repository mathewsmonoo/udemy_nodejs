// Here, 'this' refers to a global scope, so the return is undefined
const personA = {
  name: "Mathews",
  age: 29,
  greet: () => {
    console.log("Hi, i am " + this.name);
  },
};
personA.greet();

// Here, because of the syntax of 'greet', this now refers to something inside the object.
const personB = {
  name: "Mathews",
  age: 29,
  greet() {
    console.log("Hi, i am " + this.name);
  },
};
personB.greet();
