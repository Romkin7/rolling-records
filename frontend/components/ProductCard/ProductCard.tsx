import Link from 'next/link';
import React, { FC } from 'react';
import { IProduct } from '../../../@types';
import {
    getReleaseDate,
    setPriceTag,
    setProductsName,
} from '../../utils/utils';
import Picture from '../Picture/Picture';
import AddToCartButton from './AddToCartButton';
import styles from './ProductCard.module.scss';

export interface IProductCardProps {
    product: IProduct;
}

const ProductCard: FC<IProductCardProps> = ({ product }) => {
    return (
        <Link href="/lp:t/[id]" as={`/lp:t/${product._id}`}>
            <a className={styles.a + ' col-md-3 mt-2'}>
                <div className={styles.productCard}>
                    <div className={styles.header}>
                        <Picture
                            src={
                                product.cover_marketplace.secure_url ||
                                product.cover
                            }
                            alt={setProductsName(product) + ' kansikuva'}
                            title={setProductsName(product) + ' kansikuva'}
                        />
                    </div>
                    <aside
                        className={`${styles.aside} ${
                            product.category === 'Tarjoukset'
                                ? styles.coral
                                : styles.lapislazuli
                        }`}
                    >
                        <h3>{`${
                            product.category !== 'Lahjakortti'
                                ? product.category
                                : ''
                        } ${product.productType.toUpperCase()} ${setPriceTag(
                            product.discountedPrice || product.unit_price,
                        )}`}</h3>
                    </aside>
                    <div className={styles.body}>
                        <h3 className={styles.heading3}>
                            {setProductsName(product)}
                        </h3>
                        <p>{getReleaseDate(product)}</p>
                        <AddToCartButton product={product} />
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default ProductCard;
