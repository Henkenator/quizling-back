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
            res.sendFile(myCamera.output);
        })
        .catch((error) => {
            console.log(error);
            // Handle your error
        });



    // res.send({value: `Quiz nummer: ${req.params.id}`});
    // res.sendFile(__dirname + '/thai.jpg');

});


