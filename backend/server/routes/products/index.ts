import { NextFunction, Router, Request, Response } from 'express';
import { validateMongoDBId } from '../../middleware/middlewareObj';
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

router.get(
    '/lp:t/:id',
    validateMongoDBId,
    async (request: Request, response: Response, next: NextFunction) => {
        try {
            const product = await Product.findById(request.params.id).populate({
                path: 'owner',
                model: 'User',
                populate: [
                    {
                        path: 'reviews',
                        model: 'Review',
                        populate: {
                            path: 'author',
                            model: 'User',
                        },
                    },
                    {
                        path: 'buyer_reviews',
                        model: 'Review',
                        options: {
                            limit: 6,
                        },
                        populate: {
                            path: 'author',
                            model: 'User',
                        },
                    },
                ],
            });
            return response.status(200).json({ product });
        } catch (error) {
            return next(error);
        }
    },
);

export default router;
