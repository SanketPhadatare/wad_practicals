const express = require('express');
const abc = express();

const PORT = 8000;

abc.use(express.static('public'));

abc.get('/', function(req, res) {
    res.send('Hello World!');
});

abc.listen(PORT, function(error) {
    if (error) {
        console.error('Error starting the server:', error);
    } else {
        console.log(`Server listening on port ${PORT}`);
    }
});
