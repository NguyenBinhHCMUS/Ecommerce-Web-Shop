import React, { useEffect } from 'react';

import productData from '../assets/fake-data/products';
import Helmet from 'components/Helmet';
import Section from 'components/Section';
import { SectionBody } from 'components/Section';
import { SectionTitle } from 'components/Section';
import Grid from 'components/Grid';
import ProductCard from 'components/ProductCard';
import ProductView from 'components/ProductView';


function Product(props) {

  const product = productData.getProductBySlug(props.match.params.slug);
  console.log(product);

  const relatedProduct = productData.getProduct(8);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product])

  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle>Khám phá thêm</SectionTitle>
        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {
              relatedProduct.map((item, index) => (
                <ProductCard
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  title={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                />
              ))
            }
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
}

export default Product;