import React from 'react';

 const Checkout = (props) => (
  <div className="checkout-container">
    <div className="checkout-top-panel">
      <button onClick={props.onClick}className="checkout-exit-x">X</button>
      <p>
      <span className="checkout-items-added">
      <span className="green-checkmark">&#10003;</span>
      {props.quantity} items added to your cart</span> <br />
      <span className="checkout-items-subtotal">Cart Subtotal: ${(Number(props.price) * props.quantity).toFixed(2)}</span>
      </p>
      <button onClick={props.onClick}className="cart-btn">Remove From Cart</button>
      <button onClick={props.onClick}className="cart-btn">Continue Shopping</button>
      <button onClick={props.onClick} className="checkout-btn">Checkout</button>
    </div>
    <div className="checkout-info">
      <span className="checkout-info-title">
        {props.prodName}
      </span>
      <span className="txt-checkout-price">
      ${(Number(props.price) * props.quantity).toFixed(2)}
      </span>
      <br />
      <span className="txt-checkout-nums">
      Frys: {props.prodId}  &nbsp;&nbsp;&nbsp;Model: {props.modelNum} <br /><br />Quantity: {props.quantity}
      </span>
    </div>
  </div>
)

 export default Checkout;