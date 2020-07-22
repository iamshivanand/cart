import React from 'react';
import CartItem from './CartItems';
class Cart extends React.Component{
render(){
    return(
        <div className="cart" >
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
        </div>
    );
}
}

export default Cart;