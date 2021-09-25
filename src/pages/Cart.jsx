import React, { useState, useEffect } from 'react';
import productData from 'assets/fake-data/products';
import { useDispatch, useSelector } from 'react-redux';
import Helmet from 'components/Helmet';
import numberWithCommas from 'utils/numberWithCommas';
import Button from 'components/Button';
import { Link } from 'react-router-dom';
import CartItems from 'components/CartItems';

function Cart(props) {

  const cartItems = useSelector((state) => state.cartItems.value)

  const dispatch = useDispatch()

  console.log(productData.getCartItemsDetail(cartItems))

  const [cartProduct, setCartProduct] = useState(productData.getCartItemsDetail(cartItems))

  const [totalProduct, setTotalProduct] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    setCartProduct(productData.getCartItemsDetail(cartItems))
    setTotalProduct(cartItems.reduce((total, item) => total + (Number(item.quantity)), 0))
    setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
  }, [cartItems])

  console.log(cartProduct)
  return (
    <Helmet title='Giỏ hàng'>
      <div className="cart">
        <div className="cart__info">

          <div className="cart__info__txt">
            <p>
              Bạn đang có {totalProduct} sản phẩm trong giỏ hàng
            </p>
            <div className="cart__info__txt__price">
              <span>Thành tiền</span>
              <span>{numberWithCommas(totalPrice)}</span>
            </div>
          </div>

          <div className="cart__info__btn">
            <Button size="block">đặt hàng</Button>
            <Link to='/catalog'>
              <Button size="block">tiếp tục mua hàng</Button>
            </Link>
          </div>
        </div>

        <div className="cart__list">
          {cartProduct.map((item, index) => (
            <CartItems key={index} item={item} />
          ))}
        </div>
      </div>
    </Helmet>
  );
}

export default Cart;