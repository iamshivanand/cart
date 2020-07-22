import React from 'react';
import CartItem from './CartItems';
class Cart extends React.Component{
     constructor () {
            //we need to also call superclass as we extends from super class react.components
            super();
            this.state = {
            products: [
                {
                    price: 999,
                    tittle: 'Phone',
                    Qty:5,
                    img:'',
                    id:1
                },
                {
                    price: 99,
                    tittle: 'Watch',
                    Qty:1,
                    img:'',
                    id:2
                },
                {
                    price: 9999,
                    tittle: 'Laptop',
                    Qty:3,
                    img:'',
                    id:3
                },
                {
                    price: 9999,
                    tittle: 'ipad',
                    Qty:2,
                    img:'',
                    id:4
                }
            ]
        }
    }
render(){
    const {products}= this.state;
    return(
        <div className="cart" >
          {products.map((product) => {
            return(
              <CartItem 
                product= {product} 
                key={product.id}
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
}

export default Cart;