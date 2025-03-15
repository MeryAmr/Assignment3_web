require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { Client } = require('pg');
const { postGreRun } = require('./database/postgresdb');
const app = express();
const port = 3000;
const get = require('./routes/GET');
const post = require('./routes/POST');
const put = require('./routes/PUT');
const del = require('./routes/DELETE');
const mongodb = require('./database/mongodb');
app.use(express.json())


mongodb.on('error', (error) => console.error(error));
mongodb.once('open', () => console.log('Connected to MongoDB Database'));

app.use(get);
app.use(post);
app.use(del);
app.use(put);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
postGreRun().catch(console.dir);