const express = require("express");
const routes = require('./routes');
const { authenticate } = require("./middlewares/AuthenticationValidator");
const app = express();
app.use(express.json());
app.use('/api', authenticate, routes);
console.log('app loaded');

module.exports = app;

//is everything correct now?
//but not wokeking getting this <!DOCTYPE html>
/*<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Error</title>
</head>

<body>
    <pre>Cannot POST /api/v1/createCricketer</pre>
</body>
*/
//getting above error why?
