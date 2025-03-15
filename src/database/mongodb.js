require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true});
const mongodb = mongoose.connection;

module.exports = mongodb;