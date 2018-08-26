import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/Webdev_data.json'
import Table from './Table';
import Chart from './Chart'

class App extends Component {

  state = {
    data: data.map(function(product){
      return product;
    })
  }


  render() {
    return (
      <div className="App">
        <Table 
         data={this.state.data[0].sales}
         header={[
           {name: 'WEEK ENDING'},
           {name: 'RETAIL SALES'},
           {name: 'WHOLESALE SALES'},
           {name: 'UNITS SOLD'},
           {name: 'RETAILER MARGIN'},
          ]} />

      </div>

      
    );
  }
}

export default App;
