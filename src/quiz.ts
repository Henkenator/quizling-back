import {Request, Response, Router } from 'express';
import * as cors from 'cors';

export const router: Router = Router();

// router.get('/quiz', async function (req: Request, res: Response, next: NextFunction) {
router.get('/quiz', cors(), function (req: Request, res: Response) {
    /*try {
        const repository = await getProductRepository();
        const allProducts = await repository.find();
        res.send(allProducts);
    }
    catch (err) {
        return next(err);
    }*/


        res.send({value: 'Ett quiz kommer lastat!'});

});

router.get('/quiz/:id', function (req: Request, res: Response) {

        res.send({value: `Quiz nummer: ${req.params.id}`});

});
