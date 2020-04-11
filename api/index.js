import express from 'express';

const router = express.Router(); // Creating a router object

router.get('/', (req, res) => {
    res.send({ data: [] }); // This is an API call and we will send a JSON response by sending an Object
});

export default router;