import React, {Component} from 'react';

class CategoryFilter extends Component {
  render() {
    return (
      <div className="filter">
        <ul className="filter__nav">
          <li className="filter__nav-item"><a href="#" className="filter__nav-link">Все категории</a></li>
          <li className="filter__nav-item"><a href="#" className="filter__nav-link">Украшения для стен</a></li>
          <li className="filter__nav-item"><span className="filter__nav-link filter__nav-link_current">Картины</span></li>
        </ul>
        <div className="filter__item">
          <div className="filter__title">Бесплатная доставка</div>
          <label htmlFor="iosradio1" className="filter-label">
            <input type="checkbox" name="checkboxios" id="iosradio1" className="inp--filter-check" defaultChecked/>
              <span className="filter-switch" data-on="Да" data-off="Нет"></span>
          </label>
        </div>
        <div className="filter__item">
          <div className="filter__title">Срок отправки</div>
          <label htmlFor="radio1" className="filter-label">
            <input type="radio" name="radio" id="radio1" className="inp--filter-radio" defaultChecked/>
              <span className="filter-radio"></span>
              <span className="filter-label__text">менее 3 дней</span>
          </label>
          <label htmlFor="radio2" className="filter-label">
            <input type="radio" name="radio" id="radio2" className="inp--filter-radio"/>
              <span className="filter-radio"></span>
              <span className="filter-label__text">от 3 до 7 дней</span>
          </label>
          <label htmlFor="radio3" className="filter-label">
            <input type="radio" name="radio" id="radio3" className="inp--filter-radio"/>
              <span className="filter-radio"></span>
              <span className="filter-label__text">более 7 дней</span>
          </label>
          <label htmlFor="radio4" className="filter-label">
            <input type="radio" name="radio" id="radio4" className="inp--filter-radio"/>
              <span className="filter-radio"></span>
              <span className="filter-label__text">более 14 дней</span>
          </label>
          <a href="#" className="filter-more">Показать еще</a>
        </div>
        <div className="filter__item">
          <div className="filter__title">Характеристика 2</div>
          <label className="filter-label">
            <input type="radio" name="radio1" className="inp--filter-radio" defaultChecked/>
              <span className="filter-radio"></span>
              <span className="filter-label__text">Свойство 1</span>
          </label>
          <label className="filter-label">
            <input type="radio" name="radio1" className="inp--filter-radio"/>
              <span className="filter-radio"></span>
              <span className="filter-label__text">Свойство 2</span>
          </label>
          <label className="filter-label">
            <input type="radio" name="radio1" className="inp--filter-radio"/>
              <span className="filter-radio"></span>
              <span className="filter-label__text">Свойство 3</span>
          </label>
        </div>
        <div className="filter__item">
          <div className="filter__title">Характеристика 3</div>
          <label htmlFor="check1" className="filter-label">
            <input type="checkbox" name="checkbox1" id="check1" className="inp--filter-check" defaultChecked/>
              <span className="filter-check"></span>
              <span className="filter-label__text">Свойство 1</span>
          </label>
          <label htmlFor="check2" className="filter-label">
            <input type="checkbox" name="checkbox2" id="check2" className="inp--filter-check"/>
              <span className="filter-check"></span>
              <span className="filter-label__text">Свойство 2</span>
          </label>
          <label htmlFor="check3" className="filter-label">
            <input type="checkbox" name="checkbox3" id="check3" className="inp--filter-check" defaultChecked/>
              <span className="filter-check"></span>
              <span className="filter-label__text">Свойство 3</span>
          </label>
          <label htmlFor="check4" className="filter-label">
            <input type="checkbox" name="checkbox4" id="check4" className="inp--filter-check"/>
              <span className="filter-check"></span>
              <span className="filter-label__text">Свойство 4</span>
          </label>
          <a href="#" className="filter-more">Показать еще</a>
        </div>
      </div>
    );
  }
}

export default CategoryFilter;