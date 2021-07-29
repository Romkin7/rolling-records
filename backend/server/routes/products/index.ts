import { NextFunction, Router, Request, Response } from 'express';
import Product from '../../models/products/products.model';

const router = Router();

router.get(
    '/',
    async (request: Request, response: Response, next: NextFunction) => {
        try {
            const products = await Product.find({ front_page: true })
                .sort({ front_page_update: -1, title: 1 })
                .limit(16);
            response.status(200).json({ products });
        } catch (error) {
            return next(error);
        }
    },
);

export default router;
