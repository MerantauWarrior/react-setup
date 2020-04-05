import React from 'react';

const PopularMaster = (props) => {
  let slides = props.data.slides.map((slide, index) => {
    return(
      <div key={index} className="popular-master-slider__slide ">
        <img src={slide} alt=""/>
      </div>
    )
  });
  return (
    <div className="popular-master">
      <div className="popular-master__info">
        <div className="popular-master-avatar">
          <img src={props.data.avatar} alt="user name"/>
        </div>
        <div className="popular-master-name">{props.data.name}</div>
        <div className="popular-master-rating">
          <img src="img/popular-rating.svg" alt="rating" className="popular-master-rating__icon"/>
          <div className="popular-master-rating__value">{props.data.rating}</div>
        </div>
        <div className="popular-master-description">{props.data.description}</div>
        <a href="#" className="popular-master-link">Все товары</a>
      </div>
      <div className="popular-master__gallery">
        <div className="popular-master__mobile-title">Галлерея работ</div>
        <div className="popular-master-slider">
          <div className="popular-master-slider__main">
            <img src={props.data.sliderMain} alt="aaa"/>
          </div>
          <div className="popular-master-slider__slides">
            {slides}
          </div>
        </div>
      </div>
      <div className="popular-master__mobile-title">Популярные товары продавца</div>
      <div className="popular-master__products">
        <div className="product">
          <div className="product__image">
            <div className="product-action">
              <img src="img/like.svg" alt="Like" className="product-action__img"/>
            </div>
            <img src="img/product-test.jpg" alt="prod name"/>
          </div>
          <div className="product__info">
            <a href="#" className="product__title">Портмоне мужское</a>
            <div className="product-master">
              <div className="product-master__img"><img src="img/product-test-master.jpg" alt="master name"/></div>
              <a href="#" className="product-master__name">Мария Машкина</a>
            </div>
            <div className="product-price">
              <div className="product-price__current">2 000 ₽</div>
              <div className="product-price__old">3 500 ₽</div>
            </div>
            <div className="product-rating">
              <img src="img/star-rating-outline.svg" alt="Stars" className="product-rating__icon"/>
              <div className="product-rating__value">4.9</div>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="product__image">
            <div className="product-action">
              <img src="img/like.svg" alt="Like" className="product-action__img"/>
            </div>
            <img src="img/product-test.jpg" alt="prod name"/>
          </div>
          <div className="product__info">
            <a href="#" className="product__title">Портмоне мужское</a>
            <div className="product-master">
              <div className="product-master__img"><img src="img/product-test-master.jpg" alt="master name"/></div>
              <a href="#" className="product-master__name">Мария Машкина</a>
            </div>
            <div className="product-price">
              <div className="product-price__current">2 000 ₽</div>
              <div className="product-price__old">3 500 ₽</div>
            </div>
            <div className="product-rating">
              <img src="img/star-rating-outline.svg" alt="Stars" className="product-rating__icon"/>
              <div className="product-rating__value">4.9</div>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="product__image">
            <div className="product-action">
              <img src="img/like.svg" alt="Like" className="product-action__img"/>
            </div>
            <img src="img/product-test.jpg" alt="prod name"/>
          </div>
          <div className="product__info">
            <a href="#" className="product__title">Портмоне мужское</a>
            <div className="product-master">
              <div className="product-master__img"><img src="img/product-test-master.jpg" alt="master name"/></div>
              <a href="#" className="product-master__name">Мария Машкина</a>
            </div>
            <div className="product-price">
              <div className="product-price__current">2 000 ₽</div>
              <div className="product-price__old">3 500 ₽</div>
            </div>
            <div className="product-rating">
              <img src="img/star-rating-outline.svg" alt="Stars" className="product-rating__icon"/>
              <div className="product-rating__value">4.9</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularMaster;
