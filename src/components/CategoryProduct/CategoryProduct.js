import React from 'react';

const CategoryProduct = (props) => {
  return (
    <div className="card-product">
      <div className="product">
        <div className="product__image">
          <div className="product-action">
            <img src="img/like.svg" alt="Like" className="product-action__img"/>
          </div>
          <img src="img/product-test.jpg" alt={props.details.title}/>
        </div>
        <div className="product__info">
          <a href="#" className="product__title" title={props.details.title}>{props.details.title}</a>
          <div className="product-master">
            <div className="product-master__img"><img src="img/product-test-master.jpg" alt="master name"/></div>
            <a href="#" className="product-master__name">{props.details.author}</a>
          </div>
          <div className="product-price">
            <div className="product-price__current">{props.details.price} ₽</div>
            <div className="product-price__old">{props.details.oldPrice} ₽</div>
          </div>
          <div className="product-rating">
            <img src="img/star-rating-outline.svg" alt="Stars" className="product-rating__icon"/>
              <div className="product-rating__value">{props.details.rating}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
