import React, { Component }  from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.generatePcSvg();
  }

  generatePcSvg() {
    var $svg = '<svg width="100%" height="100%" class="menu-rainbow">';
    var rainbowColors = ['red','orange','gold','green','cyan','blue','purple','pink','white'];
    var svgHeight = ($('.menu-links').height()) / rainbowColors.length;
    var svgHeight2 = ($('.menu-links').height()) / (rainbowColors.length + 2);
    rainbowColors.forEach((item,index) => {
      $svg += `<rect class='ray ray${index}' height='${svgHeight}' 
              width='6' x='0' y='${svgHeight * index}'
              style='fill:${item}'></rect>`;
    })
    $svg += '</svg>';
    $('#menu .menu-links').prepend($svg);

    var rects = Array.from($(".ray"));
    var $height = 0, $width = 0;
    var liLength = $('.menu-link').length + 1;

    $('.menu-links').mousemove((t) => {
      if (t.pageX < ($(`.menu-links li:nth-child(${liLength}) a`).offset().left + $(`.menu-links li:nth-child(${liLength}) a`).width())) {
        $height = (t.pageY - $('.menu-links').offset().top) / $('.menu-links').outerHeight();
        $width = (t.pageX - $('.menu-links').offset().left) / $('.menu-links').outerWidth();
        rects.forEach((item,index) => {
          $(`.ray${index}`).attr('width', 6 + 260 * $width * (1 - Math.abs($height - svgHeight * (index + .5) / $(".menu-rainbow").height())))
            .attr('height', svgHeight2 * (.1 + Math.abs($height - svgHeight * (index +.5)/ $(".menu-rainbow").height())))
            .attr('y', svgHeight * index + (svgHeight - svgHeight2 * (.1 + Math.abs($height - svgHeight * (index + .5)/ $(".menu-rainbow").height()))) / 2);
        })
      }
    })
    $('.menu-links').mouseout(() => {
      rects.forEach((item,index) => {
        $(`.ray${index}`).attr('width', 6)
          .attr('height', svgHeight)
          .attr('y', svgHeight * index);
      })
    })
  }

  render() {
    return (
      <div id="Nav">
        <div className="nav-pc">
          <div className="menu-links-wrap" id="menu">
            <ul className="menu-links middle">
              <li><Link className="menu-link" to={this.props.url === '0' ? '' : '/'}>Home</Link></li>
              <li><Link className="menu-link" to={this.props.url === '1' ? '' : '/articles'}>Articles</Link></li>
              <li><a className="menu-link" href="https://github.com/AppianZ" target="_blank">GitHub</a></li>
              <li><Link className="menu-link" to={this.props.url === '2' ? '' : '/about'}>About</Link></li>
            </ul>
          </div>
          <div className="copyright">Knowledge is weightless, a treasure you can always carry easily.<br/>
            ❤️  Give your hands, give me your love.
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
