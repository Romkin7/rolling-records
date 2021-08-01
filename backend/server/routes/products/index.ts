import { NextFunction, Router, Request, Response } from 'express';
import { ProductQuery } from '../../models/queries/productQueryClass';
import { validateMongoDBId } from '../../middleware/middlewareObj';
import Product from '../../models/products/products.model';
import { escapeRegex, setTitle } from '../../utils';
import { Pagination } from '../../models/pagination/pagination.model';
import { SortQuery } from '../../models/queries/sortQueryClass';

const router = Router();

router.get(
    '/',
    async (request: Request, response: Response, next: NextFunction) => {
        try {
            const products = await Product.find({ front_page: true })
                .sort({ front_page_update: -1, title: 1 })
                .limit(16);
            response.status(200).json({ products });
        } catch (error) {
            return next(error);
        }
    },
);

router.get(
    '/lp:t',
    async (request: Request, response: Response, next: NextFunction) => {
        try {
            const queryString =
                request.query && request.query.search
                    ? new RegExp(
                          escapeRegex(request.query.search as string),
                          'gi',
                      )
                    : null;
            const productQuery = new ProductQuery(
                request.query,
                queryString,
                false,
            ).filterQuery();
            const sort = new SortQuery(request.query).filterSortQuery();
            const productsCount = await Product.countDocuments(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                productQuery as any,
            );
            const pagination = new Pagination(request.query, productsCount, 28);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const products = await Product.find(productQuery as any)
                .skip((pagination.currentPage - 1) * pagination.perPage)
                .limit(pagination.perPage)
                .sort(sort);
            const title = setTitle(
                request.query.category as string,
                request.query.productType as string,
                !request.query.category
                    ? (request.query.genre as string)
                    : null,
                request.query.search as string,
                null,
                null,
            );
            return response.status(200).json({ products, title });
        } catch (error) {
            return next(error);
        }
    },
);

router.get(
    '/lp:t/:id',
    validateMongoDBId,
    async (request: Request, response: Response, next: NextFunction) => {
        try {
            const product = await Product.findById(request.params.id).populate({
                path: 'owner',
                model: 'User',
                populate: [
                    {
                        path: 'reviews',
                        model: 'Review',
                        populate: {
                            path: 'author',
                            model: 'User',
                        },
                    },
                    {
                        path: 'buyer_reviews',
                        model: 'Review',
                        options: {
                            limit: 6,
                        },
                        populate: {
                            path: 'author',
                            model: 'User',
                        },
                    },
                ],
            });
            console.log(product, request.params);
            return response.status(200).json({ product });
        } catch (error) {
            return next(error);
        }
    },
);

export default router;
