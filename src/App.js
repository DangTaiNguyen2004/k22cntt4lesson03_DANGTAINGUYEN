import React, { Component } from 'react';
import DTNproductlist from './components/DTNproductlist';
import DTNproductApp from './components/DTNproductApp';

 class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : [
        { title: 'dang tai nguyen', id: 2210900052 ,status:1},
        { title: 'Cabbage', id: 1 ,status:1},
        { title: 'Garlic', id: 2 ,status:0},
        { title: 'Apple', id: 3 ,status:0},
        { title: 'Samsung', id: 4 ,status:1},
      ]
    }
  }
  dtnHanldSubmit = (param)=>{
    console.log("App:",param);
    let {products} = this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Đặng Tài Nguyên - render data - event form</h1>
        <hr/>
        <DTNproductlist renderProducts={this.state.products}/>
        <hr/>
        <DTNproductApp onSubmit = {this.dtnHanldSubmit}/>
      </div>
    );
  }
}

export default App;
