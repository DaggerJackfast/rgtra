import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';
import morgan from 'morgan';
import rootSchema from './graphql';

dotenv.config();
const env = process.env;
const app = express();
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});
const corsOptions = {
    origin: ['http://localhost:3000'],
    credentials: true
};

app
    .use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-type] ":referrer" ":user-agent"', { stream: accessLogStream }))
    .use(cors(corsOptions))
    .use(bodyParser.urlencoded({extended: true}))
    .use(bodyParser.json())
    .use(cookieParser())
    // .use(bodyParser.text({ type: 'application/graphql' }))
    // .set('Accept', 'application/json');



app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.use('/graphql', (req, res) => {
    return graphqlHTTP(
        () => ({
            schema: rootSchema,
            graphiql: process.env.APP_ENV === 'development'
        })
    )(req, res)
});
app.listen(env.PORT);
console.log(`Server is running at http://${env.HOST}:${env.PORT}`);

