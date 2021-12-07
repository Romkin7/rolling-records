import { NextFunction, Router, Request, Response } from 'express';
import { log } from '../../utils/log';
import User from '../../models/users/users.model';
import { errorMessages } from '../../data/errorMessages';

const router = Router();

router
    .route('/')
    .get(async (request: Request, response: Response, next: NextFunction) => {
        try {
            const user = await User.findOne(request.body.email);
            return response.status(200).json({ message: 'oons' });
        } catch (error) {
            log(error);
            return next({ message: errorMessages.passwordRecoveryError });
        }
    });

export default router;
