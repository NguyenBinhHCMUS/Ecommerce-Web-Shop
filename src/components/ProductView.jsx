import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import numberWithCommas from 'utils/numberWithCommas';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from 'redux/shopping-cart/cartItemsSlice';
import size from 'assets/fake-data/product-size';

ProductView.propTypes = {
  product: PropTypes.object,
};

function ProductView(props) {

  const dispatch = useDispatch()



  let product = props.product;

  if (product === undefined) product = {
    price: 0,
    title: "",
    colors: [],
    size: [],
    img01: null,
    img02: null,
    description: ''

  }

  const [previewImg, setpreviewImg] = useState(product.image01);

  const [descriptionExpand, setDescriptionExpand] = useState(false);

  const [colorSelect, setColorSelect] = useState(undefined);

  const [sizeSelect, setSizeSelect] = useState(undefined);

  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (type) => {
    if (type === 'plus') {
      setQuantity(quantity + 1)
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  }

  useEffect(() => {
    setpreviewImg(product.image01)
    setColorSelect(undefined)
    setSizeSelect(undefined)
    setQuantity(1)
  }, [product])

  const check = () => {
    if (colorSelect === undefined) {
      alert('Vui lòng chọn màu sắc sản phẩm!')
      return false;
    }
    if (sizeSelect === undefined) {
      alert('Vui lòng chọn size sản phẩm!')
      return false;
    }
    return true;
  }

  const addToCart = () => {
    if (check()) {
      alert('Thêm thành công!')
      dispatch(addItem({
        slug: product.slug,
        price: product.price,
        color: colorSelect,
        size: sizeSelect,
        quantity: quantity
      }))
    }
  }

  const goToCart = () => {
    if (check()) {
      dispatch(addItem({
        slug: product.slug,
        price: product.price,
        color: colorSelect,
        size: sizeSelect,
        quantity: quantity
      }))

      props.history.push('/cart')
    }
  }

  return (
    <div className="product-view">
      <div className="product-view__images">
        <div className="product-view__images__list">
          <div className="product-view__images__list__item" onClick={() => setpreviewImg(product.image01)}>
            <img src={product.image01} alt="" />
          </div>
          <div className="product-view__images__list__item" onClick={() => setpreviewImg(product.image02)}>
            <img src={product.image02} alt="" />
          </div>
        </div>

        <div className="product-view__images__main">
          <img src={previewImg} alt="" />
        </div>

        <div className={`product-view__description ${descriptionExpand ? 'expand' : ''}`}>
          <div className="product-view__description__title">Chi tiết sản phẩm</div>
          <div className="product-view__description__content" dangerouslySetInnerHTML={{ __html: product.description }}></div>
          <div className="product-view__description__toggle">
            <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
              {
                descriptionExpand ? "Thu gọn" : "Xem thêm"
              }
            </Button>
          </div>
        </div>
      </div>

      <div className="product-view__info">
        <h1 className="product-view__info__title">
          {product.title}
        </h1>
        <div className="product-view__info__item">
          <span className="product-view__info__item__price">
            {numberWithCommas(product.price)}
          </span>
        </div>

        <div className="product-view__info__item">
          <div className="product-view__info__item__title">
            Màu sắc
          </div>
          <div className="product-view__info__item__list">
            {
              product.colors.map((item, index) => (
                <div key={index} className={`product-view__info__item__list__item ${colorSelect === item ? 'active' : ''}`} onClick={() => setColorSelect(item)}>
                  <div className={`circle bg-${item}`}></div>
                </div>
              ))
            }
          </div>
        </div>

        <div className="product-view__info__item">
          <div className="product-view__info__item__title">
            Kích cỡ
          </div>
          <div className="product-view__info__item__list">
            {
              product.size.map((item, index) => (
                <div key={index} className={`product-view__info__item__list__item ${sizeSelect === item ? 'active' : ''}`} onClick={() => setSizeSelect(item)}>
                  <span className="product-view__info__item__list__item__size">
                    {item}
                  </span>
                </div>
              ))
            }
          </div>
        </div>

        <div className="product-view__info__item">
          <div className="product-view__info__item__title">
            Số lượng
          </div>
          <div className="product-view__info__item__quantity">
            <div className="product-view__info__item__quantity__btn" onClick={() => updateQuantity('')}>
              <i className="bx bx-minus"></i>
            </div>

            <div className="product-view__info__item__quantity__input">
              {quantity}
            </div>

            <div className="product-view__info__item__quantity__btn" onClick={() => updateQuantity('plus')}>
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>

        <div className="product-view__info__item">
          <Button onClick={() => addToCart()}>thêm vào giỏ</Button>
          <Button onClick={() => goToCart()}>mua ngay</Button>
        </div>
      </div>
      <div className={`product-view__description mobile ${descriptionExpand ? 'expand' : ''}`}>
        <div className="product-view__description__title">Chi tiết sản phẩm</div>
        <div className="product-view__description__content" dangerouslySetInnerHTML={{ __html: product.description }}></div>
        <div className="product-view__description__toggle">
          <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
            {
              descriptionExpand ? "Thu gọn" : "Xem thêm"
            }
          </Button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(ProductView);