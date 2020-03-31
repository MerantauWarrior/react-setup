import React, {Component} from 'react';
import MenuItem from '../../components/MenuItem/MenuItem';

import {MenuData} from '../../dummyData';

class Menu extends Component {
  state = {
    menuData: MenuData
  };
  render() {
    let MenuContent = this.state.menuData.map((menuItem, index)=> {
      return(
        <MenuItem key={menuItem.id} name={menuItem.name} subs={menuItem.subcategories} />
      );
    });
    return (
      <React.Fragment>
        {MenuContent}
      </React.Fragment>
    );
  }
}

export default Menu;
