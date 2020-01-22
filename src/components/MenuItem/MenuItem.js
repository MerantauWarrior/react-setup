import React, {Component} from 'react';

class MenuItem extends Component {
  state = {
    show: false
  };
  hoverEffect = () => {
    this.setState({show: !this.state.show});
  };
  render() {
    let subs = this.props.subs.map((sub, index) => {
      return(
        <li key={index} className="submenu-item">
          <a href="#" className="submenu-link">
            <img src={sub.picture} alt="" className="submenu-link__img"/>
            <span className="submenu-link__text">{sub.name}</span>
          </a>
        </li>
      );
    });
    return (
      <li className={this.state.show === false ? 'menu-item' : 'menu-item menu-item_active'}
          onMouseEnter={this.hoverEffect}
          onMouseLeave={this.hoverEffect}>
        <a href="#" className="menu-link">{this.props.name}</a>
        {this.state.show === false ? '' : <ul className="submenu-list" style={{display: 'flex'}}>{subs}</ul>}
      </li>
    );
  }
}

export default MenuItem;