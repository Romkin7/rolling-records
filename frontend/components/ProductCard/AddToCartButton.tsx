import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';
import { getAddToCartButtonText } from '../../utils/utils';
import Button from '../Button/Button';
import { IProductCardProps } from './ProductCard';

const AddToCartButton: FC<IProductCardProps> = ({ product }) => {
    const dispatch = useDispatch();
    const handleAddToCart = (event: any, productId: string) => {
        event.preventDefault();
        dispatch(addToCart(productId, 1));
    };
    return (
        <Button
            handleClick={(event: any) => handleAddToCart(event, product._id)}
            type="button"
            disabled={product.total_quantity < 1 ? true : false}
            color={
                product.category === 'Tulevat' && product.total_quantity > 1
                    ? 'warning'
                    : product.category === 'Tilattavat' &&
                      product.total_quantity > 1
                    ? 'secondary'
                    : product.total_quantity < 1
                    ? 'disabled'
                    : 'purchase'
            }
        >
            {getAddToCartButtonText(product, true)}
        </Button>
    );
};

export default AddToCartButton;
