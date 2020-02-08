import React, {Component} from 'react';
import ReactPaginate from 'react-paginate';

import CategoryProducts from './CategoryProducts/CategoryProducts';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import {CategotyProducts} from '../../../dummyData';

class Category extends Component {
  state = {
    categoryProducts: [],
    filteredProducts: [],
    filters: [
      {price:''},
      {fDelivery:''},
      {deliveryTime:''},
      {customProperty:''},
      {customPropertyTwo:''}
    ],
    totalPages: 1,
    perPage: 8,
    currentPage: 0
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        categoryProducts: CategotyProducts.slice(0,this.state.perPage),
        totalPages: Math.ceil(CategotyProducts.length / this.state.perPage)
      });
    }, 500);
  }

  handlePaginationClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected*this.state.perPage);
    this.setState({
      currentPage: selected,
      categoryProducts: CategotyProducts.slice(offset,offset+this.state.perPage)
    });
  };

  render() {
    return (
      <React.Fragment>
        <CategoryFilter/>
        <div>
        {this.state.filteredProducts.length !== 0
          ? <CategoryProducts products={this.state.filteredProducts}/>
          : <CategoryProducts products={this.state.categoryProducts}/>
        }
        <ReactPaginate
          previousLabel={''}
          nextLabel={''}
          breakLabel={'...'}
          pageCount={this.state.totalPages}
          initialPage={this.state.currentPage}
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          onPageChange={this.handlePaginationClick}
          containerClassName={'pagination'}
          breakClassName={'pagination__break'}
          activeClassName={'pagination_active'}
          pageClassName={'pagination__item'}
          pageLinkClassName={'pagination__link'}
          activeLinkClassName={'pagination__link_active'}
          previousLinkClassName={'pagination__link-prev'}
          nextLinkClassName={'pagination__link-next'}
        />
        </div>
      </React.Fragment>
    );
  }
}

export default Category;