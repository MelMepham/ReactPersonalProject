import React from 'react'
// import HorizontalScroll from 'react-scroll-horizontal'
import MyHorizontalScroll from './MyHorizontalScroll'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import thisArt from '../data/artInfo.js'
import Swipe, { SwipeItem } from 'swipejs/react';


class artPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      art: [],
    }

    this.showArt = this.showArt.bind(this)
  }
  componentDidMount() {
      let mySwipe = this.swipe;
      this.setState({art:thisArt})
  }

  hideAll(artToHide) {
      var mappedArt = this.state.art.map((art) => {
        if (artToHide.show == true) {
        } else {
         art.show = false; return art}
         this.setState({art: mappedArt})
      })

  }

  showArt(artToShow) {
      const {art} = this.state
        var index = art.findIndex(artItem => artItem.title === artToShow.title)
        art[index].show = !art[index].show
        this.setState({art})
  }

  render() {
    window.mySwipe = new Swipe(document.getElementById('slider'));
        return (

          <div className="parentHorizontal">
            <br /> 
            <MyHorizontalScroll>
              {this.state.art && this.state.art.map(art => {
                return ([
                  <img onClick={ (e) => {this.hideAll(art); this.showArt(art)} } className='art img-responsive childHorizontal' src={art.img}/>,
                  <div>{art.show == true && <div className='img-responsive box'><h1>{art.title}</h1><p>{art.about}</p></div>}</div>
                ])
              }
              )}
            </MyHorizontalScroll>
          </div>
        )}
  }



export default artPage
