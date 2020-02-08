import React, {Component} from 'react';

import CategoryProduct from '../../../components/CategoryProduct/CategoryProduct';

class CategoryProducts extends Component {
  render() {
    let products = this.props.products.map((product, index) => {
      return(
        <CategoryProduct key={index} details={product} />
      )
    });

    return (
      <div className="category__products">
        {products}
      </div>
    );
  }
}

export default CategoryProducts;