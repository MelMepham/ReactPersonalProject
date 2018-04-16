
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
    }
  }

    render() {
      return (
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
            </div>
            <div className="row">
              <div className="col-md-3">
              </div>
              <div className="col-md-8 typePadding">
              <br/><br/>
                <h1> KIA ORA / HELLO </h1>
                <p className="pAboutMe">
                  My name is Mel. I can assume if you have had a good look at my website you will know I love making stuff, I am a creative through and through. I am extreemly driven by what I can give to the world, it's hard to figure that out sometimes, but I learn from most of my mistakes. I am authentic, honest, playful, optimistic and love new things!
                </p>
              </div>
            </div>
            <br/><br/>
          </div>

          <div className="parentHorizontalExhibition">
            <MyHorizontalScroll>
              <div className="childHorizontalExhibiton exhibitionBox text-right">
                <h1>PAST <br/> EXHIBI-<br/>TIONS</h1>
                <h5>If you like my art and want to chat about where I can exhibit it, please let me know!</h5>
              </div>
              {exhibitions.map((events, i) => {
                var name = events.exhibitions
                return (
                <div className="background childHorizontalExhibiton exhibitionBox">
                  <h1>{events.year}</h1>
                    {name[0] ? <div><h6>{name[0].title}</h6><hr/><p>{name[0].venue}<br/>{name[0].where}</p></div> : ""}
                    {name[1] ? <div><h6>{name[1].title}</h6><hr/><p>{name[1].venue}<br/>{name[1].where}</p></div> : ""}
                    {name[2] ? <div><h6>{name[2].title}</h6><hr/><p>{name[2].venue}<br/>{name[2].where}</p></div> : ""}
                </div>
                )
              })}
            </MyHorizontalScroll>
          </div>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        )}
      }


  export default AboutMe
