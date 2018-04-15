
import React from 'react'
import data from '../data/personalData.js'
import { Link } from 'react-router-dom'

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
                <div className="col-md-3">
                  <img className="imgPadding img-fluid mx-auto d-block" src="/images/logo.svg" alt="logoImage"/>
                </div>
                <div className="col-md-6">
                  <br/>
                    <h1> KIA ORA / HELLO </h1>
                    <p className="pAboutMe">
                      My name is Mel. I am a creative that spans over a multitude of different platforms. Most recently I studied at Enspiral Dev Academy in Wellington learning Web Development (yes, I designed this website). Previous to this I was managing a cafe in Wellington, New Zealand and even earlier than that I graduated in 2012 with a Bachelor in Visual Communication Design with Honours from Massey University.
                    </p>
                </div>
              </div>
            </div>

        </div>
        )
      }
    }


  export default AboutMe
