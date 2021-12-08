import { NextFunction, Router, Request, Response } from 'express';
import { log } from '../../utils/log';
import generatePincode from 'generate-pincode';
import User from '../../models/users/users.model';
import { errorMessages } from '../../data/errorMessages';
import { sendSms } from '../../utils/smsServer';
import {
    passwordChangedMail,
    sendPasswordRecoveryPincodeMail,
} from './templates';
import { successMessages } from '../../data/successMessages';
import { convertMobileNumber } from '../../utils';

const router = Router();

router
    .route('/')
    .post(async (request: Request, response: Response, next: NextFunction) => {
        try {
            const user = await User.findOne({ email: request.body.email });
            user.resetPasswordToken = generatePincode(6);
            user.resetPasswordExpires = Date.now() + 3600000;
            if (
                user.contactBy === 'mobileNumber' &&
                user.completeAddress.country === 'Finland'
            ) {
                sendSms({
                    sender: 'Rolling',
                    recipient: convertMobileNumber(user.mobileNumber),
                    content: `${user.name.firstname} ${user.name.lastname}, Lähetämme ohessa salasanan palautus pinkoodin. Salasanan palautus pinkoodi: ${user.resetPasswordToken}. Halutessanne voitte myös olla yhteydessä https://www.rollingrecords.fi/asiakaspalvelu asiakaspalveluumme. Ystävällisin Terveisin, Rolling Records puh: +358 (0)50 344 55 39, email: rollingrecords@outlook.com, www.rollingrecords.fi`,
                });
            } else {
                sendPasswordRecoveryPincodeMail(user);
            }
            const updatedUser = await user.save();
            return response.status(200).json({
                user: updatedUser,
                message: successMessages.passwordRecoveryPincodeSentMessage,
            });
        } catch (error) {
            log(error);
            return next({ message: errorMessages.passwordRecoveryError });
        }
    })
    .patch(async (request: Request, response: Response, next: NextFunction) => {
        try {
            const user = await User.findOne({ email: request.body.email });
            console.log(user, request.body);
            user.password = request.body.password;
            user.resetPasswordToken = null;
            user.resetPasswordExpires = null;
            const updatedUser = await user.save();
            if (
                user.contactBy === 'mobileNumber' &&
                user.completeAddress.country === 'Finland'
            ) {
                sendSms({
                    sender: 'Rolling',
                    recipient: convertMobileNumber(user.mobileNumber),
                    content: `${user.name.firstname} ${user.name.lastname} salasananne on onnistuneesti vaihdettu. Tämä on automaattinen viesti, ethän vastaa tähän viestiin. Ystävällisin Terveisin, Rolling Records puh: +358 (0)50 344 55 39, email: rollingrecords@outlook.com, www.rollingrecords.fi`,
                });
            } else {
                passwordChangedMail(user);
            }
            return response.status(200).json({
                message: successMessages.passwordChangedMessage,
                user: updatedUser,
            });
        } catch (error) {
            log(error);
            return next({
                message: errorMessages.passwordRecoveryErrorMessage,
            });
        }
    });

router.post(
    '/pincode',
    async (request: Request, response: Response, next: NextFunction) => {
        try {
            const user = await User.findOne({
                email: request.body.email,
                resetPasswordToken: request.body.pincode,
                resetPasswordExpires: { $gt: Date.now() },
            });
            if (user) {
                return response
                    .status(200)
                    .json({ message: successMessages.correctPincodeMessage });
            } else {
                return next({
                    status: 404,
                    message: errorMessages.wrongPincodeMessage,
                });
            }
        } catch (error) {
            log(error);
            return next({ message: errorMessages.passwordRecoveryError });
        }
    },
);

export default router;
