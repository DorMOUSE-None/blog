import React from 'react';

import MainContainer from 'src/components/MainContainer';
import '../static/styles.scss';

const About = props => {
  return (
    <MainContainer>
      <div className="page-about">
        <div className="about-style">
          <div className="about-head">
            <img
              className="about-img"
              src={process.env.PREFIX_PATH + '/static/images/AboutMe.jpeg'}
              alt="avator"
            />
            <div className="about-intro">
              <h1 className="about-name">防风</h1>
              <ul className="about-tag">
                <li>前算法爱好者</li>
                <li>Java程序猿</li>
                <li>Kernel探索者</li>
              </ul>
              <div className="about-skill">
                <h2>Programming Skill</h2>
                <ul>
                  <li>C</li>
                  <li>Java</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="about-content">
            <div className="about-desc" />
          </div>
          <div className="about-contact">
            <figure className="about-icon">
              <img
                src={process.env.PREFIX_PATH + '/static/images/icon.png'}
                alt="icon"
              />
            </figure>
            <ul>
              <li>
                <i className="fas fa-link" />{' '}
                <a href="/">https://www.ffutop.com/</a>
              </li>
            </ul>
            <ul>
              <li>
                <i className="fas fa-at" />{' '}
                <a href="mailto:dormousenone@gmail.com">
                  dormousenone@gmail.com
                </a>
              </li>
              <li>
                <i className="fas fa-map-marked-alt" /> Hangzhou, China
              </li>
            </ul>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default About;
