//  const http = require('http');
//  const host = 'localhost';
//  const port = 8080;

//  const requestListener = function (req, res) {
//      res.writeHead(200);
//      res.end('My First Server !');
//  }

//  const server = http.createServer(requestListener);

//  server.listen(port, host, () => {
//      console.log(`Server is running on http://${host}:${port}`);
//  });

const fs = require('fs');
fs.readdFile("input.txt", function(err, data) {
    if (err) {
        return console.error(err);
    }   
    console.log("Asynchronous read: " + data.toString());


})
