import { NextFunction, Request, Router, Response, request } from 'express';
import { Cart } from '../../models/cart/cart.model';
import { errorMessages } from '../../data/errorMessages';
import { log } from '../../utils/log';
import { setExportedCart } from '../../utils/cart';
import Product from '../../models/products/products.model';
const router = Router();

router
    .route('/')
    .get(async (request: Request, response: Response, next: NextFunction) => {
        try {
            const cart = new Cart(request.session.cart);
            const exportdCart = setExportedCart(cart);
            request.session.cart = cart;
            return response.status(200).json({ cart: exportdCart });
        } catch (error) {
            log(error);
            return next({ message: errorMessages.fetchCartError });
        }
    })
    .post(async (request: Request, response: Response, next: NextFunction) => {
        try {
            const product = await Product.findById(request.body.productId);
            const cart = new Cart(request.session.cart);
            const updatedCart = cart.addItem(
                product,
                request.body.itemsTotalQuantity,
            );
            const exportdCart = setExportedCart(updatedCart);
            request.session.cart = updatedCart;
            return response.status(200).json({ cart: exportdCart });
        } catch (error) {
            log(error);
            return next({ message: errorMessages.addToCartError });
        }
    });

export default router;
