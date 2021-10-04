import { NextFunction, Router, Request, Response } from 'express';
import passport from 'passport';
import { sign } from 'jsonwebtoken';
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
                        console.log(error);
                        return next({
                            status: 400,
                            message: error,
                        });
                    }
                    const expiry = new Date();
                    expiry.setMinutes(expiry.getMinutes() + 1440);
                    const token = sign(
                        {
                            email: user.email,
                            username: user.username,
                            address: user.completeAddress,
                            bank_account_number: user.bank_account_number,
                            firstname: user.name.firstname,
                            lastname: user.name.lastname,
                            admin: user.admin,
                            mobileNumber: user.mobileNumber,
                            bonus_system: user.bonus_system,
                            expiry: Math.round(expiry.getTime() / 1000),
                        },
                        process.env.AUTH_SHARED_SECRET as string,
                    );
                    return response.status(200).json({
                        user,
                        message: 'Tervetuloa takaisin ' + user.username,
                        token,
                    });
                },
            )(request, response, next);
        } catch (error) {
            console.log(error);
            return next(error);
        }
    },
);

export default router;
