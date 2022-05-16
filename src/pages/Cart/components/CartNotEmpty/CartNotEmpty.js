import React from 'react';
import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa';
import { NumberInput, IconButton } from 'components';
import {
    ProductsContainer,
    Product,
    ProductImage,
    ProductName,
    ProductQuantity,
    ProductPrice,
} from './CartNotEmpty.styled';

const CartNotEmpty = ({ cart, updateCart }) => {
    return (
        <ProductsContainer>
            {cart.map((product) => {
                return (
                    <Product key={product.title}>
                        <ProductImage src={product.image} />
                        <ProductName>{product.title}</ProductName>
                        <ProductQuantity>
                            <IconButton onClick={() => updateCart(product, -1)}>
                                <FaMinus />
                            </IconButton>
                            <NumberInput
                                inputId="quantity"
                                value={product.quantity}
                                min="1"
                                max="40"
                                step="1"
                            />
                            <IconButton onClick={() => updateCart(product, 1)}>
                                <FaPlus />
                            </IconButton>
                        </ProductQuantity>
                        <ProductPrice>£{product.price}</ProductPrice>
                        <IconButton>
                            <FaTimes
                                onClick={() =>
                                    updateCart(product, -product.quantity)
                                }
                            />
                        </IconButton>
                    </Product>
                );
            })}
        </ProductsContainer>
    );
};

export default CartNotEmpty;
