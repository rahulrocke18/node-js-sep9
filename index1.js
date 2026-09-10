// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;
// app.get('/', (req, res,next) => {
//   console.log('Hello World!');
//   next();
// });
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

// const authMiddleware = (req, res, next) => {
//     try {
//         ... do some stuff
//         next();
//     } catch (error) {
//         next(error);
//     }
// }
// const handler = (req, res, next) => {
//     ... handle the request
// }
// application.use('path', authMiddleware, handler);


// const loggerMiddleware = function(){
// const loggerMiddleware = (req, res, next) => {
//     const loggerMiddleware = (req, res, next) => {
//         console.log('`[${new Date().toISOString()}] ${req.method} ${req.url}`');
//             next();
//     };
//     app.use(loggerMiddleware);
// }
// }


const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/user', (req, res) => {
    res.send("your are using user route");


});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

