import { NextFunction, Router, Request, Response } from 'express';
import { log } from '../../utils/log';
import generatePincode from 'generate-pincode';
import User from '../../models/users/users.model';
import { errorMessages } from '../../data/errorMessages';
import { sendSms } from '../../utils/smsServer';
import { sendPasswordRecoveryPincodeMail } from './templates';
import { successMessages } from '../../data/successMessages';
import { convertMobileNumber } from '../../utils';

const router = Router();

router
    .route('/')
    .post(async (request: Request, response: Response, next: NextFunction) => {
        try {
            const user = await User.findOne(request.body.email);
            console.log(request.body);
            user.resetPasswordToken = generatePincode(6);
            user.resetPasswordExpires = Date.now() + 3600000;
            if (user.contactBy === 'mobileNumber') {
                console.log('sms is on the way');
                sendSms({
                    sender: 'Rolling',
                    recipient: convertMobileNumber(user.mobileNumber),
                    content: `${user.name.firstname} ${user.name.lastname}, Lähetämme ohessa salasanan palautus pinkoodin. Salasanan palautus pinkoodi: ${user.resetPasswordToken}. Halutessanne voitte myös olla yhteydessä https://www.rollingrecords.fi/asiakaspalvelu asiakaspalveluumme. Ystävällisin Terveisin, Rolling Records puh: +358 (0)50 344 55 39, email: rollingrecords@outlook.com, www.rollingrecords.fi`,
                });
            } else {
                console.log(user.contactBy);
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
    });

export default router;
