import React, {Component} from 'react'
import Menu from './../../containers/Menu';
import Loading from './../../components/Loading';
import Head from './../../containers/Head';
import * as http from '../../assets/js/axios';
import article from './../../components/About/resume.md';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',
      url: '',
      id: '',
    }
  }

  componentWillReceiveProps(nextProps) {
    const queryId = nextProps.location.search.replace('?id=', '').toString();
    console.log(queryId);
    /*this.setState({
      content: article.toString(),
      title: '一段人人都应该知道的从Vue到React的dasdsadasdas过渡史',
      desc: 'From Zero to React <br/>【From Zero系列】【手写类教程】【React】',
      id:'20161022',
      url: 'https://ohovav7hg.qnssl.com/articlecover5.png'
    })*/
    this.applyForArticle(queryId);
  }

  applyForArticle(id) {
    http.get('/api/getarticle', {
      data: {id},
    }).then(res => {
      console.log('~~~~===~~~~');
      console.log(res);
      if(res.code === 200) {
        this.setState({
          content: res.content,
          ...res.obj
        })
      } else  {
        console.log(res);
        // this.props.history.push('/none')
      }
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

export default About;
