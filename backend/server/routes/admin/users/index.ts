import { NextFunction, Router, Request, Response } from 'express';
import { log } from '../../../utils/log';
import { errorMessages } from '../../../data/errorMessages';
import User from '../../../models/users/users.model';
import { successMessages } from '../../../data/successMessages';

const router = Router();

router.patch(
    '/wholesale',
    async (request: Request, response: Response, next: NextFunction) => {
        try {
            const user = await User.findById(request.params.id);
            user.isWholesale = !user.isWholesale;
            const updatedUser = await user.save();
            return response.status(200).json({
                message: successMessages.wholesaleUserRoleUpdateMessage,
                user: updatedUser,
            });
        } catch (error) {
            log(error);
            return next({
                status: 500,
                message: errorMessages.wholesaleUserError,
            });
        }
    },
);

export default router;
