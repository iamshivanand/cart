import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';

class App extends React.Component {
  constructor () {
    //we need to also call superclass as we extends from super class react.components
    super();
    this.state = {
    products:[],
    loading:true
}
this.db= firebase.firestore();
}

componentDidMount(){
  // firebase
  //   .firestore()
  //   .collection('products')
  //   .get()
  //   .then((snapshot) => {
  //     console.log('Query snapshot',snapshot);

  //     snapshot.docs.map((doc) => {
  //       console.log(doc.data());
  //     })

  //     const products= snapshot.docs.map((doc) => {
  //      const data= doc.data();

  //      data['id']= doc.id;

  //       return data;
  //     })
  //     this.setState({
  //       products,
  //       loading:false
  //     })
  //   })
//on snapshot function given below is called whenever 
// change happen in the database
 this.db
  .collection('products')
  //this is how we can query data from firebase
  // .where('price','==',999)
  // .where('tittle','==','bag')
  //if we want to sort our products according to price
  .orderBy('price','desc')
  .onSnapshot((snapshot) => {
    console.log('Query snapshot',snapshot);

    snapshot.docs.map((doc) => {
      console.log(doc.data());
    })

    const products= snapshot.docs.map((doc) => {
     const data= doc.data();

     data['id']= doc.id;

      return data;
    })
    this.setState({
      products,
      loading:false
    })
  })
}


handleIncreaseQuantity= (product)=>{
// console.log('Hey please increase the quantity ');
// console.log(product);
const {products}=this.state;
const index= products.indexOf(product);

// products[index].Qty+=1;

// this.setState({
//     // products: products
//     //as name of both the above variables are same so we
//     // use shorthand given below
//     products
// });

const docRef= this.db.collection('products').doc(products[index].id);
//using above we will get the refrence for that product with that particular id
// console.log( 'DocRef increase is: ', docRef);

docRef
  .update({
    Qty: products[index].Qty+1
  })
  .then(() => {
    console.log('Updated Succesfully');
  })
  .catch((error) => {
    console.log('Error',error);
  })
}




handleDecreaseQuantity= (product) =>{
const {products}= this.state;
const index= products.indexOf(product);

// if(products[index].Qty===1){
//     return;
// }
// products[index].Qty-=1;

// this.setState({
//     products
// });
const docRef= this.db.collection('products').doc(products[index].id);

if(products[index].Qty>1){
docRef
  .update({
    Qty: products[index].Qty-1
  })
  .then(() => {
    console.log('updated Succesfully');
  })
  .catch((error) => {
    console.log('Error', error);
  })
}
else{
  return;
}
}




handleDeleteProduct= (id) =>{
const {products}= this.state;

// const items= products.filter((item) => item.id !== id); //this will return the arrray of the products whose id doesnot match 

// this.setState({
//     products:items
// });
const docRef= this.db.collection('products').doc(id);
docRef
  .delete()
  .then(() => {
    console.log('Deleted Succesfully');
  })
  .catch((error) => {
    console.log('Error', error);
  })
}


getCartCount = () => {
  const{ products }= this.state;

  let count=0;
  products.forEach((product) => {
    count+= product.Qty;
    
  });
  // console.log('count is ',count);
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


addProduct= () =>{
  this.db
    .collection('products')
    .add({
      img:'',
      price:900,
      Qty:3,
      tittle:'washing machine'
    })//above .add function will return promise and then we call then
    //docRef in the below function point to our document
    .then((docRef) => {
      console.log('Product has been added',docRef);
    })
    .catch((error) => {
      console.log('error :', error);
    })
}



  render(){
    
    const { products ,loading } = this.state;
    return (
      <div className="App">
        <Navbar 
          count={this.getCartCount()}
        />
        {/* <button onClick={this.addProduct} style= {{padding:20, fontSize:20}}>Add a product</button> */}
        <Cart 
          products= {products}
          increaseQuantity= {this.handleIncreaseQuantity}
          decreaseQuantity= {this.handleDecreaseQuantity}
          deleteProduct= {this.handleDeleteProduct}
        />
        {/* here we are using conditional rendering  */}
        {loading && <h1>Loading the products....</h1>}
        <div style= {{fontSize:20,fontFamily:'cursive',padding:10}}>TOTAL: {this.getcartTotal()}

        </div>
      </div>
      
    );
  }
}
export default App;
