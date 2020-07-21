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
                        <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/864/864378.svg" />
                        <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/972/972575.svg" />
                        <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/3096/3096687.svg" />

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