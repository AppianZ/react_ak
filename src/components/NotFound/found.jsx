import React from 'react'
import Menu from './../../containers/Menu';
import Loading from './../../components/Loading';
import Head from './../../containers/Head';
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div id="Box404">
    <Menu url={'4'}></Menu>
    <Head url={'4'}></Head>
    <Loading></Loading>
    <div className="pc-404">
      <p>Congrats,<br/> you discovered a new part of the internet! <br/> BOOM!!!</p>
      <h1>4</h1>
      <span className="stone"></span>
      <h1>4</h1>
      <p>Go <Link to="/">HOME</Link> and tell everyone all about it.</p>
    </div>
    <div className="mobile-404">
      <p>Congrats,<br/> you discovered a new part of the internet! <br/> BOOM!!!</p>
      <h1>4</h1>
      <span className="stone"></span>
      <h1>4</h1>
      <p>Go <Link to="/">HOME</Link> and tell everyone all about it.</p>
    </div>
  </div>
)

export default NotFound;