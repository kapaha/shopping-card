import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from 'context';
import { Button } from 'components';
import CartProducts from '../CartProducts/CartProducts';

const CartNotEmpty = () => {
    const { cart, cartTotalPrice, updateCart } = useCartContext();

    return (
        <div>
            <CartProducts cart={cart} updateCart={updateCart} />
            <p>Total: £{cartTotalPrice}</p>
            <Button as={Link} to="/checkout">
                Checkout
            </Button>
        </div>
    );
};

export default CartNotEmpty;
