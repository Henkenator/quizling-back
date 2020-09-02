import {Request, Response, Router } from 'express';

export const router: Router = Router();

const PiCamera = require('pi-camera');
const myCamera = new PiCamera({
    mode: 'photo',
    output: `${ __dirname }/test.jpg`,
    width: 640,
    height: 480,
    nopreview: true,
});

router.get('/img', function (req: Request, res: Response) {


    myCamera.snap()
        .then((result) => {
            // Your picture was captured
            // console.log(myCamera.output);
            console.log(`${ __dirname }/test.jpg`);
            res.sendFile(`${ __dirname }/test.jpg`);
        })
        .catch((error) => {
            console.log(error);
            // Handle your error
        });



    // res.send({value: `Quiz nummer: ${req.params.id}`});
    // res.sendFile(__dirname + '/thai.jpg');

});


