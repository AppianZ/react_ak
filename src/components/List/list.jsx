import React, { Component } from 'react'
import Menu from './../../containers/Menu';
import Loading from './../../components/Loading';
import Head from './../../containers/Head';
import { Link } from 'react-router-dom';
import listArr from './data';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listArr,
    };
  }

  generatePCTitle(obj, index) {
    return (
      <div className={'title-box title-box-' + (index % 2 === 0 ? 'odd' : 'even')} key={index}>
        <div className="article-title">
          <span>
            <Link to={{
              pathname: '/article',
              search: '?id=' + obj.id,
            }}>{obj.title}</Link>
            <p dangerouslySetInnerHTML={{__html:obj.desc}}></p>
          </span>
        </div>
        <div className="article-img" style={{backgroundImage: 'url(' + obj.url + '?imageView2/2/w/700/q/60/format/JPG/interlace/1)',
          backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
        }}></div>
      </div>
    )
  }

  generateMobileTitle(obj, index) {
    return (
      <div className="title-box" key={index}
           style={{backgroundImage: 'url(' + obj.url + '?imageView2/2/w/700/q/60/format/JPG/interlace/1)',
             backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
           }}>
        <div className="article-title">
          <span>
            <Link to={{
              pathname: '/article',
              search: '?id=' + obj.id,
            }}>{obj.title}</Link>
          <p dangerouslySetInnerHTML={{__html:obj.desc}}></p>
          </span>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div id="articles">
        <Menu url={'1'}></Menu>
        <Head url={'1'}></Head>
        <Loading></Loading>
        <div className="articles-header">
          <div>
            <h5>Articles</h5>
            <p>一个卖萌出家的算法妹纸的原创文集<br/>【From Zero系列】【算法轮子】【翻译计划】【手写类教程】【焦虑小课堂】</p>
          </div>
        </div>
        <div className="pc-articles">
          {
            this.state.listArr.map((item, index) => this.generatePCTitle(item, index))
          }
        </div>
        <div className="mobile-articles">
          {
            this.state.listArr.map((item, index) => this.generateMobileTitle(item, index))
          }
        </div>
      </div>
    );
  }
}

export default Articles;
