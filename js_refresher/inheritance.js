class Matrix {
	whisper(phrase) {
		console.log('whispering : ', phrase.toLowerCase(), '...');
	}
}

class OtherMatrix extends Matrix {
	shout(phrase) {
		console.log('SHOUTING : ', phrase.toUpperCase(), '!!');
	}
}

class Dog {
	constructor(name, age = 0) {
		this.name = name;
		this.age  = age;
	}
}

myMatrix = new Matrix();
myMatrix.whisper('SsSSHhhHh');
myOtherMatrix = new OtherMatrix();
myOtherMatrix.shout('Oh my god');
myOtherMatrix.whisper('Oh my god');
// myMatrix.shout("AAAAAAAH!"); error.
console.log(new OtherMatrix() instanceof Matrix);
console.log(new OtherMatrix() instanceof Dog);
myDog = new Dog('Rex');
console.log(myDog);