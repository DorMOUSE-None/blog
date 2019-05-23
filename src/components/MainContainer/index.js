import React from 'react';
import PropTypes from 'prop-types';

import Head from 'components/Head';
import Header from 'components/Header';

import './style.scss';

const MainContainer = ({children}) => (
  <>
    <Head />
    <Header />
    <div>
      <main className="main">{children}</main>
      <footer className="footer">
        ffutop © {new Date().getFullYear()}, Powered by&nbsp;
        <a href="https://reactjs.org/">React</a>&nbsp;and&nbsp;
        <a href="https://nextjs.org/">Next.js</a>
      </footer>
    </div>
  </>
);

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContainer;
