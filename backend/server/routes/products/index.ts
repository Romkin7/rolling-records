import { NextFunction, Router, Request, Response } from 'express';
import Product from '../../models/products/products.model';

const router = Router();

router.get(
    '/',
    async (request: Request, response: Response, next: NextFunction) => {
        try {
            const products = await Product.find();
        } catch (error) {
            return next(error);
        }
    },
);

export default router;
