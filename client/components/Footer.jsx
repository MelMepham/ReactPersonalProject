import React from 'react'
import {Link} from 'react-router-dom'


const Footer = (props) => {
  const footerLink = (path, display, mobile) =>
  <Link to={`/${path}`} className={`col-sm-2 menuPadding ${props.location.pathname == "/" + path ? mobile ? 'mobileViewHover' : "menuBigHover" : ''}`} id={path}>
    {mobile
      ? <menu>{display}</menu>
      : <h5>{display}</h5>
    }
  </Link>

  return (

  <div>
    <div id="menuBig" className="mobileHide">
      <div className="fixed-bottom container-fluid, d-none, d-sm-block">
        <div className="row text-center align-text-bottom">
          <div className="col-sm-1"></div>
            {footerLink('home', 'HOME', false)}
            {footerLink('art', 'ART', false)}
            {footerLink('design', 'DESIGN', false)}
            {footerLink('webdev', 'WEB DEV', false)}
            {footerLink('aboutme', 'ABOUT ME', false)}
          <div className="col-sm-1"></div>
        </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="bottomLine"></div>
              <br/>
            </div>
          </div>
        </div>
    </div>

    <div id="mobileView" className="mobileView fixed-bottom">
      <div className="container-fluid">
        <div className="row">
          <button type="button" className="navbar-toggle btn-block menuButton" data-toggle="collapse" data-target="#myNavbar">
            <h2>MENU</h2>
          </button>
        </div>
      </div>
      <div className="collapse navbar-collapse, container-flui" id="myNavbar">
        <ul className="nav navbar-nav">
          {footerLink('home', 'HOME', true)}
          {footerLink('art', 'ART', true)}
          {footerLink('design', 'DESIGN', true)}
          {footerLink('webdev', 'WEB DEV', true)}
          {footerLink('aboutme', 'ABOUT ME', true)}
        </ul>
      </div>
    </div>
  </div>
)
}

export default Footer
