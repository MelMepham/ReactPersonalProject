
import React from 'react'
import data from '../data/personalData.js'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import MyHorizontalScroll from './MyHorizontalScroll'
import exhibitions from '../data/exhibitions.json'


import P5Wrapper from 'react-p5-wrapper'



class AboutMe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      exhibitionYears: [2017, 2016, 2015, 2014, 2013, 2012],
    }
    this.changeLogoImg = this.changeLogoImg.bind(this)
  }

  componentDidMount(){
  }

  changeLogoImg() {
    this.setState({logoImg: "/images/me.jpg"})

  }

    render() {
      return (
        <div>
        <div>
          <br/> <br/><br/>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3 imgPadding">
                  <div id="cf">
                    <img className="mx-auto d-block bottom" src="/images/me.jpg" alt="logoImage"/>
                  <img className="mx-auto d-block top" src="/images/logo.svg" alt="logoImage"/>
                </div>
              </div>
                <div className="col-md-6 typePadding">
                <br/><br/>
                  <h1> KIA ORA / HELLO </h1>
                  <p className="pAboutMe">
                    My name is Mel. I can assume if you have had a good look at my website you will know I love making stuff, I am a creative through and through. I am extreemly driven by what I can give to the world, it's hard to figure that out sometimes, but I learn from most of my mistakes. I am authentic, honest, playful, optimistic and love new things!
                  </p>
                </div>
              </div>
                <br />

              </div>
            </div>

            <div className="parentHorizontalExhibition">
              <MyHorizontalScroll>
                {exhibitions.map(year => {
                  console.log(year[2017])
                  return ([
                    <div className="childHorizontalExhibition background">
                      <h1>{year.title}</h1>
                    </div>
                  ])
                })}
              </MyHorizontalScroll>
            </div>

</div>
        )
      }
    }


  export default AboutMe
