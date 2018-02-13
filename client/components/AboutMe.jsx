
import React from 'react'



class AboutMe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      info: [
          {menu: 'ABOUT ME', img: 'images/icons/man1.png', links: '', bodyType: 'About Me', show: false},
          {menu: 'EXHIBITIONS', img: 'images/icons/man2.png', links: '', bodyType: 'Exhibitions', show: false},
          {menu: 'CONTACT', img: 'images/icons/man3.png', links: '', bodyType: 'Contact', show: false},
          {menu: 'HIRE ME', img: 'images/icons/man4.png', links: '', bodyType: 'Hire Me', show: false}
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
                <div>{data.show == true && <div> <p className='aboutMeData'>{data.bodyType}</p></div>}</div>
              </div>
            )}
          )}
        </div>
      </div>
    )
  }
}

  export default AboutMe
