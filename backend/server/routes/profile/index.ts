import { Router, Response, Request, NextFunction } from 'express';
import { log } from '../../utils/log';
import {
    isLoggedIn,
    hasOwnershipForAccount,
} from '../../middleware/middlewareObj';
import User from '../../models/users/users.model';
import { errorMessages } from '../../data/errorMessages';
import { successMessages } from '../../data/successMessages';

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
/** users/:id/address */
router.put(
    '/:id/address',
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
            user.completeAddress.address = request.body.address;
            user.completeAddress.zipcode = request.body.zipcode;
            user.completeAddress.city = request.body.city;
            user.completeAddress.country = request.body.country;
            const updatedUser = await user.save();
            return response.status(200).json({
                user: updatedUser,
                message: successMessages.userAddressUpdated,
            });
        } catch (error) {
            log(error);
            return next({ message: errorMessages.userAddressError });
        }
    },
);

export default router;
