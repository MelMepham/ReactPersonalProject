import React from 'react'

const Header = (props) => {
  return (
    <header className="container-fluid headerPadding">
        <div className="row">
          <div className="col-lg-10 col-md-9 col-sm-8 col-xs-12 vertical-align--bottom">
            <br/>
            <h4>MELISSA MEPHAM</h4>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12 text-center">
            <div>
            <a href="https://www.instagram.com/melissamephamillustration/" target="_blank"><img className="icons float-sm-left float-right" src="/images/icons/instaIcon.svg" alt="instagram link"/></a>
            <a href="mailto:m.a.mepham@gmail.com"><img className="icons float-sm-right float-right" src="/images/icons/envilopeIcon.svg" alt="instagram link"/></a>
            <a href="https://www.facebook.com/MelissaMephamIllustraton/" target="_blank"><img className="icons float-sm-none float-right" src="/images/icons/facebookIcon.svg" alt="facebook link"/></a>
            </div>
        </div>
    </div>
  </header>
  )
}

export default Header
