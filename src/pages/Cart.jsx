import React from "react";
import emptyCart from "../assets/empty_cart.svg"
import { Link } from "react-router-dom";

function Cart({ cart, changeQuantity, removeItem }) 
{

  const total = () =>
  {
    let price = 0;
    cart.forEach((item) => 
      {
        price += +(item.salePrice || item.originalPrice) * item.quantity
      })
      return price
    }

  return (

    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="books__selected--top">
              <div className="cart__title">Cart</div>
            </div>
            <div className="cart__header">
              <span className="cart__book">Book</span>
              <span className="cart__quantity">Quantity</span>
              <span className="cart__total">Price</span>
            </div>
            <div className="cart__body">
              {cart.map((book) => {
                return (
                  <div className="cart__item">
                    <div className="cart__book">
                      <img
                        src={book.url}
                        alt=""
                        className="cart__book--img"
                      />
                      <div className="cart__book--info">
                        <span className="cart__book--title">
                          {book.title}
                        </span>
                        <span className="cart__book--price">${(book.salePrice || book.originalPrice).toFixed(2)}</span>
                        <button className="cart__book--remove" onClick={() => removeItem(book)}>Remove</button>
                      </div>
                    </div>
                    <div className="cart__quantity">
                      <input
                        type="number"
                        min={0}
                        max={99}
                        value={book.quantity}
                        className="cart__input"
                        onChange={(event) => changeQuantity(book, event.target.value)}
                      />
                    </div>
                    <div className="cart__total">
                      $
                      {
                        ((book.salePrice || book.originalPrice) * book.quantity).toFixed(2)
                      }
                    </div>
                  </div>
                );
              })}
            </div>
            { cart.length === 0 &&
            <div className="cart__empty">
              <img src={emptyCart} alt="" className="cart__empty--img" />
              <h2>You dont have any books in your cart!</h2>
              <Link to="/books">
              <button className="btn">Browse Books</button>
              </Link>
            </div>}
          </div>
          { cart.length > 0 &&
          (<div className="total">
            <div className="total__item total__sub-total">
              <span>Subtotal</span>
              <span>${(total()* 0.9).toFixed(2)}</span>
            </div>
            <div className="total__item total__tax">
              <span>Tax</span>
              <span>${(total()* 0.1).toFixed(2)}</span>
            </div>
            <div className="total__item total__price">
              <span>Total</span>
              <span>${total().toFixed(2)}</span>
            </div>
            <button
              className="btn btn__checkout no-cursor"
              onClick={() => alert(`I havent got around to doing this :(`)}
            >
              Proceed to checkout
            </button>
          </div>)}
        </div>
      </main>
    </div>
  );
}

export default Cart;
