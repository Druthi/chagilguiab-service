import React from 'react';
import $ from 'jquery';
import Cart from './Cart.jsx';
import Quantity from './Quantity.jsx';
import Rating from './Rating.jsx';
import Modal from 'react-modal';
import Checkout from './Checkout.jsx';

const customStyles = {
  content : {
    top: '10%',
    left: '30%',
    right: '30%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    margin: 0,
    padding:0
  }
};

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      quantity: 0,
      stereo_data: {},
      currentPrice: null,
      deepfryd_id: "81420",
      modalIsOpen: false
    }

    this.setState = this.setState.bind(this);
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
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
  toggleModal() {
    this.setState({modalIsOpen: !this.state.modalIsOpen});
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
          <Cart onClick={this.toggleModal} />
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
          >
          <Checkout
            quantity={this.state.quantity}
            price={this.state.currentPrice}
            prodName={productName}
            prodId={this.state.deepfryd_id}
            modelNum={this.state.stereo_data.model_number}
            quant={this.state.quantity}
            onClick={this.toggleModal}
          />
          </Modal>

        </div>
      </div>
    )
  }
}

export default App;