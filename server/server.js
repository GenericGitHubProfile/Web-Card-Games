const http = require('http');
const https = require('https');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
//const mysql = require('mysql');
const bodyParser = require('body-parser');
const auth = require('./auth.json');

const app = express();
app.use(bodyParser.json());
app.use(cors());


//general server functions
app.get('/status', getStatus);




//Server function definitions
async function getStatus(req, res) {
    try {
        res.json({"status": "running"});
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
}
