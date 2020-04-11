import config from './config';
import express from 'express';
import fs from 'fs'; 

const server = express();

// Instead of listening to a single request event, Express handles server side routing. It exposes an API to listen to certain routes.
server.get('/', (req, res) => {
    res.send('Hello Express');
});

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