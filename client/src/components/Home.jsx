import React from 'react';
import $ from 'jquery';
import Cart from './Cart.jsx';
import Quantity from './Quantity.jsx';
import Rating from './Rating.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      quantity: 0,
      stereo_data: {},
      currentPrice: null,
      deepfryd_id: "81420",
    }

    this.setState = this.setState.bind(this);
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
  }

  componentDidMount () {
    let path = window.location.pathname.slice(9);
    $.get(`http://localhost:3002${path}`, (results) => {
      this.setState({
        stereo_data: results,
        currentPrice: results.current_price.toFixed(2),
        deepfryd_id: results.deepfryd_id,
      });
    });

  }

  plus () {
    let newValue = this.state.quantity;
    newValue++;
    this.setState({quantity: newValue});
  }

  minus () {
    if (this.state.quantity > 0) {
      let newValue = this.state.quantity;
      newValue--;
      this.setState({quantity: newValue});
    }
  }

  render () {
    const deepfryd_id = this.state.deepfryd_id;
    let productName;

    if (deepfryd_id === '81420') {
      productName = <h3>Bose  &reg; SoundTouch&reg; Series III Wireless Music System - Black </h3>;
    } else {
      productName = <h3>{this.state.stereo_data.product_name}</h3>;
    }

    return (
      <div className="app">
        <div className="prod-info col1">
          {productName}
          <span className="red-txt">Frys#: </span>
          <span className="prod-num">{this.state.deepfryd_id} </span>
          <span className="red-txt">Model: </span>
          <span className="prod-num">{this.state.stereo_data.model_number}</span>
          <Rating
            rating={this.state.stereo_data.average_rating}
          />
        </div>
        <div className="col2">
          <Quantity
          plus={this.plus}
          minus={this.minus}
          quantity={this.state.quantity}
          />
        </div>
        <div className="col3">
          <div className="price">${this.state.currentPrice}</div>
          <Cart />
        </div>
      </div>
    )
  }
}

export default App;