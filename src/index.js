import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './containers/Menu/Menu';
import PopularMasters from './containers/PopularMasters/PopularMasters';
import Category from './containers/Category/Category';

ReactDOM.render(<Menu/>, document.getElementById("MenuList"));
ReactDOM.render(<PopularMasters/>, document.getElementById('PopularMasters'));
ReactDOM.render(<Category/>, document.getElementById('CategoryContent'));