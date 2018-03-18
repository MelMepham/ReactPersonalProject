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
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
  }
  componentDidMount() {
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

onMouseOver(devImg) {
    const {devInfo} = this.state
    var index = devInfo.findIndex(Item => Item.img == devImg.img)
    devInfo[index].img = devInfo[index].imgMouseOver
    this.setState({devInfo})
    console.log(devInfo[index].imgMouseOver)
    console.log("mouseOver", index)
}

onMouseOut(img) {
    const {devInfo} = this.state
    var index = devInfo.findIndex(Item => Item.imgMouseOver == img.imgMouseOver)
    devInfo[index].img = devInfo[index].imgMouseOut
    this.setState({devInfo})
    console.log("mouseOut", index)

}

  showDev(devToShow) {
        const {devInfo} = this.state
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
                  <img onClick={ (e) => {this.hideAll(dev); this.showDev(dev)} } onMouseOver={(e) => {this.onMouseOver(dev)}} onMouseOut={(e) => {this.onMouseOut(dev)}} className='art img-responsive childHorizontal' src={dev.img}/>,
                  <div>{dev.show == true && <div className='img-responsive box'><h1>{dev.title}</h1><p>{dev.about}</p></div>}</div>
                ])
              }
              )}
            </MyHorizontalScroll>
          </div>
        )}
  }



export default webDev
