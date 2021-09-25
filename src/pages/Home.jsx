import React from 'react';
import Helmet from 'components/Helmet';
import HeroSlider from 'components/HeroSlider';

import heroSliderData from '../assets/fake-data/hero-slider'
import PolicyCard from 'components/PolicyCard';
import Section from 'components/Section';
import { SectionBody } from 'components/Section';
import Grid from 'components/Grid';

import policyData from '../assets/fake-data/policy';
import { Link } from 'react-router-dom';
import { SectionTitle } from 'components/Section';

import productData from '../assets/fake-data/products.js';
import ProductCard from 'components/ProductCard';

import banner from '../assets/images/banner.png';


function Home(props) {
  return (
    <Helmet title='Trang chủ'>
      {/* Begin hero slider */}
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={true}
        timeOut={3000}
      />
      {/* end hero slider */}
      {/* begin policy-card section */}
      <Section>
        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {
              policyData.map((item, index) =>
                <Link to='/policy' key={index}>
                  <PolicyCard
                    name={item.name}
                    description={item.description}
                    icon={item.icon}
                  />
                </Link>
              )
            }
          </Grid>
        </SectionBody>
      </Section>
      {/* end policy-card section */}

      {/* begin best selling section */}
      <Section>
        <SectionTitle>top sản phẩm bán chạy nhất trong tuần</SectionTitle>
        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={10}
          >
            {
              productData.getProduct(4).map((item, index) => (
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
      {/* end best selling section */}

      {/* begin new arrival section */}
      <Section>
        <SectionTitle>sản phẩm mới</SectionTitle>
        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={10}
          >
            {
              productData.getProduct(8).map((item, index) => (
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
      {/* end new arrival section */}

      {/* begin banner */}
      <Section>
        <SectionBody>
          <Grid
            col={1}
          >
            <img src={banner} alt="" />
          </Grid>
        </SectionBody>
      </Section>
      {/* end banner */}

      {/* begin popular product section */}
      <Section>
        <SectionTitle>sản phẩm phổ biến</SectionTitle>
        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={10}
          >
            {
              productData.getProduct(12).map((item, index) => (
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
      {/* end popular product section */}
    </Helmet>
  );
}

export default Home;