var connect = require('connect');
var fs = require("fs");
 
var app = connect();
app.use(connect.bodyParser({uploadDir:__dirname +'/file',keepExtensions:true}));
app.use(connect.logger('dev'));
// respond to all requests
app.use('/post', function(req, resp) {
  console.log("file", req.files.userfile.name);
  fs.renameSync(req.files.userfile.path, __dirname +'/file/' + req.files.userfile.name);
  //console.log("body", req.body);
   // don't forget to delete all req.files when done
});

app.listen(3000)
