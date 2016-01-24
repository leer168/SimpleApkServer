function handle(req,res) {
	console.log(req.url);
	if('/post' == req.url && 'POST' == req.method) {
		var body = '';
		req.on('data', function(chunk) {
			body += chunk;
		});
		req.on('end', function() {
			res.writeHead(200);
			console.log(body);
		});
      
    } else {
      res.writeHead(200);
      res.end('Hello,wordl');
    }
}
require('http').createServer(handle).listen(3000);