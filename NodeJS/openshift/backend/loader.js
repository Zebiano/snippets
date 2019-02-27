// Requires
const server = require('./server.js');
require('./loader/connect.js'); // Connection to database

// Variables

// Routes
server.app.get('/', function (req, res) {
    //console.log("Fuck you");
    res.send("hehe");
});