import React from 'react'

const Header = (props) => {
  return (
    <header id="grad" className="container-fluid header">
      <div className="row">
        <div className="col-lg-8 col-md-7 col-sm-6 col-xs-12 vertical-align--bottom">
        <br/>
          <h4>MELISSA MEPHAM</h4>
        </div>
        <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12 text-right">
          <div>
            <a href="https://www.instagram.com/melissamephamillustration/" target="_blank"><img className="icons float-sm-right float-md-left" src="/images/icons/instaIcon.svg" alt="instagram link"/></a>
            <a href="mailto:m.a.mepham@gmail.com"><img className="icons float-sm-right float-md-left" src="/images/icons/envilopeIcon.svg" alt="mail link"/></a>
            <a href="https://github.com/MelMepham/" target="_blank"><img className="icons float-sm-right float-md-left" src="/images/icons/gitIcon.svg" alt="Github link"/></a>
            <a href="https://twitter.com/aplaceofdreams" target="_blank"><img className="icons float-sm-right float-md-left" src="/images/icons/twitter.svg" alt="twitter link"/></a>
            <a href="https://www.linkedin.com/in/melissamepham/" target="_blank"><img className="icons float-sm-right float-md-left" src="/images/icons/linkedin.svg" alt="Linkedin link"/></a>
          </div>
        </div>
      </div>
  </header>
  )
}

export default Header
