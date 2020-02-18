import React, {Component} from 'react';

class CategoryFilterItem extends Component {
  state = {
    items: this.props.data.values,
    itemsToShow: 3,
    expanded: false
  };

  toggleHandler = (e) => {
    e.preventDefault();
    this.state.itemsToShow === 3 ? (
      this.setState({itemsToShow: this.state.items.length, expanded: true})
    ) : (
      this.setState({itemsToShow: 3, expanded: false})
    );
  };

  render() {
    let filterItem = null;
    switch (this.props.data.type) {
      case ('radio'):
        filterItem = this.state.items.map((item, index) => {
          return (
            <label className="filter-label" key={'radio' + index}>
              <input type={this.props.data.type} name={this.props.data.slug} className="inp--filter-radio"
                     defaultChecked={item === this.props.data.checked}
                     onChange={(event) => this.props.changed(event, this.props.data.type, item)}
                     defaultValue={item}/>
              <span className="filter-radio"></span>
              <span className="filter-label__text">{item}</span>
            </label>
          )
        });
        break;
      case ('checkbox'):
        filterItem = this.state.items.map((item, index) => {
          return (
            <label className="filter-label" key={'checkbox' + index}>
              <input type={this.props.data.type} name={this.props.data.slug} className="inp--filter-check"
                     defaultChecked={
                       this.props.data.checked.includes(item)
                     }
                     onChange={
                       (event) => this.props.changed(event, this.props.data.type, item)
                     }
                     defaultValue={item}/>
              <span className="filter-check"></span>
              <span className="filter-label__text">{item}</span>
            </label>
          )
        });
        break;
      case ('iosswitch'):
        filterItem = this.state.items.map((item, index) => {
          let tempVal = item.split(' ');
          return (
            <label htmlFor={'iosswitch' + this.props.data.slug} className="filter-label" key={'iosswitch' + index}>
              <input type="checkbox" name={this.props.data.slug} id={'iosswitch' + this.props.data.slug}
                     className="inp--filter-check"
                     defaultChecked={this.props.data.checked}
                     onChange={(event) => this.props.changed(event, this.props.data.type, item)}/>
              <span className="filter-switch" data-on={tempVal[0]} data-off={tempVal[1]}></span>
            </label>
          )
        });
        break;
      default:
        filterItem = null;
    }
    return (
      <div className="filter__item">
        <div className="filter__title">{this.props.data.name}</div>
        {this.state.items.slice(0, this.state.itemsToShow).map((item, i) =>
          filterItem[i]
        )}
        {
          this.props.data.values.length > 3
            ? <a href="#" className="filter-more" onClick={this.toggleHandler}>
              {this.state.expanded ? (
                <span>Скрыть</span>
              ) : (
                <span>Показать ещё</span>
              )}
            </a>
            : ''
        }
      </div>
    );
  }
}

export default CategoryFilterItem;