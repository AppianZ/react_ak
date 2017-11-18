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
        title: '为什么我们选择Vue，而不选React(译)',
        desc: 'WhyWeChooseVue <br/>【翻译计划】【React】【Vue】',
        id:'20161226',
        url: 'https://ohovav7hg.qnssl.com/articlecover6.png'
      }, {
        title: '一段人人都应该知道的从vue到react的过渡史',
        desc: 'From Zero to React <br/>【From Zero系列】【手写类教程】【React】',
        id:'20161222',
        url: 'https://ohovav7hg.qnssl.com/articlecover5.png'
      }, {
        title: 'Vue动态组件之表单的CURD',
        desc: 'Vue Components CURD<br/>【手写类教程】【Vue】',
        id:'20160510',
        url: 'https://ohovav7hg.qnssl.com/articlecover4.png'
      }, {
        title: '组件改变生活_揭开组件神秘面纱',
        desc: 'Vue Components Base Training<br/>【手写类教程】【Vue】',
        id:'20160501',
        url: 'https://ohovav7hg.qnssl.com/articlecover3.png'
      }, {
        title: '纪念即将逝去的Vue过滤器',
        desc: 'Vue Filter<br/>【手写类教程】【Vue】',
        id:'20160428',
        url: 'https://ohovav7hg.qnssl.com/articlecover2.png'
      }, {
        title: '从零开始学Vue',
        desc: 'From Zero to Vue <br/>【From Zero系列】【手写类教程】【Vue】',
        id:'20160427',
        url: 'https://ohovav7hg.qnssl.com/articlecover1.png'
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
            <p>越悲怆的时候, 我越嬉皮<br/>【From Zero系列】【手写类教程】【翻译计划】【焦虑小课堂】</p>
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
