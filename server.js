import config from './config';
import express from 'express';

const server = express();

// Instead of listening to a single request event, Express also handles Server Side Routing
// It exposes an API to listen to certain routes. '/' is the route and (req, res) is the event handler
server.get('/', (req, res) => {
    res.send('Hello Express');
});

server.listen(config.port, () => { // using the listen port from the config file
    console.log('Express listening on port', config.port);

});