import { Router, Response, Request, NextFunction } from 'express';
import {
    isLoggedIn,
    hasOwnershipForAccount,
} from '../../middleware/middlewareObj';
import User from '../../models/users/users.model';

const router = Router({ mergeParams: true });

/** Route to get profile */
router.get(
    '/',
    isLoggedIn,
    hasOwnershipForAccount,
    async (request: Request, response: Response, next: NextFunction) => {
        try {
            const user = await User.findById(request.params.id)
                .populate({
                    path: 'marketplace_products',
                    options: {
                        sort: '-createdAt',
                    },
                })
                .populate({
                    path: 'reviews',
                    model: 'Review',
                    populate: {
                        path: 'author',
                        model: 'User',
                    },
                })
                .populate({
                    path: 'buyer_reviews',
                    model: 'Review',
                    populate: { path: 'author', model: 'User' },
                });

            return response.status(200).json({ user });
        } catch (err) {
            return next(err);
        }
    },
);

export default router;
