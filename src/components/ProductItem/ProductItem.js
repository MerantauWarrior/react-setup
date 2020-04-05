import React from 'react';

const ProductItem = (props) => {
  return (
    <div className="card-product">
      <div className="product">
        <div className="product__image">
          <div className="product-action">
            <img src="img/like.svg" alt="Like" className="product-action__img"/>
          </div>
          <img src="img/product-test.jpg" alt={props.data.title}/>
        </div>
        <div className="product__info">
          <a href="#" className="product__title" title={props.data.title}>{props.data.title}</a>
          <div className="product-master">
            <div className="product-master__img"><img src="img/product-test-master.jpg" alt="master name"/></div>
            <a href="#" className="product-master__name">{props.data.author}</a>
          </div>
          <div className="product-price">
            <div className="product-price__current">{props.data.price} ₽</div>
            <div className="product-price__old">{props.data.oldPrice} ₽</div>
          </div>
          <div className="product-rating">
            <img src="img/star-rating-outline.svg" alt="Stars" className="product-rating__icon"/>
            <div className="product-rating__value">{props.data.rating}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
