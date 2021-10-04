import { Router, Request, Response, NextFunction } from 'express';
import Order from '../../models/orders/orders.model';

const router = Router();

/** Route to get all orders in Admin panel */
router.get(
    '/',
    async (request: Request, response: Response, next: NextFunction) => {
        try {
            const orders = await Order.find({}).limit(28);
            return response.status(200).json({ orders });
        } catch (error) {
            return next(error);
        }
    },
);

export default router;
