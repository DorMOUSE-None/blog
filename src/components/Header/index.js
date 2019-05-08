import React from 'react';

import {routers} from './routers.js';
import './style.scss';

const Header = props => {
  return (
    <header>
      <h1 className="title">ffutop</h1>
      <div>
        {routers.map(router => (
          <a key={router.name} href={process.env.PREFIX_PATH + router.path}>
            {router.title}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
