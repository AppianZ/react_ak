import React, { Component }  from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.generateCanvas();
    this.generateSvg();
  }

  generateCanvas() {
    document.addEventListener('touchmove', function (e) {
      e.preventDefault()
    })
    var c = document.getElementsByTagName('canvas')[0],
      x = c.getContext('2d'),
      pr = window.devicePixelRatio || 1,
      w = window.innerWidth,
      h = window.innerHeight,
      f = 90,
      q,
      m = Math,
      r = 0,
      u = m.PI * 2,
      v = m.cos,
      z = m.random
    c.width = w * pr
    c.height = h * pr
    x.scale(pr, pr)
    x.globalAlpha = 0.6
    function i() {
      x.clearRect(0, 0, w, h)
      q = [{x: 0, y: h * .7 + f}, {x: 0, y: h * .7 - f}]
      while (q[1].x < w + f) d(q[0], q[1])
    }
    function d(i, j) {
      x.beginPath()
      x.moveTo(i.x, i.y)
      x.lineTo(j.x, j.y)
      var k = j.x + (z() * 2 - 0.25) * f,
        n = y(j.y)
      x.lineTo(k, n)
      x.closePath()
      r -= u / -50
      x.fillStyle = '#' + (v(r) * 127 + 128 << 16 | v(r + u / 3) * 127 + 128 << 8 | v(r + u / 3 * 2) * 127 + 128).toString(16)
      x.fill()
      q[0] = q[1]
      q[1] = {x: k, y: n}
    }
    function y(p) {
      var t = p + (z() * 2 - 1.1) * f
      return (t > h || t < 0) ? y(p) : t
    }
    document.onclick = i
    document.ontouchstart = i
    window.onresize = i
    i()
  }

  generateSvg() {
    var $svg = '<svg width="100%" height="100%" class="menu-rainbow">';
    var rainbowColors = ['red','orange','gold','green','cyan','blue','purple','pink','lily'];
    console.log($('.menu-links').height());
    var svgHeight = ($('.menu-links').height() - 20) / rainbowColors.length;
    var svgHeight2 = ($('.menu-links').height() - 20) / (rainbowColors.length + 2);
    rainbowColors.forEach((item,index) => {
      $svg += `<rect class='ray ray${index}' height='${svgHeight}' 
              width='6' x='0' y='${svgHeight * index}'
              style='fill:${item}'></rect>`;
    })
    $svg += '</svg>';
    $('#menu .menu-links').prepend($svg);

    var rects = Array.from($(".ray"));
    var $height = 0, $width = 0;

    $('.menu-links').mousemove((t) => {
      if (t.pageX < ($(".menu-links li:nth-child(5) a").offset().left + $(".menu-links li:nth-child(5) a").width())) {
        $height = (t.pageY - $('.menu-links').offset().top) / $('.menu-links').outerHeight();
        $width = (t.pageX - $('.menu-links').offset().left) / $('.menu-links').outerWidth();
        console.log($height + ' ----- ' + $width);
        rects.forEach((item,index) => {
          $(`.ray${index}`).attr('width', 6 + 240 * $width * (1 - Math.abs($height - svgHeight * (index + .5) / $(".menu-rainbow").height())))
            .attr('height', svgHeight2 * (.1 + Math.abs($height - svgHeight * (index +.5)/ $(".menu-rainbow").height())));

        })
      }
    })
  }

  render() {
    return (
      <div id="home">
        <canvas></canvas>
        <div id="titleBox">
          <h3>APPIAN·嘉宝</h3>
          <p>An interested in algorithm & stupid girl</p>
          <div className="menu-links-wrap" id="menu">
            <ul className="menu-links middle">
              <li><a className="menu-link dJAX_internal" href="/work">Our Work</a></li>
              <li><a className="menu-link dJAX_internal" >The Brief</a></li>
              <li><a className="menu-link dJAX_internal">Our Team</a></li>
              <li><a className="menu-link dJAX_internal">About</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
