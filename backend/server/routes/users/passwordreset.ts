import { NextFunction, Router, Request, Response } from 'express';
import { log } from '../../utils/log';
import generatePincode from 'generate-pincode';
import User from '../../models/users/users.model';
import { errorMessages } from '../../data/errorMessages';
import { sendSms } from '../../utils/smsServer';
import { sendPasswordRecoveryPincodeMail } from './templates';
import { successMessages } from '../../data/successMessages';

const router = Router();

router
    .route('/')
    .get(async (request: Request, response: Response, next: NextFunction) => {
        try {
            const user = await User.findOne(request.body.email);
            user.resetPasswordToken = generatePincode(6);
            user.resetPasswordExpires = Date.now() + 3600000;
            if (user.contactBy === 'sms') {
                sendSms({
                    sender: 'Rolling',
                    recipient: user.mobileNumber,
                    content: `${user.name.firstname} ${user.name.lastname}, Lähetämme ohessa salasanan palautus pinkoodin. Salasanan palautus pinkoodi: ${foundUser.resetPasswordToken}. Halutessanne voitte myös olla yhteydessä https://www.rollingrecords.fi/asiakaspalvelu asiakaspalveluumme. Ystävällisin Terveisin, Rolling Records puh: +358 (0)50 344 55 39, email: rollingrecords@outlook.com, www.rollingrecords.fi`,
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
    });

export default router;
