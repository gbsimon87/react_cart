import React from 'react'
import { useGlobalContext } from './context';

function Cart() {
  const { cart, clearCart, remove, increase, decrease, total } = useGlobalContext();

  return (
    <div className="cart-container">
      <div className="cart-items">
        {
          cart.map(cartItem => (
            <div key={cartItem.id} className="list-item">
              <div className="list-item__image-container">
                <img src={cartItem.img} alt="Showcase" />
              </div>
              <div className="list-item__details">
                <div>Samsung Galaxy S8</div>
                <div>$399.99</div>
                <div className="remove" onClick={() => remove(cartItem.id)}>remove</div>
              </div>
              <div className="list-item__count">
                <div className="increase" onClick={() => increase(cartItem.id)}>+</div>
                <div>{cartItem.amount}</div>
                <div className="decrease" onClick={() => decrease(cartItem.id)}>-</div>
              </div>
            </div>
          ))
        }
      </div>
      <div className="cart-total">
        <div>Total</div>
        <div>${total}</div>
      </div>
      <div className="cart-clear">
        <button className="cart-clear__button" onClick={clearCart}>CLEAR CART</button>
      </div>
    </div>
  )
}

export default Cart
