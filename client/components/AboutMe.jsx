
import React from 'react'


const AboutMe = (props) => {

  var info: [
    {menu: 'ABOUT ME', img: 'images/icons/man1.png', links: ''},
    {menu: 'EXHIBITIONS', img: 'images/icons/man2.png', links: ''},
    {menu: 'CONTACT', img: 'images/icons/man3.png', links: ''},
    {menu: 'HIRE ME', img: 'images/icons/man4.png', links: ''}
  ]


  return (
      <div className="container">
        <div className="row">
          this.info.map(data => {
            <div className="col-md-3">
                <a className="hvr-shrink" href={data.links}>
                  <img className="blogimg img-responsive" src={data.img} alt="mandala"/>
                  <h4 className='subText'>{data.menu}</h4>
                </a>
              </div>
            })
          </div>
        </div>
    )
  }

  export default AboutMe
