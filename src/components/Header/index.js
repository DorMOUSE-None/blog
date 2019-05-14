import React from 'react';

import {routers} from './routers.js';
import './style.scss';

const Header = props => {
  return (
    <header className="component-header">
      <h1 className="title">ffutop</h1>
      <ul className="nav-items">
        {routers.map(router => (
          <li key={router.name}>
            <a href={process.env.PREFIX_PATH + router.path}>{router.title}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
