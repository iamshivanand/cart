import React from 'react';

class cartItem extends React.Component{
    //adding the state
    constructor () {
        //we need to also call superclass as we extends from super class react.components
        super();
        this.state = {
            price: 999,
            tittle: 'Phone',
            Qty:1,
            img:''
        }
        // this.increaseQuantity= this.increaseQuantity.bind(this)
        //this is the another way of binding the this so that this should not be undefined
        //but this might also get pretty messy so instead we use arrow function as arrow function themself bind  this 

    }
    //below we use the arrow function for the binding purpose 
    // so whereever we find any problem regarding the binding then we can use the arrow function to rsolve any such problem
    
    increaseQuantity = () => {
        // console.log("this.state",this.state);
        console.log("new Quantity", ++this.state.Qty);
    }
    decreaseQuantity(){
        console.log("decrease");
    }
    deleteProduct(){
        console.log("Delete");
    }
    render(){
        const {price, tittle, Qty }= this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                  
                </div>
                <div className="right-block">
                    <div style={{fontFamily:"cursive", fontSize:20}}>{tittle}</div>
                    <div>RS {price}</div>
                    <div>Qty : {Qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img
                            alt="increase" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/864/864378.svg" 
                            onClick={this.increaseQuantity}
                            // onClick={this.increaseQuantity.bind(this)}
                            //we use bind because otherwise when we are calling increaseQuantity the value of this is lost 
                            //so we need to bind the value of this wit the function otherwise it will through an error as this is not defined
                            //instead of binding over over here we can aslo bind it in constructor when there are multiple event handlers


                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/972/972575.svg" 
                            onClick= {this.decreaseQuantity}
                        />
                        <img 
                            alt="delete"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/3096/3096687.svg" 
                            onClick= {this.deleteProduct}
                        />

                    </div>
                </div>
            </div>
        );
    }
}
const styles= {
    image: {
        height:110,
        width:100,
        borderRadius:4,
        backgroundColor:'grey'
    }
}
export default cartItem;