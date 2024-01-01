import logo from './logo.svg';
import './App.css';
import H from "./H";
import second from "./second";
import { Button } from 'reactstrap';
import Navbar from './Navbar';
//import { Button } from 'bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import ProductList from './ProductList';
import Compenent from './Compenent';
import React, { useState } from "react";
import Foot from './Foot';
import AddNew from './AddNew';

function App() {


  const product = [
    {
      Price: 5000,
      Name: "Stock market course",
      Quantity: 0,
    },
    {

      Price: 10000,
      Name: "Options  course",
      Quantity: 0,
    },
    {

      Price: 6000,
      Name: "Futures  course",
      Quantity: 0,

    }


  ]
    ;

  //
  // const btnHandle = () => {
  //   toast.success("Success");

  let [productList, setproductList] = useState(product);
  let [TotalAmount, setTotalAmount] = useState(0);

  const IncrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = TotalAmount;
    newProductList[index].Quantity++;
    newTotalAmount = newTotalAmount + newProductList[index].Price;

    setTotalAmount(newTotalAmount);
    setproductList(newProductList);
  };

  const DecrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = TotalAmount;
    if (newProductList[index].Quantity > 0) {
      newProductList[index].Quantity--

      newTotalAmount = newTotalAmount - newProductList[index].Price
    };

    setTotalAmount(newTotalAmount);
    setproductList(newProductList);
  };


  const Reset = () => {
    let newProductList = [...productList];
    newProductList.map((product) => {
      product.Quantity = 0;
    });
    setproductList(newProductList);
    setTotalAmount(0);
  };

  const RemoveItem = (index) => {
    let newProductList = [...productList];
    console.log(newProductList);
    newProductList.splice(index, 1);
    setproductList(newProductList);

  }


    const AddItem = (Name,Price) => {
      let newProductList = [...productList];
      newProductList.push({
        Price: Price,
      Name: Name,
      Quantity: 0,})
    setproductList(newProductList);

      







  }



  return (
    <>
      <Navbar />
      <AddNew  AddItem={AddItem}/>


      <div className='container mt-5'>
        <ProductList productList={productList} IncrementQuantity={IncrementQuantity} DecrementQuantity={DecrementQuantity} RemoveItem={RemoveItem} />
      </div>

      <Foot TotalAmount={TotalAmount} Reset={Reset} />
      {/* <div style={{background:"green",textAlign:'center'}}>
<ToastContainer/>
   <h1 style={{ background:'Yellow'}}>Home Page </h1>
   <h1>Welcome to Anmol Stock market masterclass</h1>
   <p>Here we learn all about the markets</p>
   <Button color="primary" onClick={btnHandle}>Click to enroll in various market courses</Button>


  <H name="Options Course" title="ALL about Options"/>
  <Button color="primary" onClick={btnHandle}>Click to enroll in various Options courses</Button>



  <H name="Equity Course" title="ALL about Stocks"/>
  <Button color="primary" onClick={btnHandle}>Click to enroll in various Equity courses</Button>

  <H name="Futures Market" title="ALL about Futures market"/> 
  <Button color="primary" onClick={btnHandle}>Click to enroll in various Futures courses</Button> */}



      {/* </></div> */}
    </>
  )
}

export default App;
