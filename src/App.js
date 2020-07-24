import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor () {
    //we need to also call superclass as we extends from super class react.components
    super();
    this.state = {
    products: [
        {
          price: 999,
          tittle: 'Phone',
          Qty:5,
          img:'https://i.pinimg.com/564x/10/bc/18/10bc18bd1976274b1ac337ea2fd6137b.jpg',
          id:1
        },
        {
          price: 99,
          tittle: 'Watch',
          Qty:1,
          img:'https://i.pinimg.com/564x/3c/61/84/3c61840c88d19ebdd6c272b8fa72553a.jpg',
          id:2
        },
        {
          price: 9999,
          tittle: 'Laptop',
          Qty:3,
          img:'https://i.pinimg.com/564x/ca/4c/2a/ca4c2a36e8e2d429cf0e36df17fb38b8.jpg',
          id:3
        },
        {
          price: 9999,
          tittle: 'ipad',
          Qty:2,
          img:'https://i.pinimg.com/564x/f7/67/4a/f7674a33efd665d08d4a1004094267fb.jpg',
          id:4
        }
    ]
}
}
handleIncreaseQuantity= (product)=>{
console.log('Hey please increase the quantity ');
console.log(product);
const {products}=this.state;
const index= products.indexOf(product);

products[index].Qty+=1;

this.setState({
    // products: products
    //as name of both the above variables are same so we
    // use shorthand given below
    products
});
}
handleDecreaseQuantity= (product) =>{
const {products}= this.state;
const index= products.indexOf(product);

if(products[index].Qty===1){
    return;
}
products[index].Qty-=1;

this.setState({
    products
});
}
handleDeleteProduct= (id) =>{
const {products}= this.state;

const items= products.filter((item) => item.id !== id); //this will return the arrray of the products whose id doesnot match 

this.setState({
    products:items
});
}
getCartCount = () => {
  const{ products }= this.state;

  let count=0;
  products.forEach((product) => {
    count+= product.Qty;
    
  });
  console.log('count is ',count);
  return count;
}
getcartTotal= () => {
  const {products}= this.state;
   let totalPrice=0;
   //instead of for we may also use map
   products.forEach((product)=>{
     totalPrice+=product.Qty*product.price;
   });
   return totalPrice;
}

  render(){
    
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar 
          count={this.getCartCount()}
        />
        <Cart 
          products= {products}
          increaseQuantity= {this.handleIncreaseQuantity}
          decreaseQuantity= {this.handleDecreaseQuantity}
          deleteProduct= {this.handleDeleteProduct}
        />
        <div>TOTAL: {this.getcartTotal()}

        </div>
      </div>
      
    );
  }
}
export default App;
