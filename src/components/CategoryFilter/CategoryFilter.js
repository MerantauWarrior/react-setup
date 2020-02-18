import React, {Component} from 'react';
import CategoryFilterItem from './CategoryFilterItem/CategoryFilterItem';

class CategoryFilter extends Component {

  state = {
    filterItems:[
      {
        name: 'Бесплатная доставка',
        slug: 'fDelivery',
        type: 'iosswitch',
        values: [
          'Да Нет'
        ],
        checked: false
      },
      {
        name: 'Срок отправки',
        slug: 'deliveryTime',
        type: 'radio',
        values: [
          'менее 3 дней',
          'от 3 до 7 дней',
          'более 7 дней',
          'более 14 дней'
        ],
        checked: 'от 3 до 7 дней'
      },
      {
        name: 'Характеристика 2',
        slug: 'customProperty',
        type: 'radio',
        values: [
          'Свойство 1',
          'Свойство 2',
          'Свойство 3'
        ],
        checked: 'Свойство 1'
      },
      {
        name: 'Характеристика 3',
        slug: 'customPropertyTwo',
        type: 'checkbox',
        values: [
          'Свойство 1',
          'Свойство 2',
          'Свойство 3',
          'Свойство 4'
        ],
        checked: [
          'Свойство 1',
          'Свойство 3'
        ]
      }
    ]
  };

  render() {
    // console.log(this.state.filterItems);

    let filterItems = this.state.filterItems.map((fItem, index) => {
      return(
        <CategoryFilterItem key={index} data={fItem} changed={this.props.changed}/>
      )
    });

    return (
      <div className="filter">
        <ul className="filter__nav">
          <li className="filter__nav-item"><a href="#" className="filter__nav-link">Все категории</a></li>
          <li className="filter__nav-item"><a href="#" className="filter__nav-link">Украшения для стен</a></li>
          <li className="filter__nav-item"><span className="filter__nav-link filter__nav-link_current">Картины</span>
          </li>
        </ul>
        {filterItems}
      </div>
    );
  }
}

export default CategoryFilter;