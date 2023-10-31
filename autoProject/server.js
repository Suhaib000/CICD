var http = require('http')
var fs = require('fs')

// file is included here:



const PORT = 8080


fs.readFile('./testProject/index.html', function(error, html) {
  if (error) throw error;
  http.createServer(function(request, response) {
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.write(html);
    response.write('<link rel="stylsheet" type="text/css" href="testProject/styles.css">');
    eval(fs.readFileSync('./testProject/styles.css')+'');
    response.end();
  }).listen(PORT)
});

