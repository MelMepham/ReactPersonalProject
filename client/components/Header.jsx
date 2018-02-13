import React from 'react'

const Header = (props) => {
  return (
    <header className="container-fluid headerPadding">
      <div className="row">
        <div className="col-lg-9 col-md-8 col-sm-7 col-xs-12 vertical-align--bottom">
          <br/>
          <h4>MELISSA MEPHAM</h4>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-5 col-xs-12 text-right">
          <div>
            <a href="https://www.instagram.com/melissamephamillustration/" target="_blank"><img className="icons float-sm-right float-md-left" src="/images/icons/instaIcon.svg" alt="instagram link"/></a>
            <a href="mailto:m.a.mepham@gmail.com"><img className="icons float-sm-right float-md-left" src="/images/icons/envilopeIcon.svg" alt="mail link"/></a>
            <a href="https://github.com/MelMepham/" target="_blank"><img className="icons float-sm-right float-md-left" src="/images/icons/gitIcon.svg" alt="Github link"/></a>
            <a href="https://www.facebook.com/MelissaMephamIllustraton/" target="_blank"><img className="icons float-sm-right float-md-left" src="/images/icons/facebookIcon.svg" alt="facebook link"/></a>
          </div>
        </div>
      </div>
  </header>
  )
}

export default Header
