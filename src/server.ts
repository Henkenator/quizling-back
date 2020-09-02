import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
// const bearerToken = require('express-bearer-token');
import {router as quizRouter} from './quiz';
import {router as cameraRouter} from './pi-camera';
// import {oktaAuth} from './auth'

const PORT = 3000;

const app = express()
    .use(cors())
    .use(bodyParser.json())
//    .use(bearerToken())
//    .use(oktaAuth)
    .use(quizRouter)
    .use(cameraRouter);

// app.listen(3000, (err) => {
app.listen(PORT, () => {
    /*if (err) {
        return console.log(err);
    }*/

    return console.log(`My Node App listening on port ${PORT}`);
});
