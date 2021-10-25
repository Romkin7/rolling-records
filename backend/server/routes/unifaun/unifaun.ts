import { NextFunction, Router, Request, Response } from 'express';
import axios from 'axios';
import User from '../../models/users/users.model';
import {
    authorize,
    hasOwnershipForAccount,
} from '../../middleware/middlewareObj';
import { parseString } from 'xml2js';
import { Cart } from '../../models/cart/cart.model';
import { connectRedis } from '../../conf/redisConf';
import { IPostOffice } from '../../../../@types';
import { errorMessages } from '../../data/errorMessages';
import { log } from '../../utils/log';
const router = Router();

// this route will send request to unifaun and get the nearby post offices
router.get(
    '/get-nearby-post-offices',
    async (request: Request, response: Response, next: NextFunction) => {
        try {
            const cartId = request.query.cartId;
            const redisClient = await connectRedis();
            redisClient.get(`cart-${cartId}`, async (_err, existingCart) => {
                const cart = new Cart(JSON.parse(existingCart));
                // first get the user zipcode
                let user;
                if (request.user) {
                    user = await User.findById(
                        request.user.id,
                        'completeAddress.zipcode',
                    );
                } else {
                    user = null;
                }
                if (!user && !cart.customer) {
                    return response.status(500).json({
                        message: errorMessages.zipcodeMissing,
                    });
                }
                const zipcode =
                    user !== null
                        ? user.completeAddress.zipcode
                        : cart.customer.zipcode;
                const type =
                    request.body.type !== undefined
                        ? request.body.type
                        : 'POSTI';
                // make the url ready with the username and password
                const username = process.env.UNIFAUN_USERNAME;
                const password = process.env.UNIFAUN_PASSWORD;
                var url =
                    'https://' +
                    username +
                    ':' +
                    password +
                    `@www.unifaunonline.se/ufoweb-prod-201808211103/rs-extapi/v1/addresses/agents?countryCode=FI&type=${type}&zip=${zipcode}`;

                // send the request to the API
                axios
                    .get(url)
                    .then((res: any) => {
                        if (res.data) {
                            // make the data ready to be sent to client
                            var postOffices = res.data.map(
                                (postOffice: IPostOffice) => {
                                    return {
                                        id: postOffice.id,
                                        name: postOffice.name,
                                        address: postOffice.address1,
                                        city: postOffice.city,
                                        zipcode: postOffice.zipcode,
                                    };
                                },
                            );
                            // finally send the data to client
                            return response.status(200).json({ postOffices });
                        } else {
                            return response.status(400).json({
                                message: errorMessages.wrongZipcode,
                            });
                        }
                    })
                    .catch((error) => {
                        log(error);
                        return response
                            .status(400)
                            .json({ message: errorMessages.wrongZipcode });
                    });
            });
        } catch (error) {
            log(error);
            return next({ message: errorMessages.unifaunConnectionError });
        }
    },
);
// get statusevents
router.get(
    '/unifaun/profiili/:id/trackandtrace',
    authorize,
    hasOwnershipForAccount,
    async (request: Request, response: Response, next: NextFunction) => {
        // make the url ready with the username and password
        var username = process.env.UNIFAUN_USERNAME;
        let orderNo = request.query.orderno;
        const url = `https://smartship.unifaun.com/ext.posti.fi.fi.track?apiKey=${username}&order=${orderNo}`;
        axios
            .get(url)
            .then((res: any) => {
                parseString(res.data, function (err: any, result: any) {
                    return response.status(200).json(result);
                });
            })
            .catch((error) => {
                log(error);
                return next({
                    status: 500,
                    message: errorMessages.unifaunConnectionError,
                });
            });
    },
);

export default router;
