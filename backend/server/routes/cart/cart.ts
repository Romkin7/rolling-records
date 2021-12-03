import { NextFunction, Request, Router, Response } from 'express';
import { Cart } from '../../models/cart/cart.model';
import { errorMessages } from '../../data/errorMessages';
import { log } from '../../utils/log';
import { setExportedCart } from '../../utils/cart';
import Product from '../../models/products/products.model';
import { connectRedis, disconnectRedis } from '../../conf/redisConf';
import { setUpCart } from '../../middleware/middlewareObj';
import { getTaxes } from '../../utils';
import { successMessages } from '../../data/successMessages';
const router = Router();

router
    .route('/')
    .get(
        setUpCart,
        async (request: Request, response: Response, next: NextFunction) => {
            try {
                const cartId = request.query.cartId;
                const redisClient = await connectRedis();
                redisClient.get(`cart-${cartId}`, (_err, existingCart) => {
                    const cart = new Cart(JSON.parse(existingCart));
                    const exportedCart = setExportedCart(cart);
                    disconnectRedis(redisClient);
                    return response.status(200).json({
                        cart: exportedCart,
                        message: successMessages.addToCartMessage,
                    });
                });
            } catch (error) {
                log(error);
                return next({ message: errorMessages.fetchCartError });
            }
        },
    )
    .post(
        setUpCart,
        async (request: Request, response: Response, next: NextFunction) => {
            try {
                const cartId = request.body.cartId;
                const totalQuantity = Number(request.body.itemsTotalQuantity);
                const product = await Product.findById(request.body.itemId);
                if (!product) {
                    return next({
                        status: 404,
                        message: errorMessages.productNotFoundError,
                    });
                }
                product.tax = getTaxes(
                    product.unit_price,
                    totalQuantity,
                    product.vat === 0.1 ? 10 * 100 : 24 * 100,
                );
                const redisClient = await connectRedis();
                redisClient.get(`cart-${cartId}`, (_err, existingCart) => {
                    const cart = new Cart(JSON.parse(existingCart));
                    const updatedCart = cart.addItem(product, totalQuantity);
                    const exportedCart = setExportedCart(updatedCart);
                    redisClient.set(
                        `cart-${cartId}`,
                        JSON.stringify(updatedCart),
                    );
                    disconnectRedis(redisClient);
                    return response.status(200).json({
                        cart: exportedCart,
                        message: successMessages.addToCartMessage,
                    });
                });
            } catch (error) {
                log(error);
                return next({ message: errorMessages.addToCartError });
            }
        },
    )
    .patch(
        setUpCart,
        async (request: Request, response: Response, next: NextFunction) => {
            try {
                const cartId = request.body.cartId;
                const product = await Product.findById(request.body.itemId);
                product.tax = getTaxes(
                    product.unit_price,
                    Number(request.body.itemsTotalQuantity),
                    product.vat === 0.1 ? 10 * 100 : 24 * 100,
                );
                const redisClient = await connectRedis();
                redisClient.get(`cart-${cartId}`, (_err, existingCart) => {
                    const cart = new Cart(JSON.parse(existingCart));
                    const updatedCart = cart.addItem(
                        product,
                        request.body.itemsTotalQuantity,
                    );
                    const exportedCart = setExportedCart(updatedCart);
                    redisClient.set(
                        `cart-${cartId}`,
                        JSON.stringify(updatedCart),
                    );
                    disconnectRedis(redisClient);
                    return response.status(200).json({
                        cart: exportedCart,
                        message: successMessages.addToCartMessage,
                    });
                });
            } catch (error) {
                log(error);
                next({ message: errorMessages.editCartItemsError });
            }
        },
    )
    .delete(
        setUpCart,
        async (request: Request, response: Response, next: NextFunction) => {
            try {
                const cartId = request.body.cartId;
                const redisClient = await connectRedis();
                redisClient.get(`cart-${cartId}`, (_err, existingCart) => {
                    const cart = new Cart(JSON.parse(existingCart));
                    const updatedCart = cart.removeItem(request.body.itemId);
                    const exportedCart = setExportedCart(updatedCart);
                    redisClient.set(
                        `cart-${cartId}`,
                        JSON.stringify(updatedCart),
                    );
                    return response.status(200).json({
                        cart: exportedCart,
                    });
                });
            } catch (error) {
                log(error);
                return next({ message: errorMessages.removeCartItemError });
            }
        },
    );

export default router;
