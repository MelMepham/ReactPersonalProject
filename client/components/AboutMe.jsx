
import React from 'react'



class AboutMe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      info: [
          {menu: 'ABOUT ME', img: 'images/icons/man1.png', links: '', pOne: 'Melissa Mepham is a creative that spans over a multitude of different platforms. She has most recently studied at Enspiral Dev Academy in Wellington learning Web Development (yes, this website is designed by her), and graduated in 2012 with a Bachelor in Visual Communication Design with Honours from Massey University.', show: false},
          {menu: 'EXHIBITIONS', img: 'images/icons/man2.png', links: '', pOne: "Melissa has been exhibiting work around New Zealand and Internationally, developing her skills in Typography Illustration, creating branding for several start up companies and working as an in-house designer for some of Wellington's most iconic hospitality establishments.", show: false},
          {menu: 'CONTACT', img: 'images/icons/man3.png', links: '', pOne: 'Please feel free to contact me here: 02108732005 m.a.mepham@gmail.com', show: false},
          {menu: 'HIRE ME', img: 'images/icons/man4.png', links: '', pOne: 'I would love to hear from you regarding your projects or potential job opportunities', show: false}
          ],
    }
    this.showInfo = this.showInfo.bind(this)
  }

    showInfo(contactMeInfo) {
        const {info} = this.state
        var index = info.findIndex(infoItem => infoItem.menu === contactMeInfo.menu)
        info[index].show = !info[index].show
        this.setState({info})

      }

    render() {
      return (
        <div className="container">
          <div className="row">
            {this.state.info.map(data => {
              return (
                <div className="col-lg-3 col-md-6">
                  <div onClick={ (e) => {this.showInfo(data)} } className="hvr-shrink">
                    <img className="blogImg img-responsive" src={data.img} alt="mandala"/>
                    <h4 className='subText'>{data.menu}</h4>
                  </div>
                  <div>{data.show == true && <div>
                      <p className='aboutMeData'>{data.pOne}</p>
                      <p className='aboutMeData'>{data.pTwo}</p>
                      <p className='aboutMeData'>{data.pThree}</p>
                    </div>}
                  </div>
                </div>
              )}
            )}
          </div>
        </div>
      )
    }
  }

  export default AboutMe
