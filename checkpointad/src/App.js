import React, { Component } from 'react';
import './App.css';
import ProductTable from './components/ProductTable';
import { render } from 'react-dom';

class App extends Component {
  state = {
    Products:[
      {
        name:"Asus",
        price:1300,
        category:"laptops",
      },
      {
        name:"Nike",
        price:300,
        category:"Clothes",
      },
      {
        name:"Zen",
        price:10,
        category:"Clothes",
      }
    ]
  }
  render(){
  return (
    <div className="App">
     <ProductTable Products={this.state.Products} />
    </div>
  );
}}

export default App;
