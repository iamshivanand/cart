import React from 'react';

class CartItem extends React.Component{
    //all the details related to state is shifted below in the form of comment
    render(){
        const {price, tittle, Qty }= this.props.product;
        const {product,increaseQuantity,decreaseQuantity,deleteProduct}= this.props;
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
                            onClick={() => increaseQuantity(product)}
                            // onClick={this.increaseQuantity.bind(this)}
                            //we use bind because otherwise when we are calling increaseQuantity the value of this is lost 
                            //so we need to bind the value of this wit the function otherwise it will through an error as this is not defined
                            //instead of binding over over here we can aslo bind it in constructor when there are multiple event handlers


                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/972/972575.svg" 
                            onClick= {() => decreaseQuantity(product)}
                        />
                        <img 
                            alt="delete"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/3096/3096687.svg" 
                            onClick= {() => deleteProduct(product.id)}
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
export default CartItem;






//adding the state
    // constructor () {
    //     //we need to also call superclass as we extends from super class react.components
    //     super();
    //     this.state = {
    //         price: 999,
    //         tittle: 'Phone',
    //         Qty:1,
    //         img:''
    //     }
        // this.increaseQuantity= this.increaseQuantity.bind(this)
        //this is the another way of binding the this so that this should not be undefined
        //but this might also get pretty messy so instead we use arrow function as arrow function themself bind  this 


            //in some cases like when we are making ajax call or if we are using promises so inside these react wont do 
            //batching for us  state call will act like syncronus call 
            // this.testing();
    // }
    // testing(){
    //     const promise= new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         },5000);
    //     })
    //     promise.then(() => {
    //         //here setstate acts like synchronus call
    //         this.setState({Qty: this.state.Qty+10});
    //         this.setState({Qty: this.state.Qty+10});
    //         this.setState({Qty: this.state.Qty+10});
            
    //         //as we know we cannot acess the state just below the above statement as it will not reflect the 
    //         //updated changes as it was asynchronus
    //         //but here we can as this is synchronus call
    //         console.log('state', this.state);
    //     });
    // }
    //below we use the arrow function for the binding purpose 
    // so whereever we find any problem regarding the binding then we can use the arrow function to rsolve any such problem

    // increaseQuantity = () => {
    //     // console.log("this.state",this.state);
    //     // console.log("new Quantity", ++this.state.Qty);
    //     //react doesnot know that we are increasing the value so it is not rerendering the value
    //     //we need to tell react that we are increasing the value and this is needed to be rerendered 
    //     //so we need to use the function called setstate which comes fro the componennt part of the react 
    //     //setstate form 1 (by just giving an object)
    //     //using setstate we can trigger or rerender our updated value
    //     // this.setState({
    //     //     Qty: this.state.Qty+1
    //     // });
    //     //setstate form 2
    //     //if there is the requirement of previous state then we use form2 otherwise we use form 1
    //     //setstate calls are asynchronus this means that we dont know when is this call ending 
    //     //so we add callback to the both the forms of setstate and this call back will be executed after completion of the setstate


    //     this.setState((prevState) => {
            
    //       return{
    //           Qty: prevState.Qty +1
              
    //     }
    // }, () =>{
    //     //this is the callback function and will be executed only after completion of above function
    //     //
    //     console.log('this.state',this.state);
    // });
    // }





    // //using arrow function to bind this 
    // decreaseQuantity = () => {
    //     const { Qty } =this.state;
    //     if(Qty === 1){
    //         return;
    //     }
    //     // console.log("decrease");
    //     //using the setstate form2 
    //     this.setState((prevState) => {
    //         return{
    //             Qty: prevState.Qty -1
    //         }    
    //     });
    // }
    // deleteProduct(){
    //     console.log("Delete");
    // }