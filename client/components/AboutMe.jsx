
import React from 'react'
import data from '../data/personalData.js'


class AboutMe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      info: [],
    }
    this.showInfo = this.showInfo.bind(this)
  }

    componentDidMount() {
       this.setState({info:data})
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
                  </div>
                    <h4 className='subText'>{data.menu}</h4>
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
