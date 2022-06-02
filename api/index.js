const express = require('express');
const config = require('../config.js');
const user = require('./components/user/network.js');

const app=express();

app.use('/api/user', user);

app.listen(config.api.port, () => {
    console.log(`puerto escuchando en ${config.api.port}`)
});

