import React, { Component } from 'react'
import Menu from './../../containers/Menu';
import Loading from './../../components/Loading';
import Head from './../../containers/Head';
import { Link } from 'react-router-dom';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listArr: [{
        title: '风变科研中心',
        desc: '这只是一片假的散文这只是一片假的散文这只是一片假的散文<br/>这只是一片假的散文这只是一片假的散文这只是一片假的散文',
        id:'20160328',
        url: 'https://ohovav7hg.qnssl.com/2-%E5%A4%B4%E5%9B%BE2.jpg'
      }, {
        title: '纪念即将逝去的Vue过滤器',
        desc: '这只是一片假的散文这只是一片假的散文这只是一片假的散文<br/>这只是一片假的散文这只是一片假的散文这只是一片假的散文',
        id:'20160428',
        url: 'https://ohovav7hg.qnssl.com/2-%E5%A4%B4%E5%9B%BE2.jpg'
      }, {
        title: '风变科研中心',
        desc: '这只是一片假的散文这只是一片假的散文这只是一片假的散文<br/>这只是一片假的散文这只是一片假的散文这只是一片假的散文',
        id:'20160328',
        url: 'https://ohovav7hg.qnssl.com/2-%E5%A4%B4%E5%9B%BE2.jpg'
      }, {
        title: '纪念即将逝去的Vue过滤器',
        desc: '这只是一片假的散文这只是一片假的散文这只是一片假的散文<br/>这只是一片假的散文这只是一片假的散文这只是一片假的散文',
        id:'20160428',
        url: 'https://ohovav7hg.qnssl.com/2-%E5%A4%B4%E5%9B%BE2.jpg'
      }],
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
        <div className="article-img" style={{backgroundImage: 'url(' + obj.url + ')',
          backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
        }}></div>
      </div>
    )
  }

  generateMobileTitle(obj, index) {
    return (
      <div className="title-box" key={index}
           style={{backgroundImage: 'url(' + obj.url + ')',
             backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
           }}>
        <div className="article-title">
          <Link to={{
            pathname: '/article',
            search: '?id=' + obj.id,
          }}>{obj.title}</Link>
          <p dangerouslySetInnerHTML={{__html:obj.desc}}></p>
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
            <h5>ARTICLES</h5>
            <p>ArticlesArticlesArticlesArticlesArticles<br/>ArticlesArticlesArticlesArticlesArticles</p>
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
