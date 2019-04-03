import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Cart from './components/Cart.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      quantity: 0,
      stereo_data: {},
      currentPrice: null,
      previousPrice: null,
      deepfryd_id: "52810-201",
    }

    this.setState = this.setState.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
  }

  componentDidMount () {
    $.get(`/api/stereos/${this.state.deepfryd_id}`, (results) => {
      this.setState({stereo_data: results, currentPrice: results.current_price, previousPrice: results.previous_price});
    });
  }

  updateQuantity (quantity) {
    this.setState({quantity: quantity});
  }

  render () {
    return (
      <div>
        <h3>{this.state.stereo_data.product_name}</h3>
        <div>STARS WILL GO HERE</div>
        <p>Frys#: {this.state.deepfryd_id}</p>
        <Cart
          currentPrice={this.state.currentPrice}
          previousPrice={this.state.previousPrice}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));