import React from 'react'
import Menu from './../../containers/menu';
import Loading from './../../components/Loading';

const About = () => (
  <div id="About">
    <Menu></Menu>
    <Loading></Loading>
    <div className="pc-box">
      <div className="pc-container">
        这是一篇文章
        这是一篇文章
        这是一篇文章
        这是一篇文章
        这是一篇文章
        这是一篇文章
        这是一篇文章
        这是一篇文章
        这是一篇文章
        这是一篇文章
      </div>
      <div className="pc-apple"></div>
      <div className="pc-moon"></div>
      <div className="pc-start"></div>
    </div>
  </div>
);

export default About;
