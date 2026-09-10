// //  const http = require('http');
// //  const host = 'localhost';
// //  const port = 8080;

// //  const requestListener = function (req, res) {
// //      res.writeHead(200);
// //      res.end('My First Server !');
// //  }

// //  const server = http.createServer(requestListener);

// //  server.listen(port, host, () => {
// //      console.log(`Server is running on http://${host}:${port}`);
// //  });

// const fs = require('fs');
// fs.readFile("input.txt", function(err, data) {
//     if (err) {
//         return console.error(err);
//     }   
//     console.log("Asynchronous read: " + data.toString());


// })


// fs.open(path,flags,node, callback);
// const fs = require('fs'); 
// console.log("Opening an existing file");
// fs.open("input.txt", "r", function(err, fd) {
//     if (err) {
//         return console.error(err);
//     }   
//     console.log("File opened successfully!");
// });

// fs.read(fd, buffer, offset, length, position, callback);
// const fs = require('fs');
// const buf = new  Buffer(1024);

// console.log("Going to open an existing file");
// fs.open('input.txt', 'r+', function(err, fd) {
//     if (err) {  
//         return console.error(err);  
//     }
//     console.log("File opened successfully!");  
//     console.log("Going to read the file");
//     fs.readFile(fd, buf, 0, buf.length, 0, function(err, bytes){
//         if (err){  
//             console.log(err);  
//         }   
//         console.log(bytes + " bytes read");
//         // Print only read bytes to avoid junk.
//         if(bytes > 0){
//             console.log(buf.slice(0, bytes).toString());  
//         }   
//     });
// });


// fs.writeFile(path, data, options, callback);
// const fs = require('fs');
// console.log("Going to write into existing file");
// fs.writeFile('input.txt', 'Simply Easy Learning!', function(err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("Data written successfully!");
//     console.log("Let's read newly written data");       
//     fs.readFile('input.txt',  function(err, data) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log("Asynchronous read: " + data.toString());
//     });
// });



// fs.appendFile(path, data, options, callback);