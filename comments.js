//create web server
const express = require('express');
const app = express();

//create a router
const router = express.Router();

//create a route
router.get('/comments', (req, res) => {
    res.send('You are on the comments page');
});

//use the router
app.use(router);

//start the server
app.listen(3000, () => {
    console.log('Server is running');
});