import React, {Component} from 'react'
import Menu from './../../containers/Menu';
import Loading from './../../components/Loading';
import Head from './../../containers/Head';
import * as http from '../../assets/js/axios';
import article from './../../components/About/resume.md';
import createHistory from 'history/createHashHistory';
const history = createHistory();

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',
      url: '',
      id: '',
    }
  }

  componentDidMount() {
    const res = this.applyForArticle(this.query('id'));
    console.log(res);
  }

  query(name) {
    const reg = new RegExp(`(#|^|&)${name}=([^&]*)(&|$)`, 'i');
    const r = window.location.hash.split('?')[1].match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }

  async applyForArticle(id) {
    return await http.get('/api/getarticle', {
      data: {id},
    })
  }

  render() {
    return (
      <div id="Article">
        <Menu url={'2'}></Menu>
        <Head url={'2'}></Head>
        <Loading></Loading>
        <div className="article-header"
             style={{backgroundImage: 'url(' + this.state.url + '?imageView2/2/w/1000/q/160/format/JPG/interlace/1)',
               backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
             }}>
          <div className="article-title">
            <h5>{this.state.title}</h5>
            <p dangerouslySetInnerHTML={{__html:this.state.desc}}></p>
          </div>
        </div>
        <div className="pc-article">
          <div className="pc-container markdown"
               dangerouslySetInnerHTML={{__html: this.state.content}}>
          </div>
        </div>
        <div className="mobile-article markdown"
             dangerouslySetInnerHTML={{__html: this.state.content}}>
        </div>
      </div>
    );
  }
}

export default Article;
