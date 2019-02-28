// Requires
const express = require('express');

// Variables
const app = express();
const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
const ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

// Listen
app.listen(port, ip, function () {
    console.log("App started on " + ip + ":" + port);

    // Load application
    require('./loader.js');
});

// Export
module.exports = {
    app: app
}