import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './containers/Menu/Menu';
import PopularMasters from './containers/PopularMasters/PopularMasters';
import SellerProducts from './containers/Seller/SellerProducts/SellerProducts';
import SellerGallery from './containers/Seller/SellerGallery/SellerGallery';


ReactDOM.render(<Menu/>, document.getElementById("MenuList"));
if(document.getElementById('PopularMasters')){
  ReactDOM.render(<PopularMasters/>, document.getElementById('PopularMasters'));
}
if(document.getElementById('SellerProducts')){
  ReactDOM.render(<SellerProducts/>, document.getElementById('SellerProducts'));
}
if(document.getElementById('SellerGallery')){
  ReactDOM.render(<SellerGallery/>, document.getElementById('SellerGallery'));
}


//import Category from './containers/Category/Category';
// ReactDOM.render(<Category/>, document.getElementById('CategoryContent'));