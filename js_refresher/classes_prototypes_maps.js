// Prototypes
let protoObject = {
	speak(line) {
		console.log(`The ${this.type} rabbit says '${line}'`);
	},
};
let derivedObject = Object.create(protoObject);
derivedObject.type = 'White';
derivedObject.speak("I'm fluffly!");

// Classes
class Rabbit {
	constructor(type) {
		this.type = type;
	}
	speak(line) {
		console.log(`The ${this.type}  rabbit says '${line}'`);
	}
}

let killerRabbit  = new Rabbit('killer');
let awkwardRabbit = new Rabbit('awkward');
killerRabbit.speak("i'm a killer!");
awkwardRabbit.speak("i'm awkward...");

// Map
let contacts = new Map();
contacts.set('Jessie', {
	phone: '213-555-1234',
	address: '123 N 1st Ave',
});
console.log('Has Jessie?', contacts.has('Jessie'));
console.log('Size:', contacts.size);
console.log('Get Jessie:', contacts.get('Jessie'));
console.log('Get Jessie Phone:', contacts.get('Jessie').phone);
contacts.set('Susie', {phone: '000-000-000', address: '321 M 2nd Ave'});
contacts.delete('Jessie');