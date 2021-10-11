import { NextFunction, Router, Request, Response } from 'express';
import generatePincode from 'generate-pincode';
import passport from 'passport';
import { sign } from 'jsonwebtoken';
import User, { UserDoc } from '../../models/users/users.model';
import { errorMessages } from '../../data/errorMessages';
import { log } from '../../utils/log';
import {
    capitalizeFirstLetter,
    newsLetterRequestToSendGrid,
} from '../../utils';
import got from 'got';
import { sendActivationEmail } from './emailTemplates';

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

router.post(
    '/register',
    async (request: Request, response: Response, next: NextFunction) => {
        try {
            let pincode = await generatePincode(5);
            async function createUser() {
                const user = new User();
                user.username = request.body.username;
                user.email = request.body.email;
                user.mobileNumber = request.body.mobileNumber;
                user.name = {
                    firstname: capitalizeFirstLetter(request.body.firstname),
                    lastname: capitalizeFirstLetter(request.body.lastname),
                };
                user.completeAddress = {
                    address: request.body.address,
                    zipcode: request.body.zipcode,
                    city: request.body.city,
                    country: request.body.country,
                };
                user.password = request.body.password;
                user.user = {
                    verification_pincode: pincode,
                    expires: Date.now() + 3600000,
                    isVerified: false,
                };
                user.fullname =
                    capitalizeFirstLetter(request.body.firstname) +
                    ' ' +
                    capitalizeFirstLetter(request.body.lastname);
                user.can_recieve_emails = request.body.newsletter
                    ? true
                    : false;
                if (user.can_recieve_emails) {
                    await newsLetterRequestToSendGrid(
                        user.can_recieve_emails,
                        user,
                        next,
                    );
                }
                await sendActivationEmail(request, user);
                response.status(201).json({
                    success: 'success',
                });
            }
            let RECAPTHA_SECRET_KEY = process.env.RECAPTHA_SECRET_KEY;
            if (
                request.body['g-recaptcha-response'] === undefined ||
                request.body['g-recaptcha-response'] === '' ||
                request.body['g-recaptcha-response'] === null
            ) {
                return response
                    .status(401)
                    .json({ error: 'Please select captcha first' });
            }
            const verificationURL =
                'https://www.google.com/recaptcha/api/siteverify?secret=' +
                RECAPTHA_SECRET_KEY +
                '&response=' +
                request.body['g-recaptcha-response'] +
                '&remoteip=' +
                request.connection.remoteAddress;
            const body: any = await got(verificationURL);
            if (body.success !== undefined && !body.success) {
                return response
                    .status(401)
                    .json({ error: 'Failed captcha verification.' });
            } else {
                console.log('User');
                await createUser();
            }
        } catch (error) {
            console.log('error', error);
            log(error);
            return next({ message: errorMessages.registerError });
        }
    },
);

export default router;
