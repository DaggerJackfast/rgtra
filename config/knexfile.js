const fs = require('fs');
const dotenv = require('dotenv');
// const envConfig = dotenv.parse(fs.readFileSync('../.env'));
// for (var k in envConfig) {
//     process.env[k] = envConfig[k]
// }
dotenv.config();
console.log('env',process.env.DB_HOST);
console.log('env',process.env.DB_USER);
console.log('env',process.env.DB_PASSWORD);
console.log('env',process.env.DB_NAME);
console.log('env',process.env.APP_ENV);
module.exports = {
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    migrations: {
        directory: './migrations'
    },
    seeds: {
        directory: './seeds',
    },
    debug: process.env.APP_ENV === 'development'
};