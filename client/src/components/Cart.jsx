import React from 'react';
import Quantity from './Quantity.jsx';

const Cart = (props) => (
<div>
<button className="btn" onClick={props.onClick}><i className="fas fa-shopping-cart"></i> Add To Cart</button>

</div>
);

export default Cart;