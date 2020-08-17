const fetchData = (callback) => {
	const promise = new setTimeout(() => {
		callback('Asynchronous - 4 - 1.5 seconds have passed!');
	}, 1500);
};

// This code is executed after lines 7 and 8
setTimeout(() => {
	console.log('Asynchronous - 3 - 2 seconds have passed!');
	fetchData((text) => {
		console.log(text);
	});
}, 2000);

//This code is executed before line 2
console.log('synchronous  - 1 - Hello!');
console.log('synchronous  - 2 - Hi!');


const fs = require('fs')
const init = async () => {
	try {
		const contents = await readFile('./notes.txt')
		console.log(contents);
	} catch (err) {
		console.log(err);
	}
};

console.log('init', init())