import React, {Component} from 'react'
import Menu from './../../containers/Menu';
import Loading from './../../components/Loading';
import Head from './../../containers/Head';
import * as http from '../../assets/js/axios';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      title: '',
      desc: '',
      url: '',
      id: '',
    }
  }

  componentDidMount() {
    this.applyForArticle(this.query('id'));
  }

  query(name) {
    const reg = new RegExp(`(#|^|&)${name}=([^&]*)(&|$)`, 'i');
    const r = window.location.hash.split('?')[1].match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }

  applyForArticle(id) {
    http.get('/api/getarticle', {
      data: {id}
    }).then(res => {
      const result = res.data;
      console.log(result);
      if (result.code == 200) {
        this.setState({
          content: result.content,
          title: result.obj.title,
          desc: result.obj.desc,
          url: result.obj.url,
          id: result.obj.id,
        })
      } else {
        this.props.history.push('/none');
      }
    });
  }

  render() {
    return (
      <div id="Article">
        <Menu url={'2'}></Menu>
        <Head url={'2'}></Head>
        <Loading></Loading>
        <div className="article-header"
             style={{
               backgroundImage: 'url(' + this.state.url + '?imageView2/2/w/1000/q/160/format/JPG/interlace/1)',
               backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
             }}>
          <div className="article-title">
            <h5>{this.state.title}</h5>
            <p dangerouslySetInnerHTML={{__html: this.state.desc}}></p>
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
