import config from './config';
import express from 'express';
import router from './api';
//import fs from 'fs'; 

const server = express();

// Instead of listening to a single request event, Express handles server side routing. It exposes an API to listen to certain routes.
server.get('/', (req, res) => {
    res.send('Hello Express');
});

// It's even simpler using an Express Middleware to automatically serve static assets
//.use is how we put the middleware in the Express middleware stack. Public is where we want our static assets to be hosted on the file system. 
// With this line we do not need to handle the route for /.about.html or even use the fs module
server.use('/api', router); // to test this go to localhost/api to see data object
server.use(express.static('public')); 


// Test this out using localhost:8080/about.html
server.get('/about.html', (req, res) => {
    fs.readFile('./about.html', (err, data) => { // We can simply use the fs core Module. Inside the HTML. The API is the readfile the path to the file. 
        res.send(data.toString()); // The callback is going to give us access to thr files data as a buffer so we can send the response as a data.toString()
    }); // We can test this by refreshing and seeing the HTML page
});

server.listen(config.port, () => {
    console.info('Express listening port', config.port);
}); // the second part of the express listen is just the success handler which is just a function

// const server = express();

// // Instead of listening to a single request event, Express also handles Server Side Routing
// // It exposes an API to listen to certain routes. '/' is the route and (req, res) is the event handler
// server.get('/', (req, res) => {
//     res.send('Hello Express');
// });

// server.listen(config.port, () => { // using the listen port from the config file
//     console.log('Express listening on port', config.port)

// });