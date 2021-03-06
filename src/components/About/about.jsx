import React, { Component } from 'react'
import Menu from './../../containers/Menu';
import Loading from './../../components/Loading';
import Head from './../../containers/Head';
import article from './resume.md';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameArr: ['65', '55', '51', '47', '30', '09',
      '068', '066', '049', '033', '032', '022',
      '008', '007', '006', '004', '001'],
    };
  }

  componentDidMount() {
    $('body').addClass('over-md');
    $('html').addClass('over-md');
  }

  componentWillUnmount() {
    $('body').removeClass('over-md');
    $('html').removeClass('over-md');
  }

  generateSvg(name, index) {
    return (
      <div className={'pc-icon pc-icon-' + index } key={index}>
        <svg className="color-icon" aria-hidden="true">
          <use xlinkHref={'#icon-' + name}></use>
        </svg>
      </div>
    )
  }

  render() {
    return (
      <div id="About">
        <Menu url={'2'}></Menu>
        <Head url={'2'}></Head>
        <Loading></Loading>
        <div className="pc-box">
          <div className="pc-container markdown"
               dangerouslySetInnerHTML={{__html:article.toString()}}>
          </div>
          {
            this.state.nameArr.map((item, index) => this.generateSvg(item, index))
          }
        </div>
        <div className="mobile-box markdown"
             dangerouslySetInnerHTML={{__html:article.toString()}}>
        </div>
      </div>
    );
  }
}

export default About;
