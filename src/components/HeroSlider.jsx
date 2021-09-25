import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';

HeroSlider.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.bool,
  auto: PropTypes.bool,
  timeOut: PropTypes.number,
};

const HeroSliderItem = props => (
  <div className={`hero-slider__item ${props.active ? 'active' : ''}`}>

    <div className="hero-slider__item__info">

      <div className={`hero-slider__item__info__title color-${props.item.color}`}>
        <span>{props.item.title}</span>
      </div>

      <div className="hero-slider__item__info__description">
        <span>{props.item.description}</span>
      </div>

      <div className="hero-slider__item__info__btn">
        <Link to={props.item.path}>
          <Button
            backgroundColor={props.item.color}
            animate={true}
            icon="bx bx-cart"
          >
            xem chi tiết
          </Button>
        </Link>
      </div>

    </div>

    <div className="hero-slider__item__image">
      <div className={`shape bg-${props.item.color}`}></div>
      <img src={props.item.img} alt="" />
    </div>

  </div>
)

function HeroSlider(props) {

  const { data, control, timeOut } = props;
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = useCallback(
    () => {
      const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
      setActiveSlide(index);
    },
    [activeSlide, data],
  )

  const prevSlide = () => {
    const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1;
    setActiveSlide(index);
  }

  useEffect(() => {
    const slideAuto = setInterval(() => {
      nextSlide();
    }, timeOut);
    return () => {
      clearInterval(slideAuto);
    }
  }, [nextSlide, props, timeOut])

  return (
    <div className='hero-slider'>
      {
        data.map((item, index) => (
          <HeroSliderItem key={index} item={item} active={index === activeSlide} />
        ))
      }

      {
        control ? (
          <div className="hero-slider__control">
            <div className="hero-slider__control__item" onClick={prevSlide}>
              <i className="bx bx-chevron-left"></i>
            </div>
            <div className="hero-slider__control__item">
              <div className="index">
                {activeSlide + 1} / {data.length}
              </div>
            </div>
            <div className="hero-slider__control__item" onClick={nextSlide}>
              <i className="bx bx-chevron-right"></i>
            </div>
          </div>
        ) : null
      }
    </div>
  );
};

export default HeroSlider;