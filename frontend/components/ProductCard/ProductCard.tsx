import Link from 'next/link';
import React, { FC } from 'react';
import { IProduct } from '../../types';
import { setProductsName } from '../../utils/utils';
import Picture from '../Picture/Picture';
import styles from './ProductCard.module.scss';

interface IProductCardProps {
    product: IProduct;
}

const ProductCard: FC<IProductCardProps> = ({ product }) => {
    return (
        <Link href="/lp:t/[id]" as={`/lp:t/${product._id}`}>
            <a className={styles.productCard + ' col-md-3 mt-2'}>
                <div className="productCard__header">
                    <Picture
                        src={
                            product.cover_marketplace.secure_url ||
                            product.cover
                        }
                        alt={setProductsName(product) + ' kansikuva'}
                        title={setProductsName(product) + ' kansikuva'}
                    />
                </div>
                <div className="productCard__body">
                    <h3 className={styles.heading3}>
                        {setProductsName(product)}
                    </h3>
                </div>
            </a>
        </Link>
    );
};

export default ProductCard;
