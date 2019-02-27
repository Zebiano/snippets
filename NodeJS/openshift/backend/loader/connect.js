// Requries
const mongoose = require('mongoose');

if (process.env.TEST == 'true') {
    console.log("Environment variables are live!");

    // Variables
    const mongoServiceName = process.env.DATABASE_SERVICE_NAME.toUpperCase();
    const mongoHost = process.env[mongoServiceName + '_SERVICE_HOST'];
    const mongoPort = process.env[mongoServiceName + '_SERVICE_PORT'];
    const mongoDatabase = process.env[mongoServiceName + '_DATABASE'];
    const mongoPassword = process.env[mongoServiceName + '_PASSWORD'];
    const mongoUser = process.env[mongoServiceName + '_USER'];
    const mongoURL = 'mongodb://' + mongoHost + ':' + mongoPort + '/' + mongoDatabase;

    // Connect to DB
    mongoose.connect(mongoURL, { useNewUrlParser: true }, function (err) {
        if (err) {
            console.log("Error connecting to DB: " + err);
        } else {
            console.log("Successfully connected to DB through " + mongoURL);
        }
    });
} else {
    console.log("Environment variables are unaccessable. Not attempting to connect to DB.");
}