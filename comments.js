// Create web server
var express = require('express');
var app = express();
// Create a router
var router = express.Router();
// Create a function that will be called when a request is made to the root of the server
router.get('/', function(req, res) {
    // Respond with the text "Hello, World!"
    res.send('Hello, World!');
});
// Create a function that will be called when a request is made to the /comments endpoint
router.get('/comments', function(req, res) {
    // Respond with the text "This is the comments endpoint!"
    res.send('This is the comments endpoint!');
});
// Tell the app to use the router
app.use(router);
// Start the server on port 3000
app.listen(3000, function() {
    console.log('Server running on http://localhost:3000');
});

