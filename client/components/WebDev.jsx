import React from 'react'
import MyHorizontalScroll from './MyHorizontalScroll'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import thisDevInfo from '../data/webinfo.js'
import Swipe, { SwipeItem } from 'swipejs/react';


class webDev extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      devInfo: [],
    }

    this.showDev = this.showDev.bind(this)
  }
  componentDidMount() {
      let mySwipe = this.swipe;
      this.setState({devInfo:thisDevInfo})
  }

  hideAll(artToHide) {
      var mappedDev = this.state.devInfo.map((dev) => {
        if (artToHide.show == true) {
        } else {
         dev.show = false; return dev}
         this.setState({dev: mappedDev})
      })

  }

  showDev(devToShow) {
      const {devInfo} = this.state
      console.log({devInfo})
        var index = devInfo.findIndex(devItem => devItem.title === devToShow.title)
        devInfo[index].show = !devInfo[index].show
        this.setState({devInfo})
  }

  render() {
    window.mySwipe = new Swipe(document.getElementById('slider'));
        return (
          <div className="parentHorizontal">
            <br />
            <MyHorizontalScroll>
              {this.state.devInfo && this.state.devInfo.map(dev => {
                return ([
                  <img onClick={ (e) => {this.hideAll(dev); this.showDev(dev)} } className='art img-responsive childHorizontal' src={dev.img}/>,
                  <div>{dev.show == true && <div className='img-responsive box'><h1>{dev.title}</h1><p>{dev.about}</p></div>}</div>
                ])
              }
              )}
            </MyHorizontalScroll>
          </div>
        )}
  }



export default webDev
