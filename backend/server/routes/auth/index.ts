import { NextFunction, Router, Request, Response } from 'express';
import passport from 'passport';
import { UserDoc } from '../../models/users/users.model';

const router = Router();

router.post(
    '/login',
    async (request: Request, response: Response, next: NextFunction) => {
        try {
            // Use passport to authenticate user login
            passport.authenticate(
                'local',
                async (error: string[], user: UserDoc) => {
                    if (!user) {
                        return next({
                            status: 400,
                            message: error,
                        });
                    }
                    return response.status(200).json({
                        user,
                        message: 'Tervetuloa takaisin ' + user.username,
                    });
                },
            )(request, response, next);
        } catch (error) {
            return next(error);
        }
    },
);

export default router;
