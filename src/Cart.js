import React from 'react';
import CartItem from './CartItems';
const Cart= (props) => {
    const {products}= props;
    return(
        <div className="cart" >
          {products.map((product) => {
            return(
              <CartItem 
                product= {product} 
                key={product.id}
                increaseQuantity= {props.increaseQuantity}
                decreaseQuantity= {props.decreaseQuantity}
                deleteProduct= {props.deleteProduct}
                //we can basically pass anytting over here
                //like
                // func={() => console.log('this is a function passed as prop')}
                // isloggedin={false} boolean
                // jsx={<h1>Test</h1>} 
              />
            )
              //as react is not able to diffrentiate between the diffrent cartitems 
              // so we need id and this is not for prop purpose this is olny for the react purpose
          })}
        </div>
    );
}


export default Cart;