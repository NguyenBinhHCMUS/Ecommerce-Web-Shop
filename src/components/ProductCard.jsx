import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';
import numberWithCommas from 'utils/numberWithCommas';
import { useDispatch } from 'react-redux';
import { set } from 'redux/product-modal/productModalSlice';

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img01: PropTypes.string.isRequired,
  img02: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

function ProductCard(props) {
  const { title, price, img01, img02, slug } = props;

  const dispatch = useDispatch()
  return (
    <div className="product-card">
      <Link to={`/catalog/${slug}`}>
        <div className="product-card__image">
          <img src={img01} alt="" />
          <img src={img02} alt="" />
        </div>
        <h3 className="product-card__title">{title}</h3>
        <div className="product-card__price">
          {numberWithCommas(price)}
          <span className="product-card__price__old">
            <del>{numberWithCommas(399000)}</del>
          </span>
        </div>
      </Link>
      <Button
        size="sm"
        icon="bx bx-cart"
        animate={true}
        onClick={() => dispatch(set(slug))}
      >
        chọn mua
      </Button>
    </div>
  );
}

export default ProductCard;