import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import numberWithCommas from 'utils/numberWithCommas';
import { removeItem, updateItem } from 'redux/shopping-cart/cartItemsSlice';


CartItems.propTypes = {
  item: PropTypes.object,
};

function CartItems(props) {

  const dispatch = useDispatch()

  const [item, setItem] = useState(props.item)
  const [quantity, setQuantity] = useState(props.item.quantity)

  useEffect(() => {
    setItem(props.item)
    setQuantity(props.item.quantity)
  }, [props.item])

  const updateQuantity = (opt) => {
    if (opt === '+') dispatch(updateItem({ ...item, quantity: quantity + 1 }))
    if (opt === '-') dispatch(updateItem({ ...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1 }))
  }

  const removeCartItem = () => {
    dispatch(removeItem(item))
  }
  return (
    <div className="cart__list__item">
      <div className="cart__list__item__image">
        <img src={item.product.image01} alt="" />
      </div>

      <div className="cart__list__item__info">
        <div className="cart__list__item__info__title">
          <Link to={`/catalog/${item.slug}`}>
            {`${item.product.title} - ${item.color} - ${item.size}`}
          </Link>
        </div>
        <div className="cart__list__item__info__price">
          {numberWithCommas(Number(item.product.price))}
        </div>
        <div className="cart__list__item__info__quantity">

          <div className="cart__list__item__info__quantity__btn" onClick={() => updateQuantity('-')}>
            <i className="bx bx-minus"></i>
          </div>

          <div className="cart__list__item__info__quantity__input">
            {quantity}
          </div>

          <div className="cart__list__item__info__quantity__btn" onClick={() => updateQuantity('+')}>
            <i className="bx bx-plus"></i>
          </div>

        </div>

        <div className="cart__list__item__info__del" onClick={() => removeCartItem()}>
          <i className="bx bx-trash"></i>
        </div>
      </div>
    </div>
  );
}

export default CartItems;