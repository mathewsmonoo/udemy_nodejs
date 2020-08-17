// Import
const http = require('http');

// Create server
const server = http.createServer((req, res) => {
	console.log(req.url, req.method, req.headers);
	const url = req.url;
	if (url === '/') {
		res.write('<html>');
		res.write('<head><title>Enter Message</title></head>');
		res.write(
			'<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit>Send</button></form></body>'
		);
		res.write('</html>');
		return res.end(); // usedd to quit out of function and prevent new req.write's
	}
	res.setHeader('Content-Type', 'text/html');
	res.write('<html>');
	res.write('<p>Hello from nodejs!</p>');
	res.write('</html>');
	res.end();

	// process.exit(); Hard exits server
});

server.listen(3000); //server.listen(8000);
// nodejs will keep this running to listen for incoming requests
