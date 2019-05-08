import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';

import './style.scss';

const MainContainer = ({children}) => (
  <>
    <Header />
    <div>
      <main className='main'>{children}</main>
      <footer className='footer'>
        ffutop © {new Date().getFullYear()}, Built with
        <a href="https://reactjs.org/">React</a>
      </footer>
    </div>
  </>
);

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContainer;
