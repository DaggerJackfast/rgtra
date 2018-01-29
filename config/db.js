var knex = require('knex');
var bookshelf = require('bookshelf');
var dbConfig = require('./knexfile');
const fs = require('fs');
const dotenv = require('dotenv');
// const envConfig = dotenv.parse(fs.readFileSync('../.env'));
// for (var k in envConfig) {
//     process.env[k] = envConfig[k]
// }
dotenv.config();
console.log('procesDDDDDDDdddds',process.env.APP_ENV);
module.exports = bookshelf((knex(dbConfig)),
    {debug: process.env.APP_ENV === 'development'});