import Link from 'next/link';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { IProduct } from '../../../@types';
import { addToCart } from '../../store/actions/cartActions';
import {
    getAddToCartButtonText,
    getReleaseDate,
    setPriceTag,
    setProductsName,
} from '../../utils/utils';
import Button from '../Button/Button';
import Picture from '../Picture/Picture';
import styles from './ProductCard.module.scss';

interface IProductCardProps {
    product: IProduct;
}

const ProductCard: FC<IProductCardProps> = ({ product }) => {
    const dispatch = useDispatch();
    const handleAddToCart = (event: any, productId: string) => {
        event.preventDefault();
        dispatch(addToCart(productId));
    };
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
                            product.unit_price,
                        )}`}</h3>
                    </aside>
                    <div className={styles.body}>
                        <h3 className={styles.heading3}>
                            {setProductsName(product)}
                        </h3>
                        <p>{getReleaseDate(product)}</p>
                        <Button
                            handleClick={(event: any) =>
                                handleAddToCart(event, product._id)
                            }
                            type="button"
                            color={
                                product.category === 'Tulevat'
                                    ? 'warning'
                                    : product.category === 'Tilattavat'
                                    ? 'secondary'
                                    : product.total_quantity < 1
                                    ? 'disabled'
                                    : 'success'
                            }
                        >
                            {getAddToCartButtonText(product)}
                        </Button>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default ProductCard;
