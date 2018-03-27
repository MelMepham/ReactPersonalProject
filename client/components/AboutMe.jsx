
import React from 'react'
import data from '../data/personalData.js'
import { Link } from 'react-router-dom'



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
            <br /> <br /> <br /> <br />

            <div className="row">
              {this.state.info.map((data, i) => {
                return (
                  <div key={i} className="col-lg-3 col-md-6">
                    <div onClick={ (e) => {this.showInfo(data)} } className="hvr-shrink">
                      <img className="aboutMeImg img-responsive cursor" src={data.img} alt="mandala"/>
                    </div>
                    <h4 className='subText'>{data.menu}</h4>
                      <div>{data.show == true && <div>
                        <p className='aboutMeData'>{data.pOne}</p>
                        {data.menu === 'HIRE ME' ? <div>
                          <br />
                          <Link className="btn-pink" to= '/CV' ><a className="btn btn-pink btn-sm active" role="button">Go to my CV</a></Link>
                          <br />
                          <a href="images/MelissaMephamCV.pdf" download className="btn btn-pink btn-sm active" role="button" aria-pressed="true">Download my CV</a>
                        </div> : ''}
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
