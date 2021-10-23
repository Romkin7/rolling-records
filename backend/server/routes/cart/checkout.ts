import { NextFunction, Router, Request, Response } from 'express';
import { log } from '../../utils/log';
import { setUpCart } from '../../middleware/middlewareObj';
import { errorMessages } from '../../data/errorMessages';
import DeliveryCost from '../../models/deliverycosts/deliverycosts.model';
import { DeliveryCostQuery } from '../../models/queries/deliveryCostClass';
import { Cart } from '../../models/cart/cart.model';
import { connectRedis, disconnectRedis } from '../../conf/redisConf';
import { setDeliveryCostType, validateCampaignPrice } from '../../utils';
import { ICartItem, DeliveryCostTypes } from '../../../../@types';
import { setExportedCart } from '../../utils/cart';
import { successMessages } from '../../data/successMessages';

const router = Router();

router.post(
    '/customer',
    setUpCart,
    async (request: Request, response: Response, next: NextFunction) => {
        try {
            const cartId = request.body.cartId;
            const redisClient = await connectRedis();
            redisClient.get(`cart-${cartId}`, async (_err, existingCart) => {
                const cart = new Cart(JSON.parse(existingCart));
                const updatedCart = cart.addCustomer(request.body.checkoutform);
                const marketingCampaign =
                    request.body.freeShipmentCampaign ||
                    request.body.doublePointsCampaign;
                const cartItems = cart.itemsToArray();
                const deliveryCostTypes: DeliveryCostTypes[] = cart
                    .itemsToArray()
                    .map((item: ICartItem) => {
                        return item.deliveryCostType;
                    });
                const productTypes = cart
                    .itemsToArray()
                    .map((item: ICartItem) => {
                        return item.productType;
                    });
                const deliveryCostQuery = new DeliveryCostQuery({
                    country: request.user
                        ? request.user.completeAddress.country
                        : cart.customer
                        ? cart.customer.country
                        : '',
                    formats: setDeliveryCostType(
                        cart,
                        deliveryCostTypes,
                        productTypes,
                    ),
                    range: cart.getTotalQuantity(),
                    campaign: validateCampaignPrice(
                        marketingCampaign,
                        cartItems,
                    ),
                });
                const deliveryCosts = await DeliveryCost.find(
                    deliveryCostQuery as any,
                ).sort({
                    unit_price: -1,
                    name: -1,
                });
                const exportedCart = setExportedCart(updatedCart);
                redisClient.set(`cart-${cartId}`, JSON.stringify(updatedCart));
                disconnectRedis(redisClient);
                return response.status(200).json({
                    deliveryCosts,
                    cart: exportedCart,
                    message: successMessages.customerAddedToCart,
                });
            });
        } catch (error) {
            log(error);
            return next({ message: errorMessages.deliveryCostToCartError });
        }
    },
);

export default router;
