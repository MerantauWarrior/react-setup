import React, {Component} from 'react';
import ProductItem from '../../../components/ProductItem/ProductItem';
import Select from '../../../components/UI/Select/Select';

import {CategotyProducts} from '../../../../dummyData';

class Seller extends Component {
  state = {
    products: [],
    sortValues: [
      {text: 'Популярности', value: 'popularity'},
      {text: 'Рейтингу', value: 'rating'},
      {text: 'Цене', value: 'price', default: true}
    ],
    sortDefault:'price',
    loaded: false
  };

  componentDidMount() {
    let defaultProducts;
    if(this.state.sortDefault !== '' || this.state.sortDefault !== null ||  this.state.sortDefault !== 'undefined'){
      defaultProducts = CategotyProducts.slice(0, 12).sort(this.comparatorDesc(this.state.sortDefault));
    }else {
      defaultProducts = CategotyProducts.slice(0, 12);
    }
    setTimeout(() => {
      this.setState({products: defaultProducts, loaded: true});
    }, 0);
  }

  comparatorDesc = (propName) => (a, b) => a[propName] == b[propName] ? 0 : a[propName] > b[propName] ? -1 : 1;

  sortHandler = (value) => {
    let sortedProducts = this.state.products.sort(this.comparatorDesc(value));
    this.setState({products: sortedProducts});
  };

  render() {
    return (
      <React.Fragment>
        <div className="line-title">
          <h2 className="title">Все товары магазина</h2>
          <div className="sorting">
            <div className="sorting__label">Сортровать по:</div>
            <div className="sorting__item">
              <Select options={this.state.sortValues} changed={this.sortHandler} />
            </div>
          </div>
        </div>
        <div className="share-products">
          {this.state.loaded === false
            ? <div className="spinner">Please wait products are loading now...</div>
            : this.state.products.map((product, index) => {
              return <ProductItem key={index} data={product}/>
            })}
        </div>
      </React.Fragment>
    );
  }
}

export default Seller;