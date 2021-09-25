import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from 'redux/product-modal/productModalSlice';

import productData from "../assets/fake-data/products";
import Button from './Button';
import ProductView from './ProductView';

function ProductViewModal(props) {

  const productSlug = useSelector((state) => state.productModal.value)

  const dispatch = useDispatch()

  const [product, setProduct] = useState(undefined)

  // const product = productData.getProductBySlug("ao-thun-dinosaur-14");

  useEffect(() => {
    setProduct(productData.getProductBySlug(productSlug))
  }, [productSlug])

  console.log(product)
  return (
    <div className={`product-view-modal ${product === undefined ? '' : 'active'}`}>
      <div className="product-view-modal__content">
        <ProductView product={product} />
        <div className="product-view-modal__content__close">
          <Button
            size="sm"
            onClick={() => dispatch(remove())}
          >Đóng</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductViewModal;