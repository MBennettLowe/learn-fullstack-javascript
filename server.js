import config from './config';
import express from 'express';
import router from './api';
//import fs from 'fs'; 

const server = express();

// This sets the view engine to be EJS. Express will then look for a EJS template under the Views folder
// The EJS files are HTML files that can have JS embedded using template tags.
server.set('view engine', 'ejs'); 

// Instead of listening to a single request event, Express handles server side routing. It exposes an API to listen to certain routes.
server.get('/', (req, res) => {
    res.render('index', {
        content: 'Hello Express and <h1>EJS!</h1>' // The content variable will be added to the body of './view'. To get elements to render update EJS tag to %-
    }); // rendering an EJS template
});

// It's even simpler using an Express Middleware to automatically serve static assets
//.use is how we put the middleware in the Express middleware stack. Public is where we want our static assets to be hosted on the file system. 
// With this line we do not need to handle the route for /.about.html or even use the fs module
server.use('/api', router); // to test this go to localhost/api to see data object
server.use(express.static('public')); 


// Test this out using localhost:8080/about.html
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